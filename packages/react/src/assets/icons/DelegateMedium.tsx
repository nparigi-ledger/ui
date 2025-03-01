import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DelegateMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40796 12.444V20.844H5.32796V12.444C5.32796 10.092 6.98396 8.41201 9.31196 8.41201H17.424C16.968 8.82001 16.536 9.20401 16.128 9.61201L15.072 10.692L16.248 11.868L20.592 7.50001L16.248 3.15601L15.072 4.35601L16.128 5.41201C16.512 5.79601 16.944 6.20401 17.376 6.58801H9.31196C6.04796 6.58801 3.40796 9.25201 3.40796 12.444Z"
        fill={color}
      />
    </svg>
  );
}

export default DelegateMedium;
