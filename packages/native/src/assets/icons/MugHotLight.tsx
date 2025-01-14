import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function MugHotLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M8.064 20.88h2.952c1.608 0 3-.6 3.984-1.896.144-.192.288-.384.408-.6h.72c2.784 0 4.872-1.848 4.872-4.416 0-2.64-2.088-4.488-4.872-4.488H3V15c0 1.824.336 3.024 1.104 3.984 1.008 1.296 2.352 1.896 3.96 1.896zm-3.792-5.232v-5.04h10.56v5.04c0 2.568-1.104 4.032-3.696 4.032H7.968c-2.544 0-3.696-1.416-3.696-4.032zM6.768 7.92H8.04c-.072-1.104.528-1.608 1.92-1.776l1.728-.216c1.8-.216 2.952-1.152 2.832-2.808h-1.248c.048 1.104-.576 1.584-1.944 1.752L9.6 5.088C7.8 5.304 6.648 6.24 6.768 7.92zm9.072 9.312c.168-.6.24-1.344.24-2.232v-4.368c2.448 0 3.672.96 3.672 3.024v.576c0 1.992-1.2 3-3.552 3h-.36z"
        fill={color}
      />
    </Svg>
  );
}

export default MugHotLight;
