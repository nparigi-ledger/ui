import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function DevicesAltLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.656 19.92h7.416v-1.08h-2.4l.624-3h1.776v-1.152H3.936c-.408 0-.696-.264-.696-.672V4.944c0-.408.288-.696.696-.696h14.952c.408 0 .672.288.672.696V6.12h1.2v-1.2c0-.984-.816-1.8-1.8-1.8H3.84c-.984 0-1.8.816-1.8 1.8v9.12c0 .984.816 1.8 1.8 1.8h5.4l-.624 3H6.24c-.72 0-1.344.456-1.584 1.08zm9.024-.84c0 .984.816 1.8 1.8 1.8h4.68c.984 0 1.8-.816 1.8-1.8V9.6c0-.984-.816-1.8-1.8-1.8h-4.68c-.984 0-1.8.816-1.8 1.8v9.48zm1.152.024V9.552c0-.408.264-.672.672-.672h4.632c.408 0 .696.264.696.672v9.552a.668.668 0 01-.696.696h-4.632c-.408 0-.672-.288-.672-.696zm2.208-1.008c0 .432.336.792.792.792.432 0 .768-.36.768-.792a.758.758 0 00-.768-.768c-.456 0-.792.336-.792.768z"
        fill={color}
      />
    </Svg>
  );
}

export default DevicesAltLight;
