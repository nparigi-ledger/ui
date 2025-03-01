import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FeesUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.51212 12.408H13.5121V11.592H7.51212V12.408ZM4.22412 12C4.22412 17.4 6.98412 21.96 10.6801 21.96H13.4161C17.0161 21.96 19.7761 17.4 19.7761 12C19.7761 6.6 17.0161 2.04 13.4161 2.04H10.6801C6.98412 2.04 4.22412 6.6 4.22412 12ZM5.06412 12C5.06412 6.96 7.56012 2.88 10.6801 2.88C13.7041 2.88 16.2481 6.96 16.2481 12C16.2481 17.016 13.7041 21.12 10.6801 21.12C7.56012 21.12 5.06412 17.016 5.06412 12ZM13.0801 21.12C15.4081 19.632 16.9921 16.08 16.9921 12C16.9921 7.92 15.4081 4.368 13.0801 2.88H13.4161C16.4401 2.88 18.9361 6.96 18.9361 12C18.9361 17.016 16.4401 21.12 13.4161 21.12H13.0801Z"
        fill={color}
      />
    </svg>
  );
}

export default FeesUltraLight;
