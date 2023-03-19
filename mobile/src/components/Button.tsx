import React from "react";
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
  borderBottomColor?: string;
  fontColor: string;
};

export function Button({
  title,
  borderBottomColor,
  fontColor,
  ...rest
}: Props) {
  return (
    <ButtonNativeBase
      borderRadius={15}
      borderBottomColor={borderBottomColor}
      w="full"
      h={14}
      fontSize="sm"
      {...rest}
    >
      <Heading color={fontColor} fontSize={16} fontFamily="mono">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
