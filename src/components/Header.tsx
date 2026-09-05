// components/Header.tsx

import Link from 'next/link'

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        aria-hidden="true"
        className="h-10 w-10 shrink-0"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          fill="#2563EB"
          stroke="#111827"
          strokeWidth="3"
        />
        <rect
          x="4"
          y="33"
          width="24"
          height="24"
          fill="white"
          stroke="#111827"
          strokeWidth="3"
        />
        <rect
          x="33"
          y="33"
          width="24"
          height="24"
          fill="#2563EB"
          stroke="#111827"
          strokeWidth="3"
        />
        <rect
          x="4"
          y="62"
          width="24"
          height="24"
          fill="#2563EB"
          stroke="#111827"
          strokeWidth="3"
        />
        <rect
          x="33"
          y="62"
          width="24"
          height="24"
          fill="white"
          stroke="#111827"
          strokeWidth="3"
        />
        <rect
          x="62"
          y="62"
          width="24"
          height="24"
          fill="#2563EB"
          stroke="#111827"
          strokeWidth="3"
        />
      </svg>

      <div className="leading-none">
        <div className="text-xl font-bold tracking-tight text-slate-900">
          Vector<span className="text-blue-600">Stack</span>
        </div>

        <div className="mt-1 text-[0.55rem] font-medium tracking-[0.35em] text-slate-500">
          LIMITED
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 lg:px-8">
        <Link href="/" aria-label="VectorStack Limited home">
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="w-full sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-600 sm:justify-end">
            <li>
              <Link
                href="/#work"
                className="inline-flex min-h-10 items-center px-2 transition-colors hover:text-blue-600"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="inline-flex min-h-10 items-center px-2 transition-colors hover:text-blue-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="inline-flex min-h-10 items-center px-2 transition-colors hover:text-blue-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="inline-flex min-h-10 items-center px-2 transition-colors hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="inline-flex min-h-10 items-center px-2 transition-colors hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
