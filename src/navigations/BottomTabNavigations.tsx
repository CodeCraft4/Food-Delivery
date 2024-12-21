import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Account,
  AuthLayout,
  BookMarks,
  CartScreen,
  EditAccount,
  Home,
  Notification,
  OffersScreen,
  PaymentsMethods,
  RecentSearches,
  SearchResults,
  Settings,
  UserPrafarences,
  Users,
  YourOrders,
} from '@modules';
import {Cart, HomeIcon, Offer, User} from '@assets';
import {enableScreens} from 'react-native-screens';
import {COLORS, SCREEN, wp} from '@enums';

enableScreens();

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  const TabIcon = ({focused, children}) => {
    return (
      <View
        style={[
          styles.tabIcon,
          {backgroundColor: focused ? `${COLORS.primary}` : 'transparent'},
        ]}>
        {children}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: 'absolute',
          backgroundColor: 'white',
        },
        headerShown: false,
        tabBarLabel: () => null,
      }}>
      <Tab.Screen
        name={SCREEN.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused}>
              <HomeIcon />
              {focused && <Text style={styles.tabName}>{SCREEN.HOME}</Text>}
            </TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.OFFER}
        component={OffersScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused}>
              <Offer />
              {focused && <Text style={styles.tabName}>{SCREEN.OFFER}</Text>}
            </TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused}>
              <Cart />
              {focused && <Text style={styles.tabName}>{SCREEN.CART}</Text>}
            </TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.PROFILE}
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused}>
              <User />
              {focused && <Text style={styles.tabName}>{SCREEN.PROFILE}</Text>}
            </TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.AUTH}
        component={AuthLayout}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.PAYMENTS}
        component={PaymentsMethods}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.SETTINGS}
        component={Settings}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.NOTIFICATIONS}
        component={Notification}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.BOOKMARKS}
        component={BookMarks}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.ORDERS}
        component={YourOrders}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.RECENT_SEARCHES}
        component={RecentSearches}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.SEARCH}
        component={SearchResults}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.USER_DETAILS}
        component={Users}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.USERS_PREFARENCES}
        component={UserPrafarences}
        options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name={SCREEN.EDITS_USERS_ACCOUNT}
        component={EditAccount}
        options={{tabBarButton: () => null}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    borderRadius: 50,
    padding: wp(1.8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabName: {
    fontWeight: '600',
    color: COLORS.white,
    letterSpacing: 1,
    fontSize: 16,
  },
});
