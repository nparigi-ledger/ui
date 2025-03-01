import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function RefreshThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.12012 11.856V12.096H3.60012V11.856C3.60012 7.24801 7.32012 3.60001 11.9761 3.60001C15.1921 3.60001 18.0481 5.52002 19.5121 8.30402H16.9201H14.2561V8.78402H20.4001V2.64001H19.9201V5.30401V8.04002C18.3841 5.13601 15.3841 3.12001 11.9761 3.12001C7.05612 3.12001 3.12012 6.98401 3.12012 11.856ZM3.60012 21.36H4.08012V18.696V15.96C5.61612 18.864 8.61612 20.88 12.0241 20.88C16.9441 20.88 20.8801 17.016 20.8801 12.144V11.904H20.4001V12.144C20.4001 16.752 16.6801 20.4 12.0241 20.4C8.80812 20.4 5.95212 18.48 4.48812 15.696H7.08012H9.74412V15.216H3.60012V21.36Z"
        fill={color}
      />
    </svg>
  );
}

export default RefreshThin;
