import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function HandshakeThin({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.776 7.704L11.16 10.32c-.336.336-.576.432-.864.432-.6 0-1.08-.48-1.08-1.08 0-.264.144-.576.336-.768l2.712-2.688c.384-.36.888-.576 1.392-.576h2.112c.528 0 1.008.216 1.392.576l1.584 1.56c.384.36.888.552 1.392.552h2.184v-.48h-2.184c-.408 0-.768-.12-1.056-.408l-1.584-1.56a2.454 2.454 0 00-1.728-.72H8.232c-.648 0-1.272.264-1.728.72L4.92 7.44c-.288.288-.648.408-1.056.408H1.68v.48h2.184c.504 0 1.008-.192 1.392-.552l1.584-1.56c.384-.36.864-.576 1.392-.576h3.984c-.096.072-.192.144-.288.24L9.216 8.568a1.55 1.55 0 00-.48 1.152c0 .792.624 1.512 1.56 1.512a1.51 1.51 0 001.08-.456l1.248-1.248 5.184 5.208-3.096 3.048c-.36.36-.864.576-1.368.576H9a1.924 1.924 0 01-1.368-.576l-2.88-2.808c-.384-.36-.864-.576-1.392-.576H1.68v.48h1.68c.432 0 .744.144 1.056.432l2.88 2.808c.432.432 1.056.72 1.704.72h4.344c.624 0 1.272-.288 1.704-.72l3.288-3.24h3.984v-.48h-4.176L12.96 9.192l1.152-1.152-.336-.336z"
        fill={color}
      />
    </Svg>
  );
}

export default HandshakeThin;
