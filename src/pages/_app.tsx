// Next
import { AppProps } from 'next/app';

// Redux
import { Provider } from 'react-redux';
import { store } from 'app/store';

// Styles
import '../styles/style.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

export default App;