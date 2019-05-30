<br />
<br />

<p align="center">
<img src="https://nearprotocol.com/wp-content/themes/near-19/assets/img/logo.svg?t=1553011311" width="240">
</p>

<br />
<br />

# Template for NFTs (Non-Fungible Tokens)

## Description

* Template for creating NEAR dapps with a React frontend
* We got Webpack! 💥
* We got Gulp! 💦
* We got Corgis? 🐶


## To Run on local node
Step 1: Create account for the contract and deploy the contract.
```
npm install
near create_account --account_id id
near deploy --account_id id
```

Step 2:
modify src/settings.js line that sets the contractName. Set it to id from step 1.
```
const contractName = "contractId"; /* TODO: fill this in! */
```

Step 3:
Open src/index.html in your browser.
That's it!


## To Test

```
npm install
npm run-script build
npm test
```

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract
