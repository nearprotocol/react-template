import "allocator/arena";
export { memory };

import { context, storage, near } from "./near";

import { Greeter } from "./model.near";
// --- contract code goes below
// To be able to call this function in the contract we need to export it
// using `export` keyword.

export function hello(): string {
  let greeter = new Greeter("Hello");
  return greeter.greet("world");
}

// simplified and modified version of the ERC721 standard
// ERC721 

  //  function name() constant returns (string name);
  //  function symbol() constant returns (string symbol);
  //  function totalSupply() constant returns (uint256 totalSupply);
  //  function balanceOf(address _owner) constant returns (uint balance);

  //  Functions that define ownership
  //  function ownerOf(string tokenId) constant returns (address owner);

  //  function approve(address to, string tokenId);
  //  function takeOwnership(string tokenId);

  //  function transfer(address to, string tokenId);
  //  function tokenOfOwnerByIndex(address _owner, string _index) constant returns (uint tokenId);

  //  Token metadata
  //  function tokenMetadata(string tokenId) constant returns (string infoUrl);

  //  NON ERC721 Helper functions to operate on tokens
  // function getToken(string tokenId) returns (Token token);
  // function getTokensByOwner(ownerId) 
  // generateRandomToken() returns generated token

