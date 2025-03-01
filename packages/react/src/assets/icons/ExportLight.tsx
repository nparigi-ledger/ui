import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ExportLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87988 20.52H21.1199V13.56H19.9199V19.32H4.07988V13.56H2.87988V20.52ZM7.65588 7.82398L8.42388 8.56798L9.88788 7.10398C10.3919 6.59998 10.9199 6.07198 11.4239 5.54398V16.44H12.5759V5.51998C13.1039 6.04798 13.6079 6.59998 14.1359 7.10398L15.5999 8.56798L16.3679 7.82398L11.9999 3.47998L7.65588 7.82398Z"
        fill={color}
      />
    </svg>
  );
}

export default ExportLight;
