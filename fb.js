import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// import firestore from 'firebase/firestore';
// import firebase from "firebase/compat/app";
/*step 1: the first thing that we need to do is set up the env so our this project could connect with firebase
login to your account
Click on Project overview at the top left corner --> Project settings -->at the bottom (your apps) --> this needs to be done
because we need to tell the firebase that we are going to connect some code with this firebase for our data push/pull operation
--> register app

step2: 
We have to create an external file like this which will have the connection details to connect with firebase
onoce the register app is done we will have below config details which will have everything needed to connect

step3:
Now firebaseconfig is a const dict which has all the values but there should be some function/method call
which would use it as an input
which is where firebase provides the functions from the SDKs
so to get anything from firebase we will have to use below import commands
import {initializeApp} from "firebase/app"; --initializeApp is the function which creates function
import {getAnalytics} from 'firebase/analytics';
*/
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};
const app = initializeApp(firebaseConfig);//just this line doesnt' guarantee db
/* step5:
for having a db connection, we need to log back in inside the firebase and in the left bar 
choose firestore DB and then create a new DATABASE in prod mode and that would open a new db ready to connect
to get a reference to our db we will initialize the firestore object

step6:
After creating db we need to allow ourselves to read and write so need to manage rules --> make true to read& write
const db = firebase.firestore();
now whenever in the entire project we would like to talk with db, we can use the cosntant db
snapShots are as we will pe pulling the latest snapshot of the db everytime we retreive the data from firebase/store
db.settings({timestampsInSnapshots: true})
*/
export const db = getFirestore(app);
