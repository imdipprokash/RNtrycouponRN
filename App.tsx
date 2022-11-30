import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import DrawerRoutes from './DrawerRoutes';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  React.useEffect(() => {
    if (SplashScreen !== null) {
      SplashScreen.hide();
    }
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#f3f',
          tabBarStyle: {
            // position: 'absolute',
            // bottom: 10,
            height: 60,
            paddingVertical: 10,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 16,
            paddingBottom: 2,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={DrawerRoutes}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icons name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icons name="facebook" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
