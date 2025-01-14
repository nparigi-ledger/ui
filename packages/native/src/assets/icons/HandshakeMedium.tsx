import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function HandshakeMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.56 8.232l-2.4 2.376c-.192.168-.384.288-.648.288a.926.926 0 01-.96-.936c0-.264.12-.528.264-.672l2.424-2.376a1.81 1.81 0 011.224-.504h1.848c.456 0 .888.192 1.224.504l1.392 1.368c.336.336.768.504 1.224.504h3.168v-1.8h-2.928a.273.273 0 01-.192-.072L17.904 5.64a3.794 3.794 0 00-2.592-1.032H8.688c-.96 0-1.92.384-2.592 1.032L4.8 6.912c-.048.048-.096.072-.192.072H1.68v1.8h3.168c.456 0 .888-.168 1.224-.504l1.392-1.368a1.81 1.81 0 011.224-.504h1.848l-1.8 1.776a2.554 2.554 0 00-.72 1.752 2.5 2.5 0 002.496 2.52c.648 0 1.248-.24 1.728-.72l.288-.288 3.768 3.768-1.92 1.872a1.709 1.709 0 01-1.2.504H9.36c-.456 0-.888-.192-1.2-.504l-2.52-2.472a1.81 1.81 0 00-1.224-.504H1.68v1.8h2.496c.072 0 .144.024.192.072l2.448 2.376c.624.624 1.584 1.032 2.544 1.032h3.816c.96 0 1.92-.408 2.544-1.032l2.496-2.448h4.104v-1.8H17.4l-3.744-3.768 1.008-1.008-1.104-1.104z"
        fill={color}
      />
    </Svg>
  );
}

export default HandshakeMedium;
