// NPM packages
import { collection, doc } from "firebase/firestore/lite"; // normal methods
import { addDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore/lite"; // async methods

// Project files
import { fireStoreInstance } from "../scripts/firebase";

export async function createDocument(path, data) {
  const collectionReference = collection(fireStoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);

  return documentReference.id;
}

export async function updateDocument(path, data) {
  const documentReference = doc(fireStoreInstance, path, data.id);

  await updateDoc(documentReference, data);
}

export async function deleteDocument(path, data) {
  const docReference = doc(fireStoreInstance, path, data.id);

  await deleteDoc(docReference);
}

export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return list;
}
