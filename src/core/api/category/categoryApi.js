import firebaseConfig from '@src/core/config/firebase-config';
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';

const { firebaseDB } = firebaseConfig;
const categoriesCollectionRef = collection(firebaseDB, 'categories');

export async function getCategoryList() {
  const data = await getDocs(categoriesCollectionRef);
  return data.docs.map((d) => d.data());
}

export async function getCategoryItem(id) {
  const q = query(
    categoriesCollectionRef,
    where('id', '==', id),
    orderBy('id', 'desc'),
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((d) => d.data())[0];
}

export async function getSubCategoryList(id) {
  const category = await getCategoryItem(id);
  return category.subCategories || [];
}
