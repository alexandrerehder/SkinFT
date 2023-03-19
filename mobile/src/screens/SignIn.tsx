import { Heading, Icon, useTheme, VStack } from "native-base";
import { Key, UserCircle } from "phosphor-react-native";

import Logo from "../assets/logo.svg";
import SkinFT from "../assets/SkinFT.svg";
import Steam from "../assets/Steam.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg="black" px={8} pt={24}>
      <Logo />
      <SkinFT />
      <Heading
        color="muted.200"
        alignItems="center"
        fontSize={15}
        mt={3}
        mb={8}
      >
        O maior marketplace de Skins para CS:GO
      </Heading>
      <Input
        placeholder="Login"
        mb={1}
        InputLeftElement={
          <Icon as={<UserCircle color={colors.gray[300]} />} ml={4} />
        }
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
      />
      <Heading fontFamily="body" fontSize="sm" color="cyan.300" ml={200}>
        Esqueceu a senha?
      </Heading>
      <Button
        title="Entrar"
        fontColor="black"
        backgroundColor="cyan.300"
        mt={10}
      />

      <Button
        leftIcon={<Steam style={{ marginLeft: -30, marginRight: 30 }} />}
        title="Entrar com a Steam"
        fontColor="yellow.300"
        borderWidth={3}
        backgroundColor="black"
        borderColor="yellow.300"
        mt={12}
      />
    </VStack>
  );
}
