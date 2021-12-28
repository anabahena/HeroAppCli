import React, {useCallback, useEffect, useState, Fragment} from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './views/WizardHeroes/Home';
import {AppearanceProvider} from 'react-native-appearance';
import Context from './components/App/Context';
import {NavigationContainer} from '@react-navigation/native';
import {setDataLocal} from './lib/data';
import methods from './views/methods';
import NetInfo from '@react-native-community/netinfo';
import Details from './views/WizardHeroes/Details';
import {ThemeDark, ThemeLight} from './components/App/Theme';
import Search from "./views/WizardHeroes/Search";

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme(),
    [data, setData] = useState([]);

  const getLocalData = useCallback(async () => {
    const localData = await setDataLocal(null);
    setData(localData);
  }, []);

  const getHeroes = useCallback(async () => {
    const request = async () => {
      return await methods.getHeroes.create();
    };
    request()
      // eslint-disable-next-line no-shadow
      .then(async data => {
        setData(data);
        await setDataLocal(data);
      })
      .catch(error => {
        getLocalData();
      });
  }, [getLocalData]);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        getLocalData();
      }
    });
    unsubscribe();
  });

  return (
    <Fragment>
      <AppearanceProvider>
        <Context.Provider value={{data, setData}}>
          <NavigationContainer
            theme={scheme === 'dark' ? ThemeDark : ThemeLight}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Detail"
                component={Details}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{
                  headerShown: false,
              }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Context.Provider>
      </AppearanceProvider>
    </Fragment>
  );
};

export default App;
