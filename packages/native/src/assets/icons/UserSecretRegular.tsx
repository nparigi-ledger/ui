import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function UserSecretRegular({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.548 19.488v1.872h14.904v-1.872c0-2.376-.96-4.2-2.832-5.04v-3.336H7.356v3.336c-1.872.84-2.808 2.664-2.808 5.04zm1.2-11.76h3.456c-.264.24-.432.576-.432.96 0 .696.576 1.32 1.296 1.32.744 0 1.32-.624 1.32-1.32 0-.384-.168-.72-.432-.96h2.064c-.264.24-.432.576-.432.96 0 .696.576 1.32 1.32 1.32.72 0 1.296-.624 1.296-1.32 0-.384-.168-.72-.432-.96h3.456V6.24h-2.16V4.176c0-.864-.672-1.536-1.536-1.536H9.444c-.864 0-1.536.672-1.536 1.536V6.24h-2.16v1.488zm.432 12.168v-1.32c0-1.872.792-2.784 2.64-3.024V12.48h2.52v7.416H6.18zM9.3 6.24V4.32c0-.192.096-.312.288-.312h4.8c.192 0 .312.12.312.312v1.92H9.3zm3.336 13.656V12.48h2.52v3.072c1.848.24 2.64 1.152 2.64 3.024v1.32h-5.16z"
        fill={color}
      />
    </Svg>
  );
}

export default UserSecretRegular;
