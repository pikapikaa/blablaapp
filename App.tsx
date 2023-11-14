import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './src/services/store/store';
import Navigation from './src/services/navigation/Navigation';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'ios') return;
    SplashScreen.hide();
  }, []);
  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
