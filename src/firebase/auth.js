import firebase from './firebase';

/**
 * Returns the Firebase Auth service
 */
export const getAuth = () => {
  return firebase.auth();
};

/**
 * Returns a new instance of GitHub auth provider.
 */
export const githubOAuth = () => {
  return new firebase.firebase_.auth.GithubAuthProvider();
};

/**
 * Returns a new instance of Twitter auth provider.
 */
export const twitterOAuth = () => {
  return new firebase.firebase_.auth.TwitterAuthProvider();
};

/**
 * Returns a new instance of Facebook auth provider.
 */
export const facebookOAuth = () => {
  return new firebase.firebase_.auth.FacebookAuthProvider();
};
