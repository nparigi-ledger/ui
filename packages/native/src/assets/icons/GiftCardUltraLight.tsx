import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function GiftCardUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.92 20.46h14.16c1.104 0 1.92-.816 1.92-1.92v-8.4c0-1.104-.816-1.92-1.92-1.92h-1.608c.72-.504 1.008-1.32 1.008-1.992 0-1.416-1.128-2.688-2.64-2.688-.456 0-.96.144-1.344.384-.792.456-1.368 1.368-1.848 2.28L12 7.452l-.648-1.248c-.48-.912-1.056-1.824-1.848-2.28A2.646 2.646 0 008.16 3.54c-1.512 0-2.64 1.272-2.64 2.688 0 .672.288 1.488 1.008 1.992H4.92C3.816 8.22 3 9.036 3 10.14v8.4c0 1.104.816 1.92 1.92 1.92zm-1.08-1.896V13.62h16.32v4.944c0 .672-.408 1.08-1.08 1.08H4.944c-.696 0-1.104-.408-1.104-1.08zm0-6.864v-1.584c0-.696.408-1.08 1.104-1.08H19.08c.672 0 1.08.384 1.08 1.08V11.7H3.84zm1.8 6.048h3.6v-1.92h-3.6v1.92zm.648-11.52c0-1.008.816-1.896 1.872-1.896 1.176 0 1.896 1.056 2.496 2.208l.888 1.704H9.6c-.864 0-1.8-.024-2.448-.432-.6-.336-.864-1.008-.864-1.584zm6.168 2.016l.888-1.704c.6-1.152 1.32-2.208 2.496-2.208 1.056 0 1.872.888 1.872 1.896 0 .576-.264 1.248-.864 1.584-.624.408-1.584.432-2.448.432h-1.944z"
        fill={color}
      />
    </Svg>
  );
}

export default GiftCardUltraLight;
