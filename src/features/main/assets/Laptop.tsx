export const LapTop = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? 150 : 300}
      height={isMobile ? 150 : 300}
      viewBox="0 0 512 512"
    >
      <path
        fill="#ffffff"
        d="M440 368a24.028 24.028 0 0 0 24-24V104a24.028 24.028 0 0 0-24-24H72a24.028 24.028 0 0 0-24 24v240a24.028 24.028 0 0 0 24 24ZM80 112h352v224H80ZM16 400h480v32H16z"
      />
    </svg>
  );
};
