import { StatusBar } from "expo-status-bar"
import { FlatList, Button, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from "react-native"
import styles from "./styles"

const ProductsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={[
                    { key: "Product 1" },
                    { key: "Product 2" },
                    { key: "Product 3" },
                    { key: "Product 4" },
                    { key: "Product 5" },
                    { key: "Product 6" },
                    { key: "Product 7" },
                    { key: "Product 8" },
                    { key: "Product 9" },
                    { key: "Product 10" },
                    { key: "Product 11" },
                    { key: "Product 12" },
                    { key: "Product 13" },
                    { key: "Product 14" },
                    { key: "Product 15" },
                    { key: "Product 16" },
                    { key: "Product 17" },
                    { key: "Product 18" },
                    { key: "Product 19" },
                    { key: "Product 20" },
                    { key: "Product 21" },
                    { key: "Product 22" },
                    { key: "Product 23" },
                ]}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.buttonList} onPress={() => navigation.navigate("ProductDetails")}>
                        <Text>{item.key} </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default ProductsScreen
