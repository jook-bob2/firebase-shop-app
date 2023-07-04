import firebaseConfig from '@src/core/config/firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const { firebaseSignUp, firebaseSignIn, firebaseAuth, firebaseDB } =
  firebaseConfig;

const usersCollectionRef = collection(firebaseDB, 'user');

/**
 * @desc 회원가입
 */
export async function postUserSignUp({ email, password, name, role }) {
  const response = await firebaseSignUp(firebaseAuth, email, password);
  console.log('response ', response);
  const { accessToken } = response.user;
  const { uid } = response.user;
  const { id } = usersCollectionRef;
  console.log('usersCollectionRef ', usersCollectionRef);

  const r1 = await addDoc(usersCollectionRef, {
    email,
    password,
    name,
    role,
    id,
    uid,
  });
  console.log('@r1 ', r1);

  return { email, id, name, role, uid, accessToken };
}

/**
 * @desc 로그인
 */
export async function postUserSignIn({ email, password }) {
  const response = await firebaseSignIn(firebaseAuth, email, password);
  console.log('response ', response);
  const userInfo = await getUserInfo(response.user.uid);
  console.log('userInfo ', userInfo);

  return { ...userInfo, accessToken: response.user.accessToken };
}

/**
 * @desc 유저정보
 */
export async function getUserInfo(uid) {
  const data = await getDocs(usersCollectionRef);
  const list = data.docs;
  return list.find((d) => d.data().uid === uid)?.data();
}
