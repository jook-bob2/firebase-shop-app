import firebaseConfig from '@src/core/config/firebase-config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

const {
  firebaseSignUp,
  firebaseSignIn,
  firebaseAuth,
  firebaseDB,
  firebaseSignOut,
} = firebaseConfig;

const usersCollectionRef = collection(firebaseDB, 'user');

/**
 * @desc 회원가입
 */
export async function postUserSignUp({ email, password, name, role }) {
  const response = await firebaseSignUp(firebaseAuth, email, password);
  const { accessToken } = response.user;
  const { uid } = response.user;
  const { id } = usersCollectionRef;

  await addDoc(usersCollectionRef, {
    email,
    password,
    name,
    role,
    id,
    uid,
  });

  return { email, id, name, role, uid, accessToken };
}

/**
 * @desc 로그인
 */
export async function postUserSignIn({ email, password }) {
  const response = await firebaseSignIn(firebaseAuth, email, password);
  const userInfo = await getUserInfo(response.user.uid);

  return { ...userInfo, accessToken: response.user.accessToken };
}

/**
 * @desc 유저정보
 */
export async function getUserInfo(uid) {
  const q = query(usersCollectionRef, where('uid', '==', uid));
  const data = await getDocs(q);
  const d = data.docs.map((u) => u.data())[0];
  return d;
}

/**
 * @desc 로그아웃
 */
export async function postSignOut() {
  await firebaseSignOut(firebaseAuth);
}
