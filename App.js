import React from 'react';
import {View , Text ,StyleSheet} from 'react-native';
import RandomColor from './src/RandomColor';

const App = () => {
  return (
    <View >
      <RandomColor/>
    </View>
  );
}

//////// export the component to make it available to other parts of the app/////////////////////
export default App;