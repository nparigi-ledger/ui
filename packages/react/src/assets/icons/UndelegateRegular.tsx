import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function UndelegateRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.352 9.62406L20.616 21.8881L21.672 20.8321L2.952 2.11206L1.896 3.16806L7.248 8.52006C6.504 9.50406 6.072 10.7041 6.072 12.0001V20.4001H7.632V12.0001C7.632 11.0881 7.872 10.2961 8.352 9.62406ZM10.368 6.48006L11.664 7.80006H11.856H19.512C19.008 8.25606 18.528 8.71206 18.048 9.16806L16.8 10.4401L17.76 11.4241L22.104 7.05606L17.76 2.71206L16.8 3.69606L18.048 4.94406C18.504 5.40006 18.984 5.85606 19.464 6.31206H11.784C11.28 6.31206 10.8 6.36006 10.368 6.48006Z"
        fill={color}
      />
    </svg>
  );
}

export default UndelegateRegular;
