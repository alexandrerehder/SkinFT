import { NativeBaseProvider, StatusBar } from "native-base";
import { THEME } from "./src/styles/theme";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_100Thin,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
