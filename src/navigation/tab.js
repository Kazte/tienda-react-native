import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Text } from "react-native"
import MainNavigator from "./main"
import OrdersNavigator from "./orders"
import CartNavigator from "./cart"
import IonicIcons from "@expo/vector-icons/Ionicons"
import { colors } from "../constants/themes"

const BottomTabs = createBottomTabNavigator()

const LabelBottomTab = ({ focused, label }) => (
    <Text
        style={{
            color: focused ? colors.primary : colors.gray,
            fontSize: 12,
            fontFamily: focused ? "Lato-Bold" : "Lato-Regular",
        }}
    >
        {label}
    </Text>
)

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                activeTintColor: colors.primary,
                inactiveTintColor: colors.gray,
            }}
        >
            <BottomTabs.Screen
                name="ShopTab"
                component={MainNavigator}
                options={{
                    tabBarLabel: ({ focused }) => <LabelBottomTab focused={focused} label="Shop" />,
                    tabBarIcon: ({ focused }) => <IonicIcons name={focused ? "ios-home" : "ios-home-outline"} size={20} color={focused ? colors.primary : colors.gray} />,
                }}
            />

            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarLabel: ({ focused }) => <LabelBottomTab focused={focused} label="Cart" />,
                    tabBarIcon: ({ focused }) => <IonicIcons name={focused ? "ios-cart" : "ios-cart-outline"} size={20} color={focused ? colors.primary : colors.gray} />,
                }}
            />

            <BottomTabs.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    tabBarLabel: ({ focused }) => <LabelBottomTab focused={focused} label="Orders" />,
                    tabBarIcon: ({ focused }) => <IonicIcons name={focused ? "ios-list" : "ios-list-outline"} size={20} color={focused ? colors.primary : colors.gray} />,
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator
