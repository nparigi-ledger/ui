import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function MinusRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M20.4 11.184H3.6v1.632h16.8v-1.632z" fill={color} />
    </Svg>
  );
}

export default MinusRegular;
