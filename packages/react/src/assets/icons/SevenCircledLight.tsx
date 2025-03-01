import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 21.12C17.1119 21.12 21.1199 16.968 21.1199 12C21.1199 6.912 17.0879 2.88 11.9999 2.88C6.91188 2.88 2.87988 6.912 2.87988 12C2.87988 17.088 6.91188 21.12 11.9999 21.12ZM4.07988 12C4.07988 7.56 7.55988 4.08 11.9999 4.08C16.4399 4.08 19.9199 7.56 19.9199 12C19.9199 16.32 16.4399 19.92 11.9999 19.92C7.55988 19.92 4.07988 16.44 4.07988 12ZM8.71188 8.64001H13.8959V8.97601C11.8799 11.088 10.7279 13.584 10.3919 16.44H11.7599C12.0719 13.296 13.2479 10.752 15.2879 8.856V7.584H8.71188V8.64001Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledLight;
