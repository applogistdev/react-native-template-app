import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {observer} from "mobx-react";

import MenuStore from "./utils/store/MenuStore";
import LanguageStore from "./utils/store/LanguageStore";
import {TakeSend} from "./screens/bottomtab/takesend/TakeSend";
import {TakeSendList} from "./screens/bottomtab/takesend/TakeSendList";
import {TabIcon} from "./components/tabmenu/TabIcon";
import {TabLabel} from "./components/tabmenu/TabLabel";
import About from "./screens/bottomtab/about/About";
import RouterStyle from './utils/styles/RouterStyle';
import {DrawerBar} from './components/sidemenu/DrawerBar';
import {DrawerCustomComponent} from './components/sidemenu/DrawerCustomComponent';
import {DrawerIcon} from './components/sidemenu/DrawerIcon';
import {Login} from './screens/login/Login';
import Corporate from './screens/corporate/Corporate';
import Home from './screens/Home';
import {DrawerLabel} from './components/sidemenu/DrawerLabel';
import {DrawerText} from './components/sidemenu/DrawerText';
import {DrawerSearch} from './components/sidemenu/DrawerSearch';
import EStyleSheet from 'react-native-extended-stylesheet';

const Tab = createBottomTabNavigator();
const TakeSendStack = createStackNavigator();
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName={"HomeStack"}  screenOptions = {{ headerTintColor: EStyleSheet.value('$gColor'), headerBackTitle: LanguageStore.resource.router.back_title, headerBackTitleStyle: RouterStyle.headerBackTitleStyle }} >
      <HomeStack.Screen name="HomeStack"
                        options={{
                          title: LanguageStore.resource.side_menu.home.title,
                          headerLeft: () => (<DrawerBar navigation={navigation}/>),
                          headerRight: () => (<DrawerSearch navigation={navigation}/>),
                          headerTitle : () => <DrawerText title={LanguageStore.resource.side_menu.home.title}/>}}
                        component={Home} />
    </HomeStack.Navigator>
  );
}

function CorporateStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName={"CorporateStack"}  screenOptions = {{ headerTintColor: EStyleSheet.value('$gColor'), headerBackTitle: LanguageStore.resource.router.back_title, headerBackTitleStyle: RouterStyle.headerBackTitleStyle }} >
      <HomeStack.Screen name="CorporateStack"
                        options={{
                          title: LanguageStore.resource.side_menu.corporate.title,
                          headerLeft: () => (<DrawerBar navigation={navigation}/>),
                          headerRight: () => (<DrawerSearch navigation={navigation}/>),
                          headerTitle : () => <DrawerText title={LanguageStore.resource.side_menu.corporate.title}/>}}
                        component={Corporate} />
    </HomeStack.Navigator>
  );
}

function TakeSendStackScreen({ navigation }) {
  return (
    <TakeSendStack.Navigator initialRouteName={"TakeSend"}  screenOptions = {{ headerRight: () => (<DrawerSearch navigation={navigation}/>), headerTintColor: EStyleSheet.value('$gColor'), headerBackTitle: LanguageStore.resource.router.back_title, headerBackTitleStyle: RouterStyle.headerBackTitleStyle }} >
      <TakeSendStack.Screen name="TakeSend"
                            options={{
                              headerLeft: () => (<DrawerBar navigation={navigation}/>),
                              headerTitle : () => <DrawerText title={LanguageStore.resource.side_menu.take_send.title}/>}}
                            component={TakeSend} />
      <TakeSendStack.Screen name="TakeSendList" options={{ headerTitle : () => <DrawerText title={LanguageStore.resource.side_menu.take_send.list_title}/> }} component={TakeSendList} />
    </TakeSendStack.Navigator>
  );
}

function LoginStackScreen({ navigation }) {
  return (
    <LoginStack.Navigator initialRouteName={"LoginStack"}  screenOptions = {{ headerTintColor: EStyleSheet.value('$gColor'), headerBackTitle: LanguageStore.resource.router.back_title, headerBackTitleStyle: RouterStyle.headerBackTitleStyle }} >
      <LoginStack.Screen name="LoginStack"
                            options={{
                              title: LanguageStore.resource.side_menu.login.title,
                              headerLeft: () => (<DrawerBar navigation={navigation}/>),
                              headerTitle : () => <DrawerText title={LanguageStore.resource.side_menu.login.title}/>}}
                            component={Login} />
    </LoginStack.Navigator>
  );
}

function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator initialRouteName={"TakeSendTab"}>
      <Tab.Screen name="TakeSendTab" component={TakeSendStackScreen}
                  options={{
                    tabBarLabel: ({focused,color}) => <TabLabel title={LanguageStore.resource.bottom_tab_menu.take_send.title} focused={focused} />,
                    tabBarIcon: ({focused,color,size}) => <TabIcon size={size} focused={focused} iconName={"camera"} />
                  }}
      />
      <Tab.Screen name="About" component={About}
                  options={{
                    tabBarLabel: ({focused,color}) => <TabLabel title={LanguageStore.resource.bottom_tab_menu.about.title} focused={focused} />,
                    tabBarIcon: ({focused,color,size}) => <TabIcon size={size} focused={focused} iconName={"sliders-h"} />,
                    header:()=>null
                  }}
      />
    </Tab.Navigator>
  );
}

@observer
export default class App extends React.Component {
    render() {
        return (
          <NavigationContainer>
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions = {{ headerTintColor: EStyleSheet.value('$gColor'), headerBackTitle: LanguageStore.resource.router.back_title, headerBackTitleStyle: RouterStyle.headerBackTitleStyle }}
              drawerStyle={RouterStyle.drawerStyle}
              drawerType={'slide'}
              drawerContent={props => <DrawerCustomComponent {...props} />}>
              <Drawer.Screen
                name="Home"
                component={HomeStackScreen}
                options={{ drawerLabel: ({focused}) => <DrawerLabel focused={focused} title={LanguageStore.resource.side_menu.home.title} />, drawerIcon: ({focused}) => <DrawerIcon size={25} iconName={"home"} focused={focused} /> }}
              />
              <Drawer.Screen
                name="Corporate"
                component={CorporateStackScreen}
                options={{ drawerLabel: ({focused}) => <DrawerLabel focused={focused} title={LanguageStore.resource.side_menu.corporate.title} />, drawerIcon: ({focused}) => <DrawerIcon size={25} iconName={"building"} focused={focused} /> }}
              />
              <Drawer.Screen
                name="Tabs"
                component={TabNavigator}
                options={{ drawerLabel: ({focused}) => <DrawerLabel focused={focused} title={LanguageStore.resource.side_menu.take_send.title} />, drawerIcon: ({focused}) => <DrawerIcon size={25} iconName={"camera"} focused={focused} /> }}
              />
              {MenuStore.isLogin ? <></>
                : <Drawer.Screen
                  name="Login"
                  component={LoginStackScreen}
                  options={{ drawerLabel: ({focused}) => <DrawerLabel focused={focused} title={LanguageStore.resource.side_menu.login.title} />, drawerIcon: ({focused}) => <DrawerIcon size={25} iconName={"sign-in-alt"} focused={focused} /> }}
                />}
            </Drawer.Navigator>
          </NavigationContainer>
        )
    }
}
