import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DashboardLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.12012 20.136H20.8801V18.96H4.32012V4.29601H3.12012V20.136ZM7.03212 16.704H8.28012V11.064H7.03212V16.704ZM11.0881 16.704H12.3361V6.24001H11.0881V16.704ZM15.1441 16.704H16.3921V8.64001H15.1441V16.704ZM19.2001 16.704H20.4481V3.86401H19.2001V16.704Z"
        fill={color}
      />
    </svg>
  );
}

export default DashboardLight;
