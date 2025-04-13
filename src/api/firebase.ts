import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { User } from '@/types';
import { loginUser, registerUser } from '@/api';
import { saveUserToLocalStorage } from '@/lib/local-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7ivHGb0edAnecD0l0JFdGTEnEtg7Fvw0',
  authDomain: 'pet-lombart.firebaseapp.com',
  projectId: 'pet-lombart',
  storageBucket: 'pet-lombart.firebasestorage.app',
  messagingSenderId: '1075091042587',
  appId: '1:1075091042587:web:55d40de3ed08776e74e3be',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const handleGoogleSignIn = async (): Promise<boolean> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log('Google Sign-In successful:', user);

    if (user.email && user.uid) {
      try {
        let userLocal = await loginUser(user.email, user.uid);

        saveUserToLocalStorage(userLocal);
        return true;
      } catch (error) {
        const newUser: Omit<User, 'id'> = {
          fullName: user.displayName || 'Unknown User',
          email: user.email,
          password: user.uid,
          role: 'Волонтер',
          verified: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        const registeredUser = await registerUser(newUser);
        saveUserToLocalStorage(registeredUser);
        return true;
      }
    }
    throw new Error('User email or UID is missing');
  } catch (error) {
    throw new Error('Google Sign-In failed: ' + error);
  }
};

export { auth, provider, handleGoogleSignIn };
