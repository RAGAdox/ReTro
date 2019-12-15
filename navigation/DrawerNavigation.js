import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItems,
  DrawerActions
} from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import LinearGradient from "expo";
import MainTabNavigator from "./MainTabNavigator";
import LinksScreen from "../screens/LinksScreen";
import TestComponent from '../screens/TestComponent';
let CustomDrawer = props => (
  <View style={{ flex: 1, flexDirection: "column" }}>
      <DrawerItems {...props} />
  </View>
);
const DrawerNavigation = createDrawerNavigator(
  {
    home: {
      screen: MainTabNavigator,
      navigationOptions: {
        title: "Home"
      }
    },
    links: {
      screen: LinksScreen,
      navigationOptions: {
        title: "Links"
      }
    },
    test:{
        screen:TestComponent,
        navigationOptions:{
            title:"Test"
        }
    }
  },
  {
    drawerType: "slide",
    overlayColor: "transparent",
    hideStatusBar: false,
    drawerWidth: 300,
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: "#e91e63",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);
const styles = StyleSheet.create({
  Screen: {
    height: 100 + "%",
    width: 100 + "%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainPage: {
    height: 100 + "%",
    width: 100 + "%",
    flex: 1,
    //flexDirection: "row",
    justifyContent: "center"
    //alignItems: "center"
  },
  drawerHeader: {
    width: 100 + "%",
    height: 20 + "%",
    justifyContent: "center",
    alignItems: "center"
  }
});
//export default DrawerNavigation;
const DrawerContainer = createAppContainer(DrawerNavigation);
export default DrawerContainer;
