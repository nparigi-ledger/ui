import * as React from "react";
import Svg, { Path } from "react-native-svg";
type Props = {
  size?: number | string;
  color?: string;
};

function UserSecretMedium({
  size = 16,
  color = "currentColor",
}: Props): JSX.Element {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.488 19.56v1.8h15.024v-1.8c0-2.496-.864-4.368-2.784-5.208v-3.24H7.272v3.24c-1.92.84-2.784 2.712-2.784 5.208zM5.76 7.992h3.288a1.216 1.216 0 00-.216.72c0 .672.552 1.272 1.248 1.272.72 0 1.272-.6 1.272-1.272 0-.264-.072-.528-.216-.72h1.728a1.216 1.216 0 00-.216.72 1.28 1.28 0 001.272 1.272c.696 0 1.248-.6 1.248-1.272 0-.264-.072-.528-.216-.72h3.288v-1.8H16.2V4.176c0-.864-.672-1.536-1.536-1.536H9.336c-.864 0-1.536.672-1.536 1.536v2.016H5.76v1.8zm.768 11.568v-1.2c0-1.872.672-2.568 2.544-2.64v-2.928h2.16v6.768H6.528zM9.48 6.192V4.368c0-.024.024-.048.048-.048h4.944c.024 0 .048.024.048.048v1.824H9.48zm3.312 13.368v-6.768h2.136v2.928c1.872.072 2.544.768 2.544 2.64v1.2h-4.68z"
        fill={color}
      />
    </Svg>
  );
}

export default UserSecretMedium;
