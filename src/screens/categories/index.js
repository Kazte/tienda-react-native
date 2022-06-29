import { StatusBar } from "expo-status-bar"
import { FlatList, View } from "react-native"
import { CategoryItem } from "../../components/components"
import { categories } from "../../data/categories"
import styles from "./styles"

const CategoriesScreen = ({ navigation }) => {
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />

    const onSelected = (item) => {
        navigation.navigate("Products", {
            categoryId: item.id,
            title: item.title,
        })
    }

    return (
        <View style={styles.container}>
            <FlatList data={categories} renderItem={renderItem} numColumns={2} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default CategoriesScreen
