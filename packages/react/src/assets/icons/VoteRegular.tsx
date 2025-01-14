import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function VoteRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.14014 21.36H19.8601V2.64001H9.49214L4.14014 7.99201V21.36ZM5.70014 19.896V8.68801H10.2841V4.10401H18.3001V19.896H5.70014ZM7.88414 12.12L11.1721 15.432L16.7881 9.79202L15.6841 8.71202L11.1721 13.2L8.96414 11.016L7.88414 12.12Z"
        fill={color}
      />
    </svg>
  );
}

export default VoteRegular;
