import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledInitThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.912 16.704c2.208 0 3.36-1.848 3.36-4.68s-1.128-4.68-3.36-4.68c-2.208 0-3.36 1.848-3.36 4.68s1.152 4.68 3.36 4.68zM4.032 12c0 4.968 3.912 8.88 8.88 8.88h7.056v-.48h-7.056c-4.704 0-8.4-3.696-8.4-8.4 0-4.584 3.696-8.4 8.4-8.4h7.056v-.48h-7.056c-4.968 0-8.88 4.032-8.88 8.88zm6 .048V12c0-2.688.936-4.176 2.88-4.176 1.056 0 1.8.432 2.28 1.224l-4.8 5.424c-.24-.648-.36-1.464-.36-2.424zm.576 2.904l4.8-5.424c.264.648.384 1.464.384 2.472v.048c0 2.688-.936 4.176-2.88 4.176-1.056 0-1.824-.432-2.304-1.272z"
        fill={color}
      />
    </Svg>
  );
}

export default ZeroCircledInitThin;
