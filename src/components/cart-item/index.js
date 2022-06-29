import IonicIcons from "@expo/vector-icons/Ionicons"
import { TouchableOpacity, View, Text } from "react-native"
import styles from "./styles"
import { colors } from "../../constants/themes"

const CartItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.detail}>
                    <Text style={styles.detailQty}>{item.quantity}</Text>
                    <Text style={styles.detailPrice}>${item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteBtn}>
                    <IonicIcons name="trash" size={20} color={colors.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem
