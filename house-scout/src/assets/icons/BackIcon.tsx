interface BackIconProps {
  navigate?: () => void;
  rotate?: boolean;
}

function BackIcon({ navigate, rotate }: BackIconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={navigate}
      className={` cursor-pointer transform transition-transform duration-500 ease-in-out ${
        rotate ? "rotate-180" : "rotate-0"
      }`}
      style={{ color: "inherit" }}
    >
      <path
        d="M11.9428 21.2765C11.4221 21.7972 10.5779 21.7972 10.0572 21.2765L0.723848 11.9431C0.20315 11.4224 0.20315 10.5782 0.723848 10.0575L10.0572 0.724184C10.5779 0.203485 11.4221 0.203485 11.9428 0.724184C12.4635 1.24488 12.4635 2.0891 11.9428 2.6098L4.88561 9.66699H20.3333C21.0697 9.66699 21.6667 10.2639 21.6667 11.0003C21.6667 11.7367 21.0697 12.3337 20.3333 12.3337H4.88561L11.9428 19.3909C12.4635 19.9115 12.4635 20.7558 11.9428 21.2765Z"
        fill="currentColor"
        style={{ color: "inherit" }}
      />
    </svg>
  );
}

export default BackIcon;
