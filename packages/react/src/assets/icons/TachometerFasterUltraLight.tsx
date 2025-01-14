import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerFasterUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.24783 19.572H19.7038C20.4718 18.516 21.1198 17.124 21.3598 15.732H20.4958C20.3038 16.812 19.8478 17.844 19.2718 18.732H4.67983C3.79183 17.364 3.26383 15.732 3.26383 14.004C3.26383 9.18001 7.17583 5.26801 11.9758 5.26801C16.1998 5.26801 19.7038 8.29201 20.4958 12.276H21.3598C20.5438 7.81201 16.6558 4.42801 11.9758 4.42801C6.69583 4.42801 2.42383 8.72401 2.42383 14.004C2.42383 16.068 3.11983 18.036 4.24783 19.572ZM11.5678 14.004C11.5678 14.244 11.7358 14.412 11.9758 14.412H21.5758V13.572H11.9758C11.7358 13.572 11.5678 13.764 11.5678 14.004Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerFasterUltraLight;
