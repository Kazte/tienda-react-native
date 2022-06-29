import { StyleSheet } from "react-native"
import { colors } from "../../constants/themes"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: colors.backgroundLight,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: colors.black,
        borderWidth: 1,
    },
    headerContainer: {},
    header: {
        fontSize: 16,
        fontFamily: "Lato-Bold",
    },
    containerDetail: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detail: {},
    detailQty: {
        fontSize: 14,
        fontFamily: "Lato-Regular",
    },
    detailPrice: {
        fontSize: 16,
        fontFamily: "Lato-Bold",
    },
    deleteBtn: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.secondary,
    },
})
