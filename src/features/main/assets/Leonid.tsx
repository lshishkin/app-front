import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

/**
 * SVG Text Component generated from: "LEONID"
 * Font: Black Han Sans regular
 * Size: 50px
 * Generated on: 31.01.2026, 21:14:55
 */

interface TextToSvgComponentProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  width?: string | number;
  height?: string | number;
}

export const Leonid: React.FC<TextToSvgComponentProps> = ({
  className = "",
  style = {},
  fill = "#ffffff",
  width,
  height,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <svg
      className={className}
      style={style}
      fill={fill}
      width={188 / (isMobile ? 1.5 : 1)}
      height={39 / (isMobile ? 1.5 : 1)}
      viewBox="0 1.100000023841858 188.6999969482422 39.30000305175781"
      data-asc="0.79"
      {...props}
    >
      <defs />
      <g fill="#ffffff">
        <g transform="translate(0, 0)">
          <path d="M24 29.90L12 29.90L12 2L0 2L0 39.50L24 39.50L24 29.90ZM51.30 16.65L39.30 16.65L39.30 11.60L52.20 11.60L53.70 2L27.30 2L27.30 39.50L54 39.50L54 29.90L39.30 29.90L39.30 25.35L51.30 25.35L51.30 16.65ZM57.30 20.80Q57.30 15.65 58.18 11.92Q59.05 8.20 61.13 5.80Q63.20 3.40 66.60 2.25Q70 1.10 75 1.10Q80.05 1.10 83.43 2.25Q86.80 3.40 88.88 5.80Q90.95 8.20 91.83 11.92Q92.70 15.65 92.70 20.80Q92.70 25.70 91.90 29.38Q91.10 33.05 89.08 35.50Q87.05 37.95 83.63 39.17Q80.20 40.40 75 40.40Q69.80 40.40 66.38 39.17Q62.95 37.95 60.93 35.50Q58.90 33.05 58.10 29.38Q57.30 25.70 57.30 20.80M70.20 14.55L70.20 30.15L75.20 30.15Q77.70 30.15 78.78 29.57Q79.85 29 79.85 26.95L79.85 11.35L74.80 11.35Q72.40 11.35 71.30 11.92Q70.20 12.50 70.20 14.55ZM130.20 39.50L118.90 39.50L109.75 26.20Q109.50 25.85 109.35 25.15Q109.20 24.45 109.15 23.30L108.90 23.30L108.90 39.50L96.90 39.50L96.90 2L108.20 2L117.35 15.30Q117.60 15.65 117.75 16.35Q117.90 17.05 117.95 18.20L118.20 18.20L118.20 2L130.20 2L130.20 39.50ZM148.20 39.50L148.20 2L136.20 2L136.20 39.50L148.20 39.50ZM171.00 39.50L154.20 39.50L154.20 2L171.00 2Q176.05 2 179.45 3.02Q182.85 4.05 184.90 6.30Q186.95 8.55 187.83 12.10Q188.70 15.65 188.70 20.70Q188.70 25.75 187.83 29.32Q186.95 32.90 184.90 35.15Q182.85 37.40 179.45 38.45Q176.05 39.50 171.00 39.50M171.20 11.60L166.20 11.60L166.20 29.90L171.20 29.90Q173.70 29.90 174.78 29.32Q175.85 28.75 175.85 26.70L175.85 14.80Q175.85 12.75 174.78 12.17Q173.70 11.60 171.20 11.60Z" />
        </g>
      </g>
    </svg>
  );
};
