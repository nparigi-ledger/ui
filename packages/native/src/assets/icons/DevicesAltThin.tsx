import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function DevicesAltThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.848 19.92h7.512v-.48H9.408l.768-3.6h2.184v-.48h-8.4c-.792 0-1.32-.528-1.32-1.32V4.92c0-.792.528-1.32 1.32-1.32h15.12c.792 0 1.32.528 1.32 1.32v1.2h.48v-1.2c0-.984-.816-1.8-1.8-1.8H3.96c-.984 0-1.8.816-1.8 1.8v9.12c0 .984.816 1.8 1.8 1.8h5.712l-.768 3.6H6.12c-.48 0-.936.192-1.272.48zm9.192-.84c0 .984.816 1.8 1.8 1.8h4.2c.984 0 1.8-.816 1.8-1.8V9.6c0-.984-.816-1.8-1.8-1.8h-4.2c-.984 0-1.8.816-1.8 1.8v9.48zm.48 0V9.6c0-.792.528-1.32 1.32-1.32h4.2c.792 0 1.32.528 1.32 1.32v9.48c0 .792-.528 1.32-1.32 1.32h-4.2c-.792 0-1.32-.528-1.32-1.32zm2.64-.552c0 .432.336.792.792.792.432 0 .768-.36.768-.792a.758.758 0 00-.768-.768c-.456 0-.792.336-.792.768z"
        fill={color}
      />
    </Svg>
  );
}

export default DevicesAltThin;
