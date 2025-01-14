import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TwoCircledInitUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1641 16.464H16.1641V15.696H11.0761V15.264L13.9321 13.224C15.5401 12.072 16.0921 11.208 16.0921 10.104C16.0921 8.304 14.7001 7.344 13.0681 7.344C11.1481 7.344 9.97212 8.688 9.97212 10.224V10.464H10.7881V10.224C10.7881 9.024 11.5081 8.112 13.0441 8.112H13.1161C14.3881 8.112 15.2521 8.76 15.2521 10.104C15.2521 10.992 14.8921 11.64 13.3081 12.768L10.1641 15V16.464ZM4.06812 12C4.06812 17.04 8.02812 21 13.0681 21H19.9321V20.16H13.0681C8.50811 20.16 4.90812 16.56 4.90812 12C4.90812 7.536 8.50811 3.84 13.0681 3.84H19.9321V3H13.0681C8.02812 3 4.06812 7.08 4.06812 12Z"
        fill={color}
      />
    </svg>
  );
}

export default TwoCircledInitUltraLight;
