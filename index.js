import { getAppId, createUser, acquireSessionToken, initializeUser } from "./functions.js";

const API_KEY = "TEST_API_KEY:b274f8905861b655f707f1930175506e:db19444e9963fac41c90dab8226c0b4e";
const APP_ID = await getAppId(API_KEY);

console.log("APP_ID:", APP_ID);

let user = await createUser(API_KEY);

console.log("user:", user);

let session = await acquireSessionToken(user.userId, API_KEY);

console.log("session:", session);

let challengeId = await initializeUser(session.userToken, API_KEY);

console.log("challengeId:", challengeId);
