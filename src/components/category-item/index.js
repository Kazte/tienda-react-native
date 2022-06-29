import { TouchableOpacity, View, Text } from "react-native"
import styles from "./styles"

const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem
