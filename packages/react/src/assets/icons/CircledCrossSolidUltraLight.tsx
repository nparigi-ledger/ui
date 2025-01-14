import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledCrossSolidUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12C3 17.04 6.96 21 12 21ZM7.584 15.84L11.4 12L7.584 8.16L8.16 7.584L12 11.4L15.84 7.584L16.416 8.16L12.6 12L16.416 15.84L15.84 16.416L12 12.6L8.16 16.416L7.584 15.84Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledCrossSolidUltraLight;
