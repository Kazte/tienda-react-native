import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ProductsScreen, CategoriesScreen, ProductDetailsScreen } from "../screens/index"
import { Platform } from "react-native"
import { colors } from "../constants/themes"
const Stack = createNativeStackNavigator()

const isIOS = Platform.OS === "ios"

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
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
                name="Categories"
                component={CategoriesScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Products"
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator
