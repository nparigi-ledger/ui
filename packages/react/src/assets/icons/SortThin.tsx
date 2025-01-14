import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SortThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2881 6.98401L7.9441 2.64001L3.6001 6.98401L3.9361 7.32001L5.8081 5.44801L7.7041 3.55201V20.4H8.1841V3.55201L10.0801 5.44801L11.9521 7.32001L12.2881 6.98401ZM11.7121 17.016L16.0561 21.36L20.4001 17.016L20.0641 16.68L18.1921 18.552L16.2961 20.448V3.60001H15.8161V20.448L13.9201 18.552L12.0481 16.68L11.7121 17.016Z"
        fill={color}
      />
    </svg>
  );
}

export default SortThin;
