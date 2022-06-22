import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ProductsScreen, CategoriesScreen, ProductDetailsScreen } from "../screens/index"

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator
