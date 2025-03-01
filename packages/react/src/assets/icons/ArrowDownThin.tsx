import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowDownThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7998 20.16H20.1598V10.8H19.7038V15.288V19.368L4.17584 3.84003L3.83984 4.17603L19.3678 19.704H15.2878H10.7998V20.16Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowDownThin;
