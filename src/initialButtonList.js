import { auth } from './firebase';

/**
 * Initial state of the Social Buttons
 */
export default {
  github: {
    visible: true,
    provider: () => {
      const provider = auth.githubOAuth();
      provider.addScope('user');
      return provider;
    }
  },
  twitter: {
    visible: true,
    provider: () => auth.twitterOAuth()
  },
  facebook: {
    visible: true,
    provider: () => auth.facebookOAuth()
  }
};
