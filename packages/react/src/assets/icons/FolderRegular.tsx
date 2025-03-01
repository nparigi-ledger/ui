import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FolderRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76001 20.28H21.24V5.56797H12L10.824 4.39197C10.344 3.91197 9.86401 3.71997 9.16801 3.71997H2.76001V20.28ZM4.32001 18.816V10.512H19.68V18.816H4.32001ZM4.32001 9.02397V5.18397H9.16801C9.43201 5.18397 9.50401 5.20797 9.72001 5.42397L11.328 7.03197H19.68V9.02397H4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default FolderRegular;
