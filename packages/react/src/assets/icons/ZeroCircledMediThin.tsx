import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledMediThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.704C14.208 16.704 15.36 14.856 15.36 12.024C15.36 9.192 14.232 7.344 12 7.344C9.79201 7.344 8.64001 9.192 8.64001 12.024C8.64001 14.856 9.79201 16.704 12 16.704ZM5.76001 20.88H18.24V20.4H5.76001V20.88ZM5.76001 3.6H18.24V3.12H5.76001V3.6ZM9.12001 12.048V12C9.12001 9.312 10.056 7.824 12 7.824C13.056 7.824 13.8 8.256 14.28 9.048L9.48001 14.472C9.24001 13.824 9.12001 13.008 9.12001 12.048ZM9.69601 14.952L14.496 9.528C14.76 10.176 14.88 10.992 14.88 12V12.048C14.88 14.736 13.944 16.224 12 16.224C10.944 16.224 10.176 15.792 9.69601 14.952Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledMediThin;
