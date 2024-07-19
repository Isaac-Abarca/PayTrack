// src/utils/firebaseUtils.js
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';

export const uploadFile = async (file, path) => {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const fileURL = await getDownloadURL(snapshot.ref);
  return fileURL;
};

export const addDebt = async (debtData) => {
  await addDoc(collection(db, 'deudas'), debtData);
};
