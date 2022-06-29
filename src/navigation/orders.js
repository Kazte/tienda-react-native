import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { OrdersScreen } from "../screens/index"
import { Platform } from "react-native"
import { colors } from "../constants/themes"
const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
                name="Orders"
                component={OrdersScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator
