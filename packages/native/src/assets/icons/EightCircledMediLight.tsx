import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function EightCircledMediLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.976 16.704h.048c1.92 0 3.312-1.152 3.312-2.664 0-.984-.576-1.8-1.56-2.112v-.168a2.034 2.034 0 001.296-1.92c0-1.416-1.32-2.496-3.048-2.496h-.048c-1.728 0-3.048 1.08-3.048 2.496a2 2 0 001.32 1.92v.168c-.984.312-1.584 1.128-1.584 2.112 0 1.512 1.392 2.664 3.312 2.664zM5.76 21.12h12.48v-1.2H5.76v1.2zm0-17.04h12.48v-1.2H5.76v1.2zm4.176 10.08v-.312c0-.912.648-1.416 2.016-1.416h.144c1.368 0 2.016.504 2.016 1.416v.312c0 .936-.672 1.464-2.016 1.464h-.144c-1.344 0-2.016-.528-2.016-1.464zm.144-4.08v-.312c0-.84.624-1.344 1.848-1.344h.144c1.2 0 1.848.504 1.848 1.344v.312c0 .84-.624 1.32-1.848 1.32h-.144c-1.248 0-1.848-.48-1.848-1.32z"
        fill={color}
      />
    </Svg>
  );
}

export default EightCircledMediLight;
