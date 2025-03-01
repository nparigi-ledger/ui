import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.24c5.184 0 9.24-4.2 9.24-9.24 0-5.16-4.08-9.24-9.24-9.24S2.76 6.84 2.76 12s4.08 9.24 9.24 9.24zM4.32 12c0-4.32 3.384-7.68 7.68-7.68 4.32 0 7.68 3.36 7.68 7.68 0 4.176-3.36 7.68-7.68 7.68-4.296 0-7.68-3.384-7.68-7.68zm4.08.144c.024 2.856 1.32 4.56 3.552 4.56 1.92 0 3.24-1.32 3.24-3.096s-1.344-3.072-3-3.072c-.864 0-1.656.384-2.064 1.056h-.24c.024-1.8.552-2.88 2.112-2.88.984 0 1.608.408 1.728 1.272h1.44c-.24-1.608-1.44-2.64-3.168-2.64-2.304 0-3.624 1.872-3.6 4.8zm1.752 1.728v-.6c0-.936.552-1.44 1.68-1.44h.192c1.128 0 1.656.504 1.656 1.44v.6c0 .936-.528 1.44-1.656 1.44h-.192c-1.152 0-1.68-.528-1.68-1.44z"
        fill={color}
      />
    </Svg>
  );
}

export default SixCircledRegular;
