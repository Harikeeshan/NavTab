import React from "react";
import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
 } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Screens/HomeScreen";
import Challenge from "../Screens/Challenge";
import Material from "../Screens/Material";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: { 
                position: 'absolute', 
                // padding: 0,
                bottom: 40,
                left: 20,
                right: 20,
                // elevation: 0,
                backgroundColor: '#222222',
                borderRadius: 40,
                height: 60,
                ...styles.shadow
            },
            headerShown: false,
            tabBarShowLabel: false
            

          }}>

            <Tab.Screen 
            name='Home' 
            component={HomeScreen}
            options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10
                    }}>
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 40,
                                tintColor: focused ? '#B9FF66' : '#ffff',
                            }} />
                        {/* <Text
                        style={{
                            color: focused ? '#B9FF66' : '#748c94', fontSize: 12
                        }}>
                            HOME
                        </Text> */}
                    </View>;
                }
            }}
            />
            <Tab.Screen name='Challenge' component={Challenge}
            options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10
                    }}>
                        <Image
                            source={require('../assets/icons/Add.png')}
                            resizeMode="contain"
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? '#B9FF66' : '#ffff',
                            }} />
                        {/* <Text
                        style={{
                            color: focused ? '#e32f45' : '#748c94', fontSize: 12
                        }}>
                            ADD
                        </Text> */}
                    </View>;
                }
            }}
            />
            <Tab.Screen name='Material' component={Material}
            options={{
                tabBarIcon: ({focused}) => {
                    return <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 10
                    }}>
                        <Image
                            source={require('../assets/icons/challenges.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#B9FF66' : '#ffff',
                            }} />
                        {/* <Text
                        style={{
                            color: focused ? '#e32f45' : '#748c94', fontSize: 12
                        }}>
                            CHALLENGES
                        </Text> */}
                    </View>;
                }
            }}
            />
        </Tab.Navigator>
    )
} 

export default Tabs;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#22222',
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10
    },
    
})