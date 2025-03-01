import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LockLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.752 21.3h14.496V9.66h-2.016v-1.8c0-2.832-2.376-5.16-5.232-5.16-2.856 0-5.232 2.328-5.232 5.16v1.8H4.752V21.3zm1.2-1.152v-9.36h12.096v9.36H5.952zM7.968 9.66v-1.8c0-2.184 1.824-4.032 4.032-4.032 2.232 0 4.032 1.848 4.032 4.032v1.8H7.968z"
        fill={color}
      />
    </Svg>
  );
}

export default LockLight;
