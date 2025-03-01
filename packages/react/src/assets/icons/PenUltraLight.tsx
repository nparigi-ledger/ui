import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PenUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.43604 21.552L8.10004 19.992L21.564 6.552L17.436 2.448L3.99604 15.888L2.43604 21.552ZM3.58804 20.4L4.74004 16.296L7.69204 19.248L3.58804 20.4ZM5.29204 15.72L14.748 6.264L17.724 9.24L8.26804 18.696L5.29204 15.72ZM15.324 5.712L17.436 3.576L20.412 6.552L18.276 8.664L15.324 5.712Z"
        fill={color}
      />
    </svg>
  );
}

export default PenUltraLight;
