import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.704C13.896 16.704 15.072 15.384 15.072 13.608C15.072 11.784 13.824 10.512 12.072 10.512C11.112 10.512 10.32 10.944 9.84001 11.64H9.81601L10.152 8.064H14.568V7.584H9.72001L9.24001 12.744H9.72001C10.032 11.688 10.8 10.992 12.048 10.992H12.096C13.632 10.992 14.592 12 14.592 13.584V13.632C14.592 15.216 13.68 16.224 12.024 16.224H11.976C10.32 16.224 9.40801 15.192 9.40801 13.752H8.92801C8.92801 15.384 10.104 16.704 12 16.704ZM5.76001 20.88H18.24V20.4H5.76001V20.88ZM5.76001 3.6H18.24V3.12H5.76001V3.6Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledMediThin;
