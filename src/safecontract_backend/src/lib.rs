mod auth;
mod contract;

use ic_cdk::query;
use serde::{Deserialize, Serialize};
use std::cell::RefCell;
use std::collections::BTreeMap;

#[query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[query]
fn sayhello(name: String) -> String {
    format!("merhaba, {}!", name)
}

// Types
type Contracts = BTreeMap<String, Contract>;
type Users = BTreeMap<String, User>; //..
type ActiveSessions = Vec<Session>;

thread_local! {
    pub static USERS: RefCell<Users> = RefCell::default();
    pub static CONTRACTS: RefCell<Contracts> = RefCell::default();
    pub static ACTIVE_SESSIONS: RefCell<ActiveSessions> = RefCell::default();
}

#[derive(Debug, Serialize, Deserialize)]
struct Contract {
    id: String,
    creator: String,
    approver: String,
    terms: String,
    approved_creator: bool,
    approved_approver: bool,
}

// User Contract
#[derive(Debug, Serialize, Deserialize)]
struct User {
    pub identity: String,
    pub email: String,
    pub password: String,
    pub contracts: Vec<String>,
}

// Session Struct
#[derive(Debug, Serialize, Deserialize)]
struct Session {
    pub user_id: String, // ..
}
