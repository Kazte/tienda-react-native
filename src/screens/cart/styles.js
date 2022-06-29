import { StyleSheet } from "react-native"
import { colors } from "../../constants/themes"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.F5F5F5,
    },
    cartList: {
        flex: 1,
    },
    footer: {
        borderTopColor: colors.primary,
        borderTopWidth: 1,
        paddingVertical: 10,
        marginVertical: 10,
    },
    buttonConfirm: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttonText: {
        fontSize: 14,
        fontFamily: "Lato-Regular",
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    totalTitle: {
        fontSize: 14,
        fontFamily: "Lato-Regular",
    },
    total: {
        fontSize: 16,
        fontFamily: "Lato-Bold",
    },
})
