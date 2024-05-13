import clsx from "clsx";
import { SVGProps } from "react";

const IconUse = <T extends unknown>({ color, ...otherProps }: SVGProps<T, SVGSVGElement> & { color?: string }) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
    className={clsx(otherProps?.className, { "text-grey-500 dark:text-grey-300": !otherProps?.className })}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3.75C7.20507 3.75 5.75 5.20507 5.75 7C5.75 8.79493 7.20507 10.25 9 10.25C10.7949 10.25 12.25 8.79493 12.25 7C12.25 5.20507 10.7949 3.75 9 3.75ZM4.25 7C4.25 4.37665 6.37665 2.25 9 2.25C11.6234 2.25 13.75 4.37665 13.75 7C13.75 9.62335 11.6234 11.75 9 11.75C6.37665 11.75 4.25 9.62335 4.25 7ZM9 14.75C6.10051 14.75 3.75 17.1005 3.75 20V20.25H14.25V20C14.25 17.1005 11.8995 14.75 9 14.75ZM2.25 20C2.25 16.2721 5.27208 13.25 9 13.25C12.7279 13.25 15.75 16.2721 15.75 20V21.75H2.25V20Z"
      fill={color || "currentColor"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5 10.2374C17.0174 11.0694 16.3288 11.7624 15.5028 12.25C16.3288 12.7376 17.0174 13.4306 17.5 14.2626C17.9826 13.4306 18.6712 12.7376 19.4972 12.25C18.6712 11.7624 17.9826 11.0694 17.5 10.2374ZM16.9382 8.53933H18.0618L18.2242 8.97251C18.6904 10.2157 19.6931 11.1819 20.9527 11.6018L21.1897 11.6808V12.8192L20.9527 12.8982C19.6931 13.3181 18.6904 14.2843 18.2242 15.5275L18.0618 15.9607H16.9382L16.7758 15.5275C16.3096 14.2843 15.3069 13.3181 14.0473 12.8982L13.8103 12.8192V11.6808L14.0473 11.6018C15.3069 11.1819 16.3096 10.2157 16.7758 8.97251L16.9382 8.53933Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconUse };
