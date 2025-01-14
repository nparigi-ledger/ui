import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function HandshakeLight({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.68 7.956l-2.52 2.496c-.264.264-.48.36-.744.36-.624 0-1.032-.48-1.032-1.008 0-.264.144-.552.312-.72l2.568-2.52c.36-.336.816-.552 1.296-.552h1.992c.48 0 .936.216 1.296.552l1.488 1.464c.36.336.84.528 1.32.528h2.664V7.404h-2.544a.906.906 0 01-.648-.24l-1.44-1.392c-.552-.576-1.344-.888-2.136-.888h-7.08c-.816 0-1.608.312-2.16.888l-1.44 1.392a.85.85 0 01-.624.24H1.68v1.152h2.688c.48 0 .936-.192 1.296-.528l1.488-1.464c.36-.336.816-.552 1.32-.552h2.88L8.976 8.364c-.36.36-.6.912-.6 1.464 0 1.08.864 2.016 2.04 2.016.504 0 1.008-.192 1.392-.6l.768-.768 4.464 4.488-2.496 2.472a1.798 1.798 0 01-1.272.528h-4.08c-.504 0-.96-.192-1.296-.528l-2.688-2.64c-.36-.336-.816-.552-1.32-.552H1.68v1.152h2.088c.24 0 .456.072.624.264l2.664 2.592c.528.504 1.32.864 2.136.864h4.08c.768 0 1.584-.36 2.112-.864l2.904-2.856h4.032v-1.152h-4.536L13.32 9.756 14.376 8.7l-.696-.744z"
        fill={color}
      />
    </Svg>
  );
}

export default HandshakeLight;
