import AdmMain from '@src/pages/adm/main';
import AdmProductMngt from '@src/pages/adm/product-mngt';
import AdmUserMngt from '@src/pages/adm/user-mngt';
import Home from '@src/pages/home';
import Product from '@src/pages/product';
import ProductDetail from '@src/pages/product/detail';
import UserSignIn from '@src/pages/user/sign-in';
import UserSignUp from '@src/pages/user/sign-up';

export const USER_ROUTES = [
  {
    key: 1,
    path: '/',
    element: Home,
  },
  {
    key: 2,
    path: '/product',
    element: Product,
  },
  {
    key: 3,
    path: '/product/detail',
    element: ProductDetail,
  },
  {
    key: 4,
    path: '/user/sign-in',
    element: UserSignIn,
  },
  {
    key: 5,
    path: '/user/sign-up',
    element: UserSignUp,
  },
];

export const ADMIN_ROUTES = [
  {
    key: 1,
    path: '/adm/main',
    element: AdmMain,
  },
  {
    key: 2,
    path: '/adm/product-mngt',
    element: AdmProductMngt,
  },
  {
    key: 3,
    path: '/adm/user-mngt',
    element: AdmUserMngt,
  },
];
