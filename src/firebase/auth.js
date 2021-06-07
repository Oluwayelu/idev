import { auth, firebase } from "./index.js";

const createUser = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((e) => {
      console.log(e.message)
    });
};

const signInUser = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((e) => {
      console.log(e);
    });
};

const signInWIthGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const signInWithGithub = () => {
  const provider = new firebase.auth.GithubAuthProvider();

  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { createUser, signInUser, signInWIthGoogle, signInWithGithub };
