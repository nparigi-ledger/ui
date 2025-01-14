import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledMediRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.704C14.4 16.704 15.672 14.856 15.672 12.024C15.672 9.16801 14.424 7.34401 12 7.34401C9.60001 7.34401 8.32801 9.19201 8.32801 12.024C8.32801 14.856 9.60001 16.704 12 16.704ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001ZM9.93601 12.888V11.208C9.93601 9.26401 10.536 8.66401 11.976 8.66401C12.792 8.66401 13.344 8.85601 13.68 9.33601L9.96001 13.536C9.93601 13.344 9.93601 13.128 9.93601 12.888ZM10.296 14.712L14.04 10.488C14.064 10.704 14.064 10.944 14.064 11.208V12.888C14.064 14.808 13.416 15.408 11.976 15.408C11.16 15.408 10.632 15.216 10.296 14.712Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledMediRegular;
