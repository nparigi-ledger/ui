import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function MailUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 18.972h18V5.028H3v13.944zm.84-.816v-9.48L12 15.204l8.16-6.528v9.48H3.84zm0-10.56V5.844h16.32v1.752L12 14.124 3.84 7.596z"
        fill={color}
      />
    </Svg>
  );
}

export default MailUltraLight;
