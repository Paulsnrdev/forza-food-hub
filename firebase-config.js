// ─────────────────────────────────────────────────────────────
//  FORZA FOOD HUB — Firebase Configuration
//  Replace every value below with the ones from your Firebase
//  project console → Project Settings → Your apps → SDK setup
// ─────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "PASTE_YOUR_PROJECT_ID",
  storageBucket:     "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId:             "PASTE_YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
