# zklink-proof-market-graph

A subgraph for indexing BatchCompleted events from the ZKLink ProofAuctionMarket contract.

The GraphQL endpoint for the **Sepolia** testnet is https://sepolia.graph.zklink.io/subgraphs/name/proof-market

## Overview

This subgraph tracks proof generation events in the ZKLink network, specifically monitoring the BatchCompleted events from the ProofAuctionMarket contract. It stores information about completed batches, including network IDs, batch IDs, bidders, block ranges, and rewards.

## Features

- Indexes BatchCompleted events from the ProofAuctionMarket contract
- Tracks proof generation metrics including:
  - Network and batch identifiers
  - Bidder addresses
  - Block ranges (start and end)
  - Reward amounts
  - Timestamp and transaction details
- Provides aggregated statistics on hourly and daily intervals

## Contract Details

- Network: zklink-nova-sepolia
- Contract Address: `0xcAFC7C2368f58B9cff6a6AcF449337bc47A33C7b`
- Start Block: 309448

## Deploy

```sh
# Install dependencies
yarn install

# Generate TypeScript types from schema
yarn codegen

# Build the subgraph
yarn build

# Deploy
yarn create-local
yarn deploy-local
```