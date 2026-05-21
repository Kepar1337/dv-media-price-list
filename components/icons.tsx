type IconProps = { className?: string };

export const ArrowIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className ?? 'check'}
    aria-hidden="true"
  >
    <path d="M3 7.5 6 10.5 11.5 4" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    width="12"
    height="12"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 1l1.8 3.8 4.2.5-3.1 2.9.8 4.1L7 10.4 3.3 12.3l.8-4.1L1 5.3l4.2-.5L7 1z" />
  </svg>
);

export const SparkIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 1v4M7 9v4M1 7h4M9 7h4" />
  </svg>
);

export const ExtIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    width="11"
    height="11"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 2H2v10h10V9M8 2h4v4M12 2 7 7" />
  </svg>
);

export const PlusIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 2v10M2 7h10" />
  </svg>
);

export const SendIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" />
  </svg>
);

export const SunIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="3" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.4 1.4M11.55 11.55l1.4 1.4M3.05 12.95l1.4-1.4M11.55 4.45l1.4-1.4" />
  </svg>
);

export const MoonIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z" />
  </svg>
);
