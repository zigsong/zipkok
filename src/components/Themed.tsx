import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import PALETTE from 'styles/palette';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function ThemedText(props: TextProps) {
  const { style, ...otherProps } = props;
  const color = PALETTE.black.text_700;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TintedText(props: TextProps) {
  const { style, ...otherProps } = props;
  const color = PALETTE.violet.tint_400;

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function ThemedView(props: ViewProps) {
  const { style, ...otherProps } = props;
  const backgroundColor = PALETTE.violet.vintage_400;

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
