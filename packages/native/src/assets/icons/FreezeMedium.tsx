import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function FreezeMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.16 21.36h1.68l-.072-2.712 1.512 1.512 1.104-1.104-2.544-2.544-.024-2.64 4.896 4.944 1.104-1.104-4.944-4.896 2.64.024 2.544 2.544 1.104-1.104-1.512-1.512 2.712.072v-1.68l-2.712.072L20.16 9.72l-1.104-1.104-2.544 2.544-2.64.024 4.944-4.896-1.104-1.104-4.896 4.944.024-2.64 2.544-2.544L14.28 3.84l-1.512 1.512.072-2.712h-1.68l.072 2.712L9.72 3.84 8.616 4.944l2.544 2.544.024 2.64-4.896-4.944-1.104 1.104 4.944 4.896-2.64-.024-2.544-2.544L3.84 9.72l1.512 1.512-2.712-.072v1.68l2.712-.072L3.84 14.28l1.104 1.104 2.544-2.544 2.64-.024-4.944 4.896 1.104 1.104 4.896-4.944-.024 2.64-2.544 2.544L9.72 20.16l1.512-1.512-.072 2.712z"
        fill={color}
      />
    </Svg>
  );
}

export default FreezeMedium;
