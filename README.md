# DeFi Liquidation Client

This client lists vulnerable Defi accounts that can be liquidated.  It will
then provide the interfaces and necessary functions and services necessary
to access the liquidations and place bids.

# System Summaries

Since these systems are the so complex and large, I have provided a quick
summary about how and what we are doing with each contract.

# MakerDAO

For MakerDao we will list the Flop, Flip, and Flap auctions.

| Name | Description |
| :-: | :-: |
| `flip` | A Flip liquidation is the liquidation targeting under-collateralized Vaults |
| `flop` | A Flop liquidation is an auction for selling off MKR for a fixed amount of DAI.  Medium is fixed DAI auctions. |
| `flap` | A Flap is a surplus auction for selling off surplus DAI.  This excess DAI comes from stability Fees.  Medium is increasing amounts of MKR |

### Pertinent Contracts

| Name | Desc | Docs | Curr. Contract | Usage Category |
| :-: | :-: | :-: | :-: | :-: |
| CAT | This contract allows for the liquidation of Contracts | [Link](https://docs.makerdao.com/smart-contract-modules/core-module/cat-detailed-documentation) | 0x78F2c2AF65126834c51822F56Be0d7469D7A523E | Data & Listing |
|VAT| Call `ilks(_ilk_hex)` and `Call `urns(hex(_ilk), _vat_addr)` to get ink (encumbered Collateral) and art (Encumbered Normalized Debt) | [Link](https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation) | 0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B | Data & Listing |
