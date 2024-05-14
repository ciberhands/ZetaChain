import { SVGProps } from "react";

type Props = SVGProps<any, SVGSVGElement> & {
  size?: number;
  color?: string;
};

export const IconTwitter = ({ size = 20, color = "currentColor", ...other }: Props) => {
  return (
    <svg width={size} height={size} {...other} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48.2752 20.8011C48.3024 21.1734 48.3024 21.5457 48.3024 21.9214C48.3024 33.3702 39.0846 46.5741 22.2296 46.5741V46.5673C17.2506 46.5741 12.3749 45.2256 8.18341 42.6829C8.9074 42.7653 9.63502 42.8065 10.3645 42.8082C14.4907 42.8116 18.4989 41.5026 21.7451 39.092C17.8239 39.0217 14.3854 36.6043 13.1842 33.0751C14.5578 33.3256 15.9731 33.2741 17.3213 32.9258C13.0463 32.1092 9.97071 28.5577 9.97071 24.4332C9.97071 24.3955 9.97071 24.3594 9.97071 24.3234C11.2445 24.9942 12.6707 25.3665 14.1296 25.4077C10.1032 22.8633 8.86204 17.7986 11.2935 13.8388C15.9459 19.2518 22.8102 22.5425 30.179 22.8908C29.4405 19.8815 30.4493 16.7281 32.83 14.6126C36.5207 11.3322 42.3254 11.5004 45.7947 14.9883C47.8469 14.6057 49.8139 13.8937 51.6139 12.8849C50.9298 14.8906 49.4981 16.5942 47.5856 17.6768C49.402 17.4744 51.1766 17.0146 52.8477 16.3129C51.6175 18.056 50.0679 19.5744 48.2752 20.8011Z"
        fill={color}
      />
    </svg>
  );
};