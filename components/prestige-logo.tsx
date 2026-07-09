type Props = {
  className?: string
  /** If true, renders the compact square-icon variant (dark blue bg, white P, gold play). */
  compact?: boolean
}

export function PrestigeLogo({ className, compact = false }: Props) {
  if (compact) {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="9" fill="#0F2452" />
        {/* White P shape */}
        <path
          d="M9 9H26A9 9 0 0 1 26 27H17V31H9V9Z"
          fill="white"
        />
        {/* Gold play triangle in P bowl */}
        <path
          d="M19 14L28 18L19 22Z"
          fill="#C9A227"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Speech-bubble P shape (navy) */}
      <path
        d="M7 0H33C36.866 0 40 3.134 40 7V35C40 38.866 36.866 42 33 42H16L5 48L8 42H7C3.134 42 0 38.866 0 35V7C0 3.134 3.134 0 7 0Z"
        fill="#0F2452"
      />
      {/* White P shape */}
      <path
        d="M8 8H24A9 9 0 0 1 24 26H15V34H8V8Z"
        fill="white"
      />
      {/* Gold play triangle in P bowl */}
      <path
        d="M19 13L28 17L19 21Z"
        fill="#C9A227"
      />
    </svg>
  )
}
