import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'core/store/store';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlaylistListScreen from './components/PlaylistListScreen/PlaylistListScreen';
import PlaylistShowScreen from './components/PlaylistShowScreen/PlaylistShowScreen';
export interface RootStackParamList extends ParamListBase {
  PlaylistListScreen: undefined;
  PlaylistShowScreen: {playlistId: string};
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PlaylistScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="PlaylistListScreen"
            component={PlaylistListScreen}
            options={{title: 'Playlist List Screen'}}
          />
          <Stack.Screen
            name="PlaylistShowScreen"
            component={PlaylistShowScreen}
            options={({route}) => ({
              title: `Playlist ${route.params.playlistId}`,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
