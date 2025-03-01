import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LedgerBlueLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.39998 22.08H17.88C18.984 22.08 19.8 21.264 19.8 20.16V8.39998H20.52V5.03998H19.8V3.83998C19.8 2.73598 18.984 1.91998 17.88 1.91998H5.39998C4.29598 1.91998 3.47998 2.73598 3.47998 3.83998V20.16C3.47998 21.264 4.29598 22.08 5.39998 22.08ZM4.63198 20.184V3.79198C4.63198 3.33598 4.89598 3.04798 5.37598 3.04798H17.928C18.384 3.04798 18.672 3.33598 18.672 3.79198V20.184C18.672 20.664 18.384 20.952 17.928 20.952H5.37598C4.89598 20.952 4.63198 20.664 4.63198 20.184ZM6.35998 19.2H16.92V4.79998H6.35998V19.2ZM7.39198 18.168V5.80798H15.912V18.168H7.39198Z"
        fill={color}
      />
    </svg>
  );
}

export default LedgerBlueLight;
