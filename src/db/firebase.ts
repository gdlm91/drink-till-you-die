import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_APP_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = firebase.initializeApp(config);

const db = firebase.database();

const auth = firebase.auth();

export { firebase, app, db, auth };
