import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ThreeCircledInitRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.392 16.68c1.968 0 3.432-1.152 3.432-2.688 0-.984-.624-1.776-1.56-2.04v-.264c.816-.264 1.248-.96 1.248-1.776 0-1.464-1.368-2.592-3.12-2.592-1.872 0-3.264 1.248-3.264 2.808v.168h1.56c0-1.176.408-1.608 1.68-1.608 1.224 0 1.632.384 1.632 1.368 0 .912-.264 1.176-1.512 1.176h-.912V12.6h.936c1.32 0 1.704.336 1.704 1.32 0 1.032-.456 1.368-1.848 1.368-1.416 0-1.8-.384-1.8-1.728H9.984v.12c0 1.728 1.392 3 3.408 3zM4.152 12c0 5.16 4.08 9.24 9.24 9.24h6.456v-1.56h-6.456c-4.296 0-7.68-3.384-7.68-7.68 0-4.2 3.384-7.68 7.68-7.68h6.456V2.76h-6.456c-5.184 0-9.24 4.2-9.24 9.24z"
        fill={color}
      />
    </Svg>
  );
}

export default ThreeCircledInitRegular;
