use crate::{Session, User, ACTIVE_SESSIONS, USERS};
use ic_cdk::update;

// Sign Up
#[update]
fn sign_up(email: String, password: String) -> Result<(), String> {
    // email and password cannot be empty
    if email.is_empty() || password.is_empty() {
        return Err("Username or password cannot be empty".to_string());
    }

    // User template
    let new_user_credentials = User {
        identity: email.to_string(),
        email: email.to_string(),
        password: password.to_string(),
        contracts: Vec::new(),
    };

    // User Save
    USERS.with(|users| users.borrow_mut().insert(email, new_user_credentials));
    Ok(())
}

// Login
#[update]
fn login(email: String, password: String) -> Result<(), String> {
    // email and password cannot be empty
    if email.is_empty() || password.is_empty() {
        return Err("Username or password cannot be empty".to_string());
    }

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
            .any(|session| session.user_id == email)
    }) {
        return Err("User already logged in".to_string());
    }

    // get Principal of active user
    let user_id = email;
    ACTIVE_SESSIONS.with(|sessions| {
        sessions.borrow_mut().push(Session { user_id });
    });

    // Result effect
    Ok(())
}

// User Logging out
#[update]
fn logout(email: String) {
    // Access the thread-local active sessions
    ACTIVE_SESSIONS.with(|sessions| {
        // Borrow the sessions mutably and filter out the session with the given user_id
        sessions
            .borrow_mut()
            .retain(|session| session.user_id != email);
    });
}
