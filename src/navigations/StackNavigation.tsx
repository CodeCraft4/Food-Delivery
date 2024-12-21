import React, {useEffect, useState} from 'react';
import * as ui from '@modules';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN} from '@enums';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './BottomTabNavigations';
import {CartProvider, useAuth} from '@contexts';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const [logo, setLogo] = useState(true);

  useEffect(() => {
    setLogo(true);
    setTimeout(() => {
      setLogo(false);
    }, 3000);
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {logo && (
        <Stack.Screen name={SCREEN.LOGO_SCREEN} component={ui.LogoScreen} />
      )}
      <Stack.Screen
        name={SCREEN.ONBOARDING_MODULE}
        component={ui.OnboardingModule}
      />
      <Stack.Screen name={SCREEN.AUTH} component={ui.AuthLayout} />
      <Stack.Screen
        name={SCREEN.WELCOME_MODULES}
        component={ui.WelcomeModules}
      />
      <Stack.Screen name={'Bottom_tab'} component={BottomTabNavigation} />
      <Stack.Screen name={SCREEN.PAYMENTS} component={ui.PaymentsMethods} />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <CartProvider>
      <Stack.Navigator
        initialRouteName="Bottom_tab"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Bottom_tab'} component={BottomTabNavigation} />
        <Stack.Screen name={SCREEN.AUTH} component={ui.AuthLayout} />
        <Stack.Screen name={SCREEN.SEARCH} component={ui.SearchResults} />
        <Stack.Screen name={SCREEN.HOME} component={ui.Home} />
        <Stack.Screen name={SCREEN.OFFER} component={ui.OffersScreen} />
        <Stack.Screen name={SCREEN.CART} component={ui.CartScreen} />
        <Stack.Screen name={SCREEN.PROFILE} component={ui.Account} />
        <Stack.Screen name={SCREEN.USERS_DETAILS} component={ui.Users} />
        <Stack.Screen name={SCREEN.PAYMENTS} component={ui.PaymentsMethods} />
        <Stack.Screen name={SCREEN.SETTINGS} component={ui.Settings} />
        <Stack.Screen name={SCREEN.NOTIFICATIONS} component={ui.Notification} />
        <Stack.Screen name={SCREEN.BOOKMARKS} component={ui.BookMarks} />
        <Stack.Screen name={SCREEN.ORDERS} component={ui.YourOrders} />
        <Stack.Screen
          name={SCREEN.RECENT_SEARCHES}
          component={ui.RecentSearches}
        />
        <Stack.Screen
          name={SCREEN.USERS_PREFARENCES}
          component={ui.UserPrafarences}
        />
        <Stack.Screen
          name={SCREEN.EDITS_USERS_ACCOUNT}
          component={ui.EditAccount}
        />
      </Stack.Navigator>
    </CartProvider>
  );
};

export const AppNavigation = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={'orange'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      {!user ? <StackNavigation /> : <HomeStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
