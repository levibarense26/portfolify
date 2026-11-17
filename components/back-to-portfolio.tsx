import Link from 'next/link'
import type { ComponentProps } from 'react'

type BackToPortfolioProps = Pick<ComponentProps<typeof Link>, 'onNavigate'>

export function BackToPortfolio({ onNavigate }: BackToPortfolioProps) {
  return (
    <Link className="return-home" href="/" onNavigate={onNavigate}>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
      </svg>
      <span>Return Home</span>
    </Link>
  )
}
