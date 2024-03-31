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
- [Project Functionalities](#project-functionalities)
  - [Testing Process for Hackathon](#testing-process-for-hackathon)
  - [UI Photos](#-welcome)

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

### Key Contributions of Safe Contract

### The possibility to eliminate insecurities in Remote Work:

<b>In future versions</b>, Safe Contract will also have features for remote work. It will allow the creation of customized contracts and payment systems without the need for any authorization, providing a seamless experience for users.

### Versitale Application:

You can hash the photos of your physical contracts, property deeds, checks, and other valuable items using IPFS (InterPlanetary File System) and store them on the ICP (<a href="https://internetcomputer.org/"> Internet Computer Protocol</a>) blockchain. This method enhances document security by ensuring data integrity and provides a decentralized structure

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

## &#9745; Welcome

Welcome Page
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/Welcome.jpeg"> <br> </br>

## &#9745; Authentication

You can Sign Up or Log In to the DApp
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/login.jpeg"> <br> </br>

## &#9745; Add a Contract

You can sign and verify contracts with other people
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/addContract.jpeg"> <br> </br>

## &#9745; Approve Contract as a Creator

You can sign and verify contracts with other people
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/creatorApproved.jpeg"> <br> </br>

## &#9745; Make Sure that Other Approvers was Approved Contract

Each user can see whether the other user approves the contract or not
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/allApproved.jpeg"> <br> </br>

## &#9745; Listing my All Contracts

See contracts that you or people have created for you. Confirm as per your wish.
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/notapproved.jpeg"> <br> </br>

## &#9745; You can See the Roadmap of the Project

You can see our roadmap and understand where the project is heading.
<br> <img src="https://github.com/burak-ekinci/safecontract/blob/main/sc/roadmap.jpg"> <br> </br>
