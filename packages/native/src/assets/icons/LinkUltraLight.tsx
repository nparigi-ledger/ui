import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.343 13.656c1.656 1.656 4.344 1.68 5.976 0l3.528-3.528c1.68-1.632 1.656-4.344 0-5.976-1.632-1.656-4.344-1.656-5.976 0l-2.616 2.592.624.624 2.616-2.592c1.416-1.44 3.336-1.44 4.728 0 1.44 1.392 1.464 3.336 0 4.728l-3.528 3.528c-1.392 1.464-3.336 1.464-4.752.024l-.768-.72-.576.6.744.72zm-6.192 6.192c1.632 1.656 4.344 1.656 5.976 0l2.616-2.592-.6-.624-2.64 2.592c-1.392 1.44-3.336 1.44-4.728 0-1.44-1.416-1.44-3.336 0-4.728l3.528-3.528c1.416-1.464 3.336-1.464 4.752-.024l.768.72.576-.6-.744-.72c-1.656-1.656-4.344-1.68-5.976 0l-3.528 3.528c-1.68 1.632-1.656 4.344 0 5.976z"
        fill={color}
      />
    </Svg>
  );
}

export default LinkUltraLight;
