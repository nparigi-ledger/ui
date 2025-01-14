import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.792 11.856V13.656H9.07201L12.528 8.472H12.792V11.856ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84ZM8.25601 14.4H12.792V16.464H13.608V14.4H15.072V13.656H13.608V7.584H12.288L8.25601 13.632V14.4Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledMediUltraLight;
