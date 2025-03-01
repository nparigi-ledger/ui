import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkNoneUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.112 20.688L20.688 20.112L3.88798 3.312L3.31198 3.888L20.112 20.688ZM4.15198 19.848C5.78398 21.48 8.47198 21.48 10.128 19.848L13.416 16.56L12.816 15.96L9.50398 19.224C8.08798 20.64 6.16798 20.64 4.77598 19.224C3.35998 17.832 3.35998 15.912 4.77598 14.496L8.03998 11.184L7.43998 10.584L4.15198 13.872C2.51998 15.528 2.51998 18.216 4.15198 19.848ZM10.584 7.44L11.184 8.04L14.496 4.776C15.912 3.36 17.832 3.36 19.224 4.776C20.64 6.168 20.64 8.088 19.224 9.504L15.96 12.816L16.56 13.416L19.848 10.128C21.48 8.472 21.48 5.784 19.848 4.152C18.216 2.52 15.528 2.52 13.872 4.152L10.584 7.44Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkNoneUltraLight;
