import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledMediLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.24 12.72V16.464H13.44V7.584H11.688L8.66401 10.392V11.832L11.808 8.928H12.288C12.288 9.552 12.24 11.016 12.24 12.72ZM5.76001 21.12H18.24V19.92H5.76001V21.12ZM5.76001 4.08H18.24V2.88H5.76001V4.08Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledMediLight;
