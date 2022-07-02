import { useEffect } from "react"
import { View, FlatList } from "react-native"
import { BreadItem } from "../../components/components"
import { useSelector, useDispatch } from "react-redux"
import { filteredProducts, selectProduct } from "../../store/actions/products.action"
import { styles } from "./styles"

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const filterProducts = useSelector((state) => state.product.filteredProducts)
    const category = useSelector((state) => state.category.selected)

    useEffect(() => {
        dispatch(filteredProducts(category.id))
    }, [])

    const onSelected = (item) => {
        dispatch(selectProduct(item.id))

        navigation.navigate("ProductDetails", {
            name: item.name,
        })
    }

    const renderItem = ({ item }) => <BreadItem item={item} onSelected={onSelected} />

    return (
        <View style={styles.container}>
            <FlatList data={filterProducts} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />
        </View>
    )
}

export default ProductsScreen
