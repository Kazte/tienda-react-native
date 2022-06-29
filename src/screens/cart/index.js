import { FlatList, Text, View, TouchableOpacity } from "react-native"
import { CartItem } from "../../components/components"
import styles from "./styles"
import { cart } from "../../data/cart"

const CartScreen = ({ navigation }) => {
    const total = 1250

    const onHandlerDeleteItem = (id) => {
        console.log(id)
    }

    const onHandlerConfirmCart = () => {
        console.log("Confirm cart")
    }

    const renderItem = ({ item }) => {
        return <CartItem item={item} onDelete={onHandlerDeleteItem} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList data={cart} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>

            <View styles={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={onHandlerConfirmCart}>
                    <Text style={styles.buttonText}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen
