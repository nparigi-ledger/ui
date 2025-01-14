import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ListMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.43989 7.44003H21.3599V5.52003H7.43989V7.44003ZM2.63989 18.72H5.03989V16.32H2.63989V18.72ZM2.63989 13.2H5.03989V10.8H2.63989V13.2ZM2.63989 7.68003H5.03989V5.28003H2.63989V7.68003ZM7.43989 18.48H21.3599V16.56H7.43989V18.48ZM7.43989 12.96H21.3599V11.04H7.43989V12.96Z"
        fill={color}
      />
    </svg>
  );
}

export default ListMedium;
