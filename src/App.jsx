import '@styles/global.scss';
import '@styles/reset.scss';
import DefaultRouter from '@src/routes/DefaultRoute';
import { useEffect } from 'react';
import { Provider } from './core/store';

function App() {
  useEffect(() => {
    console.log(
      `############### Environment :: ${process.env.VITE_NODE_ENV} ###############`,
    );
  }, []);

  return (
    <Provider>
      <DefaultRouter></DefaultRouter>
    </Provider>
  );
}

export default App;
