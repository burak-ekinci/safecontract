use crate::{Contract, CONTRACTS, USERS};
use ic_cdk::{query, update};

#[update]
fn add_contract(creator: String, approver: String, terms: String) -> Result<(), String> {
    // Such an email is already registered in the dApp!
    if terms.is_empty() || approver.is_empty() || approver == " " || terms == " " {
        return Err("Contract terms or approvers cannot be empty".to_string());
    }

    // Make unique contract id
    let unique_id = generate_unique_id();
    let new_contract = Contract {
        id: unique_id.to_string(),
        creator: creator.to_string(),
        approver: approver.to_string(),
        terms: terms.to_string(),
        approved_creator: false,
        approved_approver: false,
    };

    add_contract_id_to_user(approver, unique_id.clone());

    add_contract_id_to_user(creator, unique_id.clone());
    CONTRACTS.with(|contracts| contracts.borrow_mut().insert(unique_id, new_contract));
    Ok(())
}

#[update]
fn get_contract(contract_id: String) -> Option<String> {
    CONTRACTS.with(|contracts| {
        let all_contracts = contracts.borrow();
        //buraya gelecek string contract id bul
        if let Some(contract) = all_contracts.get(&contract_id) {
            // Converts contract data to JSON object
            let contract_json = serde_json::json!({
                "id": contract.id,
                "creator": contract.creator,
                "approver": contract.approver,
                "terms": contract.terms,
                "approved_creator": contract.approved_creator,
                "approved_approver": contract.approved_approver,
            });
            Some(contract_json.to_string())
        } else {
            None
        }
    })
}
#[query]
fn get_current_user_contracts(email: String) -> Option<Vec<String>> {
    USERS.with(|users| {
        let users = users.borrow();
        if let Some(user) = users.get(&email) {
            Some(user.contracts.clone())
        } else {
            None
        }
    })
}

#[update]
fn get_contract_id(email: String) -> Option<String> {
    let contract_array = get_current_user_contracts(email).unwrap_or_default();
    if !contract_array.is_empty() {
        // İlk değer indeksleme ile alındı
        Some(contract_array[0].clone())
    } else {
        None
    }
}

#[update]
fn approve_contract(current_email: String, contract_id: String) -> bool {
    CONTRACTS.with(|contracts| {
        let mut all_contracts = contracts.borrow_mut();
        if let Some(contract) = all_contracts.get_mut(&contract_id) {
            // Check if the caller is the creator or approver
            if &contract.creator == &current_email {
                contract.approved_creator = true;
            } else if &contract.approver == &current_email {
                contract.approved_approver = true;
            } else {
                // Return false if the caller is neither the creator nor the approver
                return false;
            }
            true
        } else {
            false
        }
    })
}

#[update]
fn add_contract_id_to_user(user_email: String, contract_id: String) {
    USERS.with(|users| {
        let mut users_map = users.borrow_mut();
        if let Some(user) = users_map.get_mut(&user_email) {
            user.contracts.push(contract_id);
        } else {
            println!("User not found.");
        }
    });
}

#[update]
fn generate_unique_id() -> String {
    let mut rnd = 0;
    rnd = rnd + 1;
    rnd.to_string()
}

// #[query]
// fn get_current_principal() -> String {
//     let principal = caller().to_string();
//     principal
// }
