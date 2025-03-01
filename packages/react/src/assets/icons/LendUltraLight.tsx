import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LendUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.19197 13.944V14.784C10.008 13.824 15.696 9.96 20.064 4.44V7.344V9.288H20.832V3.12H14.688V3.888H16.584H19.44C15.192 9.288 9.76797 13.008 3.19197 13.944ZM3.16797 20.88H4.05597V17.952H3.16797V20.88ZM7.36797 20.88H8.23197V16.608H7.36797V20.88ZM11.568 20.88H12.432V15.192H11.568V20.88ZM15.768 20.88H16.632V13.824H15.768V20.88ZM19.944 20.88H20.808V12.48H19.944V20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default LendUltraLight;
