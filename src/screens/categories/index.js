import { StatusBar } from "expo-status-bar"
import { Button, Text, View } from "react-native"
import styles from "./styles"

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Go to Products" onPress={() => navigation.navigate("Products")} />
        </View>
    )
}

export default CategoriesScreen
