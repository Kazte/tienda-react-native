import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import styles from "./styles"
import { products } from "../../data/products"

const ProductDetailsScreen = ({ route }) => {
    const { productId, name } = route.params

    const product = products.find((product) => product.id === productId)

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.text}> {product.name}</Text>
                <Text style={styles.text}> {product.description}</Text>
                <Text style={styles.text}> {product.weight}</Text>
                <Text style={styles.text}> {product.price.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default ProductDetailsScreen
