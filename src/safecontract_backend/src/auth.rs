use crate::{Session, User, ACTIVE_SESSIONS, USERS};
use ic_cdk::{query, update};
// use ic_cdk::{caller};
use serde_json;
// use serde::Serialize;

#[update]
fn sign_up(email: String, password: String) -> Result<(), String> {
    // Such an email is already registered in the dApp!
    if email.is_empty() || password.is_empty() {
        return Err("Username or password cannot be empty".to_string());
    }

    // User template
    let new_user_id = ic_cdk::caller();
    let new_user_credentials = User {
        identity: new_user_id.to_string(),
        email: email.to_string(),
        password: password.to_string(),
        contracts: Vec::new(),
    };

    // User Save
    USERS.with(|users| users.borrow_mut().insert(new_user_id, new_user_credentials));
    Ok(())
}

// User Login
#[update]
fn login(email: String, password: String) -> Result<(), String> {
    // if email or password is empty, revert err
    if USERS.with(|users| users.borrow().is_empty()) {
        return Err("No users exist".to_string());
    }

    // may this email addres was saved on this app
    let user_exists = USERS.with(|users| {
        users
            .borrow()
            .values()
            .any(|user| user.email == email && user.password == password)
    });

    if !user_exists {
        return Err("Wrong user credentials".to_string());
    }

    // maybe user is already logged in?
    if ACTIVE_SESSIONS.with(|sessions| {
        sessions
            .borrow()
            .iter()
            .any(|session| session.user_id == ic_cdk::caller())
    }) {
        return Err("User already logged in".to_string());
    }

    // get Principal of active user
    let user_id = ic_cdk::caller();
    ACTIVE_SESSIONS.with(|sessions| {
        sessions.borrow_mut().push(Session { user_id });
    });

    // Result effect
    Ok(())
}

// Get active user
#[query]
fn get_current_user() -> Option<String> {
    USERS.with(|users| {
        let users = users.borrow();
        if let Some(user) = users.get(&ic_cdk::caller()) {
            // Converts user data to JSON object
            let user_json = serde_json::json!({
                "identity": user.identity,
                "email": user.email,
                "password": user.password,
                "contracts": user.contracts,
            });
            Some(user_json.to_string())
        } else {
            None
        }
    })
}
// #[query]
// fn get_current_user() -> Option<String> {
//     USERS.with(|users| {
//         let users = users.borrow();
//         if let Some(user) = users.get(&ic_cdk::caller()) {
//             // Converts user data to JSON object
//             let user_json = serde_json::json!({
//                 "identity": user.identity,
//                 "email": user.email,
//                 "password": user.password,
//                 "contracts": user.contracts,
//             });
//             Some(user_json.to_string())
//         } else {
//             None
//         }
//     })
// }

// User Logging out
#[update]
fn logout() {
    // get Principal of active user
    let user_id = ic_cdk::caller();

    // Access the thread-local active sessions
    ACTIVE_SESSIONS.with(|sessions| {
        // Borrow the sessions mutably and filter out the session with the given user_id
        sessions
            .borrow_mut()
            .retain(|session| session.user_id != user_id);
    });
}
