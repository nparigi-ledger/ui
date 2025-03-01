import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function StorageUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.988 20.856c5.016 0 8.832-1.584 8.832-4.08v-9.6c0-2.472-3.672-4.032-8.832-4.032-4.968 0-8.808 1.56-8.808 4.032v9.6c0 2.496 3.72 4.08 8.808 4.08zm-7.968-4.08v-3c1.248 1.416 4.248 2.304 7.968 2.304 3.672 0 6.696-.888 7.992-2.304v3c0 1.896-3.216 3.264-7.992 3.264-4.848 0-7.968-1.368-7.968-3.264zm0-4.728v-3.12c1.248 1.416 4.248 2.28 7.968 2.28 3.672 0 6.696-.864 7.992-2.304v3.144c-.024 1.824-3.216 3.216-7.992 3.216-4.848 0-7.968-1.392-7.968-3.216zm0-4.872c0-1.872 3.216-3.216 7.968-3.216 4.92 0 7.992 1.344 7.992 3.216-.024 1.848-3.216 3.216-7.992 3.216-4.848 0-7.968-1.368-7.968-3.216z"
        fill={color}
      />
    </Svg>
  );
}

export default StorageUltraLight;
