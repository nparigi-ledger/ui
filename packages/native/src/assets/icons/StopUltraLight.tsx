import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function StopUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.688 15.312h6.6v-6.6h-6.6v6.6zM3 12c0 5.04 3.96 9 9 9s9-4.104 9-9c0-5.04-3.96-9-9-9s-9 3.96-9 9zm.84 0c0-4.584 3.6-8.16 8.16-8.16 4.584 0 8.16 3.576 8.16 8.16 0 4.44-3.576 8.16-8.16 8.16-4.56 0-8.16-3.6-8.16-8.16z"
        fill={color}
      />
    </Svg>
  );
}

export default StopUltraLight;
