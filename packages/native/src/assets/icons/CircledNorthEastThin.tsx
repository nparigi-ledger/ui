import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledNorthEastThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.664 15.696l6.648-6.672V14.352h.48V8.208H9.648v.48H14.976l-6.672 6.648.36.36zM3.12 12c0 4.968 3.912 8.88 8.88 8.88 4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88zm.48 0c0-4.704 3.696-8.4 8.4-8.4 4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4-4.704 0-8.4-3.696-8.4-8.4z"
        fill={color}
      />
    </Svg>
  );
}

export default CircledNorthEastThin;
