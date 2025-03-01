import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function UserThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.72803 19.08V21.12H19.272V19.08C19.272 17.928 18.864 16.848 18.192 15.984C17.232 14.736 15.696 13.92 14.04 13.92H9.96003C8.30403 13.92 6.76803 14.736 5.80803 15.984C5.13603 16.848 4.72803 17.928 4.72803 19.08ZM5.20803 20.64V19.08C5.20803 16.464 7.34403 14.4 9.96003 14.4H14.04C16.656 14.4 18.792 16.464 18.792 19.08V20.64H5.20803ZM7.75203 7.12801C7.75203 9.48 9.64803 11.376 12 11.376C14.352 11.376 16.248 9.48 16.248 7.12801C16.248 4.776 14.352 2.88 12 2.88C9.64803 2.88 7.75203 4.776 7.75203 7.12801ZM8.23203 7.12801C8.23203 5.04 9.91203 3.36 12 3.36C14.088 3.36 15.768 5.04 15.768 7.12801C15.768 9.216 14.088 10.896 12 10.896C9.91203 10.896 8.23203 9.216 8.23203 7.12801Z"
        fill={color}
      />
    </svg>
  );
}

export default UserThin;
