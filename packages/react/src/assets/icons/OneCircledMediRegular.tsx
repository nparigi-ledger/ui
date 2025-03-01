import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledMediRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.072 13.128V16.464H13.632V7.58401H11.64L8.73601 10.272V12.12L11.712 9.38401H12.12C12.12 9.69601 12.072 11.208 12.072 13.128ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledMediRegular;
