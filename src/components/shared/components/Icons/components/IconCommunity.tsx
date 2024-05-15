import clsx from "clsx";
import { SVGProps } from "react";

const IconCommunity = <T extends unknown>({
  color,
  ...otherProps
}: SVGProps<T, SVGSVGElement> & { color?: string }) => (
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
      d="M3.78363 11.25H8.26C8.32021 8.99973 8.64952 6.95181 9.16717 5.39887C9.32825 4.91563 9.51187 4.46715 9.7189 4.06941C6.50351 4.99257 4.09288 7.81832 3.78363 11.25ZM12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM12 3.75C11.9141 3.75 11.7129 3.80155 11.4213 4.17149C11.1364 4.53298 10.8471 5.10255 10.5902 5.87321C10.1323 7.24686 9.82057 9.12821 9.76056 11.25H14.2394C14.1794 9.12821 13.8677 7.24686 13.4098 5.87321C13.1529 5.10255 12.8636 4.53298 12.5787 4.17149C12.2871 3.80155 12.0859 3.75 12 3.75ZM15.74 11.25C15.6798 8.99973 15.3505 6.95181 14.8328 5.39887C14.6718 4.91563 14.4881 4.46715 14.2811 4.06941C17.4965 4.99257 19.9071 7.81832 20.2164 11.25H15.74ZM14.2394 12.75H9.76056C9.82057 14.8718 10.1323 16.7531 10.5902 18.1268C10.8471 18.8975 11.1364 19.467 11.4213 19.8285C11.7129 20.1985 11.9141 20.25 12 20.25C12.0859 20.25 12.2871 20.1985 12.5787 19.8285C12.8636 19.467 13.1529 18.8975 13.4098 18.1268C13.8677 16.7531 14.1794 14.8718 14.2394 12.75ZM14.2811 19.9306C14.4881 19.5329 14.6718 19.0844 14.8328 18.6011C15.3505 17.0482 15.6798 15.0003 15.74 12.75H20.2164C19.9071 16.1817 17.4965 19.0074 14.2811 19.9306ZM9.7189 19.9306C9.51187 19.5329 9.32825 19.0844 9.16717 18.6011C8.64952 17.0482 8.32021 15.0003 8.26 12.75H3.78363C4.09288 16.1817 6.50351 19.0074 9.7189 19.9306Z"
      fill={color || "currentColor"}
    />
  </svg>
);

export { IconCommunity };