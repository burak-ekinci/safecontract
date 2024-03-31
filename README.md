# SC - Safe Contract - ICP Internship Bootcamp Final Project - Mini Hackathon Version

## Table of Contents

- [Project Name](#project-name)
- [Project Team](#project-team---individual)
- [Project Description](#project-description---purpose)
- [Project Vision](#project-vision)
- [Project Setup](#project-setup)
  - [Setting up IC CDK](#setting-up-ic-cdk)
  - [Setting up Rust](#setting-up-rust)
  - [Starting Server](#starting-server)
  - [Deploying Canisters](#deploying-canisters)
- [Project Tree](#project-tree)
- [Project Functionalities](#project-functionalities)
  - [Testing Process for Hackathon](#testing-process-for-hackathon)
  - [Authentication](#authentication)
    - [Signup](#signup)
    - [Login](#login)
    - [Logout](#logout)
  - [User Functionalities](#user-functionalities)
    - [Editing Personal Profile](#editing-personal-profile)
    - [Viewing Provider Info](#viewing-provider-info)
    - [Listing Providers](#listing-providers)
    - [Listing Departments](#listing-departments)
    - [Listing Doctors](#listing-doctors)
    - [Listing Dates](#listing-dates)
    - [Listing Times](#listing-times)
    - [Making Appointment](#making-appointment)
    - [Listing Appointments](#listing-appointments)
  - [Provider Functionalities](#provider-functionalities)
    - [Adding Departments](#adding-departments)
    - [Adding Doctors](#adding-doctors)
    - [Adding Dates](#adding-dates)
    - [Adding Times](#adding-times)
    - [Listings](#listings)
    - [Getting Patient Info](#getting-patient-info)
    - [Adding Disease](#adding-disease)
    - [Adding Allergy](#adding-allergy)
    - [Adding Medications](#adding-medications)
    - [Editing Provider Info](#editing-provider-info)
    - [Listing](#listing)
  - [Admin Functionalities](#admin-functionalities)
    - [Listing Signed Users](#listing-signed-users)
    - [Listing Active Sessions](#listing-active-sessions)
    - [Controlling If User Is Logged In](#controlling-if-user-is-logged-in)
    - [Setting Providers](#setting-providers)
    - [Listing Providers](#listing-providers)
    - [Removing Providers](#removing-providers)
- [Further Moves](#further-moves)

## Project Name

<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/src/safecontract_frontend/src/assets/logo.png"> <br> </br>
SC: Safe Contract on <b><a href="https://internetcomputer.org/"> Internet Computer </a></b>.

## Project Team - Individual

My name is Burak. My software adventure comes from my family's history, my curiosity in technology and electricity triggered my interest in the software world. My web development journey started with HTML, CSS, and JavaScript and grew stronger with Node.js. I worked on a community manager project, then delved into learning React.js, marking the start of a new project. Later, I enhanced my skills by transitioning to Typescript in another project.The world of blockchain fascinated me and I worked intensively to expand my knowledge in this field. I have conducted in-depth research on various topics, including blockchain logic, transactions, transaction structures, standards such as ERC20/721/1155, contract structures, the operation of files such as photos on IPFS, and the Ethereum Virtual Machine (EVM). I completed the Solidity course and reinforced my knowledge with various exercises. Then, I successfully completed a course consisting of 5 projects that aligned with my goal of becoming a blockchain developer. While I was continuing to improve myself on networks such as Polygon Blockchain beyond Ethereum to gain new experiences, I did not want to miss the ICP internship opportunity and started working and here is my first Rust project.

## Project Description - Purpose

Safe Contract Alpha v1.0.0 is an application designed to store and manage various serious physical contracts and secure contracts that require security not on a piece of paper but in a database like blockchain, where it's virtually impossible to tamper with. Only the creators of the contracts have control over them. Users can also create customized contracts for various purposes such as physical-world check and promissory note records, contract creation between individuals, salary payment contracts, contract-based remote work payment systems, and many other features.

## Project Vision

### Problems Safe Contract aiming to Solve

Understanding Satoshi. </br> </br>

Safe Contract addresses the trust issue in the world by providing the highest level of security possible, making it a follower of fraud and agreements itself. It allows you to create your own contracts in a highly secure environment.

### The Vision of DMS

The primary vision of the DMS is to establish DMS as the <b> <i> central platform for healthcare service providers and patients worldwide. </i> </b>
<br>Through the vast data flow integrated into DMS, we empower its AI capabilities, transforming it into an efficient and proactive predictive healthcare service provider. <br> This strategic approach aims to revolutionize healthcare delivery, offering advanced and personalized services to users globally.

### Key Contributions of DMS

### The possibility to eliminate insecurities in Remote Work:

<b>In future versions</b>, Safe Contract will also have features for remote work. It will allow the creation of customized contracts and payment systems without the need for any authorization, providing a seamless experience for users.

### Versitale Application:

You can hash the photos of your physical contracts, property deeds, checks, and other valuable items using IPFS (InterPlanetary File System) and store them on the ICP (<a href="https://internetcomputer.org/"> Internet Computer Protocol</a<> ) blockchain. This method enhances document security by ensuring data integrity and provides a decentralized structure

### Forward Fersatility:

<i>Safe Contract's future plans include </i> empowering individuals to confidently assert their legal rights in case of contract breaches by the counterparty, which is crucial for remote work scenarios. Integration of the KYC (Know Your Customer) system, which I consider highly important for remote work, is also on the roadmap. Additionally, the application will be tokenized, allowing it to be used for creating contracts, adding new approvers to contracts, and including witnesses in the process.

## Project Setup

### Setting up IC CDK and npm packages

```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

For more information or platform specific setup instructions see <a href="https://internetcomputer.org/docs/current/developer-docs/getting-started/install/">ICP Docs : IC_CDK </a>

### Setting up Rust

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

```bash
rustup target add wasm32-unknown-unknown
```

```bash
npm i
```

For more information or platform specific setup instructions see <a href="https://internetcomputer.org/docs/current/developer-docs/backend/rust/dev-env" >ICP Docs : Rust</a>

### Starting Server

For starting project on our local. You can simply use the command below.

```bash
cd /safecontract
```

```bash
dfx start --clean
```

### Deploying Canisters

For deploying canisters and generating our canister interface. You can use the command below.

```bash
cd /safecontract
```

```bash
dfx deploy
```

## Testing Process for Hackathon

To begin testing the environment as demonstrated in the GIFs below, follow these steps:

```bash
dfx start --clean
```

```bash
dfx deploy
```

After running these commands, you can test the application by accessing it at http://localhost:8080 in your web browser.

## &#9745; Authentication

<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/auth.gif"> <br> </br>

## &#9745; Editing Personal Profile

Patients have the ability to edit and manage their personal profiles within the system.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/personal_profile.gif"> <br> </br>

## &#9745;Creating a Provider

This function, typically reserved for Admin users, has been made accessible on the user's navbar for convenience during the testing and development phase, as we are utilizing a single identity for these purposes.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/setting_provider.gif"> <br> </br>

## &#9745; Editing Provider Profile

Providers have the capability to edit their name and location within the system.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/providerprofile.gif"> <br> </br>

## &#9745; Provider Submodule Management: Departments, Doctors, and Appointment Scheduling

Providers are able to create departments, add doctors to those departments, and manage their appointment schedules, including dates and times, within the system.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/creatingappointment.gif"> <br> </br>

## &#9745; Making an Appointment as an User.

Patients have the ability to view active providers on the DMS and can schedule appointments with their desired departments, doctors, dates, and times.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/takinganappointment.gif"> <br> </br>

## &#9745; Managing and Viewing Health Data.

Patients have access to view their own health data on the DMS. Meanwhile, providers are able to edit the health data of desired patients or users.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/managinghealthdata.gif"> <br> </br>

## &#9745; Searching Patients

Providers have the capability to search for desired patients and view their data within the system.
<br> <img src="https://github.com/tugberk963/ICP_Internship_Bootcamp_Final_Project/blob/main/searchingpatients.gif"> <br> </br>

## Project Functionalities

## Authentication

### &#9745; Signup

Users can signup to DMS with desired username and password.

```rust
fn sign_up(username: String, password: String) -> Result<(), String>
```

### &#9745; Login

When users login with their username and password, if the credentials are correct. Login function adds their Principal ID to ACTIVE_SESSIONS.

```rust
fn login(username: String, password: String) -> Result<(), String>
```

### &#9745; Logout

When user wants to log off. Their Principal ID will be removed from ACTIVE_SESSIONS.

```rust
fn logout()
```

### &#9745; Editing Personal Profile

Users can edit their Personal Profile.

```rust
fn edit_user_personal_data(user_id: String, name: String, surname: String, location: String, age: String, height: String, weight: String) -> Result<(), String>
```

### &#9745; Viewing Provider Info

Users can view provider info. Provider name, location, departments etc.

```rust
fn get_provider_info(provider_id: String) -> Option<String>
```

### &#9745; Listing Doctors

Users can list selected departments doctors.

```rust
fn list_doctors(provider_id: String, department_name: String) -> Vec<String>
```

### &#9745; Listing Dates

Users can list available appointment dates for desired doctor.

```rust
fn list_dates(provider_id: String, department_name: String, doctors_name: String) -> Vec<String>
```

### &#9745; Listing Times

Users can list available appointment times for desired dates on selected doctor.

```rust
fn list_times(provider_id: String, department_name: String, doctors_name: String, selected_date: String) -> Vec<String>
```

### &#9745; Making Appointment

Users can make appointment. If provider has the available appointment according to users input. That appointment will be deleted from providers appointment list and will be added into users active appointments list.

```rust
fn make_appointment(provider_id: String, department_name: String, doctor_name: String, date: String, time: String) -> Result <(), String>
```

### &#9745; Listing Appointments

Users can list his active appointments.

```rust
fn list_appointments(user_id: String) -> HashMap<Principal, Vec<AppointmentDetails>>
```

## Provider Functionalities

In DMS, providers refer to any facility that is a health or medical service provider.

### &#9745; Adding Departments

Providers can add departments to themselves.

```rust
fn add_department(provider_id: String, department_name: String) -> Result<(), String>
```

### &#9745; Adding Doctors

Providers can add doctors to their departments.

```rust
fn add_doctor(provider_id: String, department_name: String, doctor_name: String) -> Result<(), String>
```

### &#9745; Adding Dates

Providers can add appointment dates to their doctors.

```rust
fn add_date(provider_id: String, department_name: String, doctor_name: String, date: String) -> Result <(), String>
```

### &#9745; Adding Times

Providers can add appointment times to their appointment dates.

```rust
fn add_time(provider_id: String, department_name: String, doctor_name: String, date: String, time: String) -> Result <(), String>
```

### &#9745; Getting Patient Info

Providers can get patient info.

```rust
fn get_patient_info(patient_id: String) -> Option<String>
```

### &#9745; Adding Disease

Providers can add disease to patients' health data.

```rust
fn add_disease(user_id: String, disease_name: String) -> Result<(), String>
```

### &#9745; Adding Allergy

Providers can add allergy to patients' health data.

```rust
fn add_allergy(user_id: String, allergy_name: String) -> Result<(), String>{
```

### &#9745; Adding Medications

Providers can add medications to patients' health data.

```rust
fn add_medication(user_id: String, medication_name: String) -> Result<(), String>{
```

### &#9745; Editing Provider Info

Providers can edit their info.

```rust
fn edit_provider_info(provider_id: String, provider_name: String, provider_location: String) -> Result<(), String>
```

### &#9745; Listings

Providers have access to the same listing functions available to users.

## Admin Functionalities

In the DMS, we require a decision-maker to determine who will become a provider. Therefore, we need an admin user who will fulfill this role. Security checks for this role will be improved.

### &#9745; Listing Signed Users

Admins can list signed users.

```rust
fn list_signed_users() -> Vec<String>
```

### &#9745; Listing Active Sessions

Admins can list active sessions, logged in users.

```rust
fn list_active_sessions() -> Vec<String>
```

### &#9745; Controlling If User Is Logged In

Admins can check and see if user is logged in.

```rust
fn is_logged_in(user_id: String) -> bool
```

### &#9745; Setting Providers

Admins can set providers. When selected, user will be removed from the user list and added to the provider list.

```rust
fn set_provider(user_id: String) -> Result<(), String>
```

### &#9745; Listing Providers

Admins can list current providers on DMS.

```rust
fn list_providers() -> Vec<String>
```

### &#9745; Removing Providers

Admins can remove a provider from providers lists.

```rust
fn remove_provider(user_id: String) -> Result<(), String>
```

## Further Moves

### &#9745; Front-end will be developed using Svelte.

### &#9745; Users can view their health data within the system.

### &#9745; Users can view their medication data within the system.

### &#9745; Providers can update and view patients' health data within the system.

### &#9745; Providers can update and view patients' medication data within the system.

### &#9745; Providers should be accessible by their name.

### [ ] Since one of the aims of DMS is to make medical data valuable, accessing and viewing a patient's information must require certain measures. Therefore, the next development goal is to adjust a grant system for this purpose.

### [ ] Providers may have sub-modules for their doctors, etc., so doctors can perform data management and updates with separate accounts that are linked to that provider. This may necessitate an account linking system.

### [ ] Old-school authentication system will be removed. Instead, users will utilize Internet Identity to connect to the DMS.

### [ ] The functionality for mapping to see the nearest DMS providers, etc., will be added.

### [ ] General functionality of the DMS will be enhanced. Health data sections will be expanded, and provider management will be improved.
