import { Input as NativeBaseImput, IInputProps } from "native-base";

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseImput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      borderRadius={15}
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "yellow.400",
        backgroundColor: "gray.700",
      }}
      {...rest}
    />
  );
}
