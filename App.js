import { useFonts } from "expo-font"
import { ActivityIndicator } from "react-native"
import Root from "./src"
import { Provider } from "react-redux"
import store from "./src/store"

export default function App() {
    const [loaded] = useFonts({
        "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
        "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
        "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
        "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
        "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
        "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
        "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
        "Lato-BlackItalic": require("./assets/fonts/Lato-BlackItalic.ttf"),
        "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
        "Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf"),
    })

    if (!loaded) {
        return <ActivityIndicator />
    } else {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }
}
