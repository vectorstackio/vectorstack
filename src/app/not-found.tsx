// app/not-found.tsx

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              404 — Page not found
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              This page doesn&apos;t exist.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              The page you&apos;re looking for may have moved, been removed or
              never existed. You can return to the homepage or explore my
              services and software development projects.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Back to homepage
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                View projects
              </Link>
            </div>

            <nav
              aria-label="404 page navigation"
              className="mt-12 border-t border-slate-200 pt-8"
            >
              <p className="text-sm font-medium text-slate-500">
                Or visit:
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  href="/about"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Services
                </Link>

                <Link
                  href="/projects"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Projects
                </Link>

                <Link
                  href="/contact"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </main>
  )
}