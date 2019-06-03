import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import TokensApp from "./frontend.jsx";
import "./config.js"

async function initContract() {
  // Initializing connection to the NEAR DevNet.
  window.near = await nearlib.dev.connect(nearConfig);
  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(window.nearConfig.contractName, {
    // NOTE: This configuration only needed while NEAR is still in development
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ["hello"],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: [],
    // Sender is the account ID to initialize transactions.
    // For devnet we create accounts on demand. See other examples on how to authorize accounts.
    sender: nearlib.dev.myAccountId
  });
}

// Using initialized contract
async function doWork() {
  ReactDOM.render( 
    <TokensApp contract = {contract}/> ,
    document.getElementById('app')
  );
}

// COMMON CODE BELOW:
// Loads nearlib and this contract into window scope.

window.nearInitPromise = initContract()
  .then(doWork)
  .catch(console.error);

// << frontend-snippet
