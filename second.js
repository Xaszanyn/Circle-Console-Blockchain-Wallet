import { acquireSessionToken, getWallet, makeTransaction } from "./functions.js";
import dotenv from "dotenv";
// import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";

dotenv.config();

const API_KEY = process.env.API_KEY;
const WALLET_ID = process.env.WALLET_ID;

let wallet = await getWallet(WALLET_ID, API_KEY);

const USDC_TOKEN_ID = wallet.tokenBalances[1].token.id;

console.log("wallet:");
console.dir(wallet, { depth: null });

const USER_ID = process.env.USER_ID;

const DESTINATION_ADDRESS = process.env.DESTINATION_ADDRESS;

let { userToken, encryptionKey } = await acquireSessionToken(USER_ID, API_KEY);

let transaction = await makeTransaction(
  USER_ID,
  userToken,
  encryptionKey,
  WALLET_ID,
  USDC_TOKEN_ID,
  DESTINATION_ADDRESS,
  API_KEY
);

console.log("transaction:");
console.dir(transaction, { depth: null });

// const sdk = new W3SSdk();

// const APP_ID = process.env.APP_ID;

// sdk.setAppSettings({ appId: APP_ID });
// sdk.setAuthentication({ userToken, encryptionKey });

// sdk.execute(challengeId, (error, result) => {
//   if (error) {
//     toast.error(`Error: ${error?.message ?? "Error!"}`);
//     return;
//   }
//   toast.success(`Challenge: ${result?.type}, Status: ${result?.status}`);
// });
