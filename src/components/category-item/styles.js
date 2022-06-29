import { StyleSheet } from "react-native"
import { colors } from "../../constants/themes"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 20,
        height: 100,
    },
    containerTouchable: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: colors.primary,
        elevation: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 10,
        width: "100%",
    },
    title: {
        fontSize: 15,
        fontFamily: "Lato-Bold",
        color: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
    },
})
