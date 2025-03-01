import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function LifeRingMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 14.232A2.243 2.243 0 019.768 12 2.243 2.243 0 0112 9.768 2.243 2.243 0 0114.232 12 2.243 2.243 0 0112 14.232zM2.64 12c0 5.232 4.128 9.36 9.36 9.36 5.256 0 9.36-4.272 9.36-9.36 0-5.232-4.128-9.36-9.36-9.36-5.232 0-9.36 4.128-9.36 9.36zm1.92 0c0-1.728.576-3.312 1.512-4.56l2.568 2.568A3.767 3.767 0 008.088 12c0 .72.192 1.416.552 1.992L6.072 16.56A7.591 7.591 0 014.56 12zm2.88 5.928l2.568-2.568c.576.36 1.272.552 1.992.552s1.416-.192 1.992-.552l2.544 2.544A7.386 7.386 0 0112 19.44a7.591 7.591 0 01-4.56-1.512zm0-11.856A7.591 7.591 0 0112 4.56c1.728 0 3.312.576 4.56 1.512L13.992 8.64A3.767 3.767 0 0012 8.088c-.72 0-1.416.192-1.992.552L7.44 6.072zm7.92 7.92c.36-.576.552-1.272.552-1.992s-.192-1.416-.552-1.992l2.568-2.568A7.591 7.591 0 0119.44 12a7.438 7.438 0 01-1.536 4.536l-2.544-2.544z"
        fill={color}
      />
    </Svg>
  );
}

export default LifeRingMedium;
