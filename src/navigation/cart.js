import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Platform } from "react-native"
import { colors } from "../constants/themes"
import { CartScreen } from "../screens/index"
const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? colors.secondary : colors.primary,
                },
                headerTintColor: isIOS ? colors.white : colors.text,
                headerTitleStyle: {
                    fontSize: 20,
                    fontFamily: "Lato-Bold",
                },
            }}
        >
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator
