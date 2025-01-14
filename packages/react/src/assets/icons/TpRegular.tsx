import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TpRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.228C17.088 21.228 21.24 17.1 21.24 12.012C21.24 6.92397 17.088 2.77197 12 2.77197C6.91201 2.77197 2.76001 6.92397 2.76001 12.012C2.76001 17.1 6.91201 21.228 12 21.228ZM5.54401 9.37197V8.07597H11.976V9.37197H9.48001V16.428H8.08801V9.37197H5.54401ZM12.984 16.428V8.07597H16.008C17.688 8.07597 18.84 9.20397 18.84 10.74C18.84 12.276 17.688 13.38 16.008 13.38H14.4V16.428H12.984ZM14.4 12.084H16.128C17.016 12.084 17.376 11.7 17.376 10.908V10.548C17.376 9.73197 17.016 9.37197 16.128 9.37197H14.4V12.084Z"
        fill={color}
      />
    </svg>
  );
}

export default TpRegular;
