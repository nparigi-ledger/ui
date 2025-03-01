import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function MugHotRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.004 20.88h2.952c1.608 0 3-.6 3.984-1.896.12-.144.24-.312.336-.48h.84c2.832 0 4.944-1.872 4.944-4.488 0-2.664-2.112-4.536-4.944-4.536H2.94V15c0 1.824.336 3.024 1.104 3.984 1.008 1.296 2.352 1.896 3.96 1.896zm-3.408-4.896v-5.04h9.768v5.04c0 2.28-.912 3.336-3.24 3.336H7.86c-2.304 0-3.264-1.032-3.264-3.336zM6.612 7.92h1.656c-.024-1.032.48-1.44 1.824-1.632l1.728-.216c1.872-.216 3.048-1.2 2.952-2.952H13.14c0 1.032-.504 1.44-1.824 1.632l-1.728.216c-1.896.216-3.072 1.2-2.976 2.952zm9.216 9.12c.144-.576.192-1.248.192-2.04v-4.056c2.448 0 3.384.72 3.384 2.64v.84c0 1.848-.888 2.616-3.192 2.616h-.384z"
        fill={color}
      />
    </Svg>
  );
}

export default MugHotRegular;
