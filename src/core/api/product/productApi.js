import firebaseConfig from '@src/core/config/firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';

const { firebaseDB } = firebaseConfig;

const productsCollectionRef = collection(firebaseDB, 'products');
const POPULAR_ID = '1002';

export async function getProductList(categoryId) {
  const q = query(productsCollectionRef, where('categoryId', '==', categoryId));
  const data = await getDocs(q);
  return data.docs.map((d) => d.data());
}

export async function getProductItem(id) {
  const q = query(productsCollectionRef, where('productId', '==', id));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((d) => d.data())[0];
}

export async function getPopularList() {
  const q = query(productsCollectionRef, where('categoryId', '==', POPULAR_ID));
  const data = await getDocs(q);
  return data.docs.map((d) => d.data());
}
