interface ArrowIconProps {
  rotate: boolean;
}

function ArrowIcon({ rotate }: ArrowIconProps) {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-transform duration-500 ease-in-out ${
        rotate ? "rotate-0" : "rotate-180"
      }`}
    >
      <path
        d="M10.0876 9.66215C10.3154 9.88996 10.6847 9.88996 10.9125 9.66215C11.1403 9.43435 11.1403 9.065 10.9125 8.8372L7.41252 5.3372C7.18471 5.10939 6.81537 5.10939 6.58756 5.3372L3.08756 8.8372C2.85976 9.065 2.85976 9.43435 3.08756 9.66215C3.31537 9.88996 3.68471 9.88996 3.91252 9.66215L7.00004 6.57463L10.0876 9.66215Z"
        fill="#021526"
      />
    </svg>
  );
}

export default ArrowIcon;
