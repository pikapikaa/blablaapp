import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/services/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={{flex: 1}}>
          <Text>blabla</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
