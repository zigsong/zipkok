import { FirebaseApp, initializeApp } from 'firebase/app';
import { child, getDatabase, onValue, push, ref, update } from 'firebase/database';
import 'firebase/auth';

import { valueof } from 'utils/typeUtils';
import API_PATH from 'requests/paths';

const databaseURL = 'https://zipkok-52711-default-rtdb.asia-southeast1.firebasedatabase.app';

export class RealTimeApi {
  #firebase: FirebaseApp;

  constructor() {
    this.#firebase = initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    });
  }

  public fetch<T>(path: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const db = getDatabase();
      const reference = ref(db, path);

      onValue(reference, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          resolve(data);
        } else {
          reject(new Error('firebase get error'));
        }
      });
    });
  }

  public post<T>(path: valueof<typeof API_PATH>, postBody: T): Promise<void> {
    return new Promise<void>((_, reject) => {
      const db = getDatabase();
      const newPostKey = push(child(ref(db), path)).key;

      try {
        const updates: Record<string, T> = {};
        updates[path + newPostKey] = { id: newPostKey, ...postBody };

        return update(ref(db), updates);
      } catch (error) {
        reject(new Error('firebase post error: ' + error));
      }
    });
  }
}

export default new RealTimeApi();
