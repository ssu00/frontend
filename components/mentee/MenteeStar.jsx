const MenteeStar = ({ width, height, color, onClick }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill={color}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.04729 0.965582C5.22717 0.58192 5.77283 0.58192 5.95271 0.965582L7.08563 3.38195C7.15641 3.53293 7.2978 3.63868 7.46262 3.66393L10.0365 4.05827C10.4391 4.11995 10.603 4.61133 10.318 4.90233L8.42683 6.83354C8.31564 6.94709 8.26505 7.10672 8.29054 7.26358L8.73281 9.98495C8.79973 10.3967 8.36273 10.7045 7.99757 10.5028L5.74172 9.25702C5.59128 9.17394 5.40872 9.17394 5.25828 9.25702L3.00243 10.5028C2.63727 10.7045 2.20027 10.3967 2.26719 9.98495L2.70946 7.26358C2.73495 7.10672 2.68436 6.94709 2.57317 6.83354L0.682003 4.90233C0.397038 4.61133 0.560927 4.11995 0.963522 4.05827L3.53738 3.66393C3.7022 3.63868 3.84359 3.53293 3.91437 3.38196L5.04729 0.965582Z" />
    </svg>
  );
};

export default MenteeStar;
