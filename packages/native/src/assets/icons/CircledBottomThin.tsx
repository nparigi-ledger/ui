import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledBottomThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 17.28l4.344-4.344-.336-.336-1.704 1.704-2.064 2.064V6.96h-.48v9.408l-2.064-2.064L7.992 12.6l-.336.336L12 17.28zM3.12 12c0 4.968 3.912 8.88 8.88 8.88 4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88zm.48 0c0-4.704 3.696-8.4 8.4-8.4 4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4-4.704 0-8.4-3.696-8.4-8.4z"
        fill={color}
      />
    </Svg>
  );
}

export default CircledBottomThin;
