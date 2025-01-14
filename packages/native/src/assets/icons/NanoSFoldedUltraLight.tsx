import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoSFoldedUltraLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2.1 21.036h16.056c2.016 0 3.744-1.704 3.744-3.768 0-1.104-.48-2.016-1.296-2.832L15.78 9.588l.408-.384-1.8-1.776-.408.384-1.968-1.992.408-.384-1.752-1.776-.408.408-1.128-1.104-5.184 5.184 5.424 5.4H2.1v7.488zm.792-.816v-5.856h15.264c1.608 0 2.928 1.272 2.928 2.904a2.93 2.93 0 01-2.928 2.952H2.892zM5.076 8.148l4.056-4.056 9.504 9.552a3.533 3.533 0 00-.864-.096h-7.248l-5.448-5.4zm11.28 9.12c0 .888.72 1.704 1.68 1.704.888 0 1.632-.816 1.632-1.704 0-.912-.744-1.632-1.632-1.632-.96 0-1.68.72-1.68 1.632zm.672 0c0-.528.432-.96 1.008-.96.528 0 .96.432.96.96 0 .552-.432 1.008-.96 1.008a.999.999 0 01-1.008-1.008z"
        fill={color}
      />
    </Svg>
  );
}

export default NanoSFoldedUltraLight;
