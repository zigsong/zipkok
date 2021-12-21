import * as React from 'react';

import { ThemedText, TintedText, TextProps } from './Themed';

export const MonoText = (props: TextProps) => {
  return <ThemedText {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
};

export const LightText = (props: TextProps) => {
  return <ThemedText {...props} style={[props.style, { fontFamily: 'cafe-surround-air' }]} />;
};

export const BoldText = (props: TextProps) => {
  return <TintedText {...props} style={[props.style, { fontFamily: 'cafe-surround' }]} />;
};
