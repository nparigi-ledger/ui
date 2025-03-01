import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LockMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.63208 21.3599H19.3681V9.59989H17.4481V7.96789C17.4481 4.99189 14.9521 2.63989 12.0001 2.63989C9.04808 2.63989 6.55208 4.99189 6.55208 7.96789V9.59989H4.63208V21.3599ZM6.55208 19.5599V11.3999H17.4481V19.5599H6.55208ZM8.47208 9.59989V7.96789C8.47208 6.04789 10.0561 4.43989 12.0001 4.43989C13.9441 4.43989 15.5281 6.04789 15.5281 7.96789V9.59989H8.47208Z"
        fill={color}
      />
    </svg>
  );
}

export default LockMedium;
