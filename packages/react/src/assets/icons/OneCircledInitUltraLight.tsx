import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledInitUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5001 12.312V16.464H14.3401V7.584H12.8281L9.68411 10.512V11.568L12.9721 8.496H13.5001V12.312ZM4.06812 12C4.06812 17.04 8.02812 21 13.0681 21H19.9321V20.16H13.0681C8.50811 20.16 4.90812 16.56 4.90812 12C4.90812 7.536 8.50811 3.84 13.0681 3.84H19.9321V3H13.0681C8.02812 3 4.06812 7.08 4.06812 12Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledInitUltraLight;
