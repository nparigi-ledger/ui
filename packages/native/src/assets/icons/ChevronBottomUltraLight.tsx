import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ChevronBottomUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.888 7.356l-.576.576L12 16.644l8.688-8.712-.576-.576L12 15.444 3.888 7.356z"
        fill={color}
      />
    </Svg>
  );
}

export default ChevronBottomUltraLight;
