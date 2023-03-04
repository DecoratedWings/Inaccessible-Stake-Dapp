# Not So Great UX Stake Dapp 

## UX

To be clear, this app was intentionally designed to have accessibility issues to mimic and simulate behavior seen in various dapps in Web3. The goal is to use this simulation as a helpful resources for others in learning accessibility testing.

## Decentralized Application (Dapp)

Very straightforward staking dapp. A dapp wallet with preloaded sepolia ETH and BS token is connected to simulate staking and unstaking. The wallet address may be found here: 
https://sepolia.etherscan.io/address/0xbbdf8ab081eafb5ea25745ebc1271fa9f8817671#code

All the options stake the same token to the same contract. 
In an actual staking app these would be delegated to different pools and through different chains. 

The app is deployed through netlify and leverages the netlify serverless functions to securely connect app secrets on the backend. Never save env variables and sensitive information on your client! 

## Contract 

Deployed on sepolia here: 
https://sepolia.etherscan.io/address/0xbbdf8ab081eafb5ea25745ebc1271fa9f8817671#code

Contract is a straightforward staking example. It is not audited or production grade. 
User may stake their Bad Steak BS token and receive 1 token for every second of staking. 

## Live Demo 
Check it out here: 
https://notsogreatux.netlify.app/

## Design 

