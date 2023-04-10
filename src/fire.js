import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPM7wmh44pEk2xFAthz48qlccUgWbXKkw",
  authDomain: "githubdeploy-4a2eb.firebaseapp.com",
  projectId: "githubdeploy-4a2eb",
  storageBucket: "githubdeploy-4a2eb.appspot.com",
  messagingSenderId: "1048932915836",
  appId: "1:1048932915836:web:cca9314c75683147df07f9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signInWithGoole = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then(result => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};
