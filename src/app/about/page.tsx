// src/app/about/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'About | VectorStack',
  },
  description:
    'Senior full-stack developer and technical lead specialising in Node.js, React, Next.js, AWS, AI, integrations and automation.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | VectorStack',
    description:
      'Senior full-stack developer and technical lead specialising in Node.js, React, Next.js, AWS, AI, integrations and automation.',
    type: 'website',
  },
}

const experience = [
  'Greenfield application development',
  'Full-stack web development',
  'Cloud architecture and AWS',
  'API and third-party integrations',
  'Data synchronisation and automation',
  'AI-powered applications',
  'Technical leadership and architecture',
  'Production deployment and ongoing maintenance',
]

const expectations = [
  {
    title: 'Clear thinking',
    description:
      'I’ll help turn business requirements into a practical technical solution.',
  },
  {
    title: 'Strong engineering',
    description:
      'I’ll build maintainable software using proven technologies and sensible architecture.',
  },
  {
    title: 'Ownership',
    description:
      'I’ll take responsibility for the work rather than simply completing isolated development tasks.',
  },
  {
    title: 'Pragmatism',
    description:
      'I’ll avoid unnecessary complexity and choose technology based on what the project actually needs.',
  },
  {
    title: 'Long-term thinking',
    description:
      'I’ll build with the future in mind, so the system can evolve as your business grows.',
  },
]

function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label="VectorStack Limited">
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

export default function AboutPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                About
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Senior developer. Technical lead. Hands-on problem solver.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                I’m a senior full-stack developer and technical lead with
                extensive experience designing and building production web
                applications and cloud-based platforms.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                I specialise in Node.js, React, Next.js, TypeScript and AWS,
                with additional experience in AI, integrations and automation.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                I enjoy working on greenfield projects where I can take a
                problem from an initial idea through architecture and
                development to a production-ready solution.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Let&apos;s talk
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  View my work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* My approach */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  My approach
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  A practical approach to software
                </h2>
              </div>

              <div className="space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Good software isn’t just about choosing the latest
                  technology. It’s about understanding the problem, making
                  sensible architectural decisions and building something that
                  is reliable, maintainable and useful.
                </p>

                <p>
                  I combine hands-on development with architectural thinking.
                  I’m comfortable working at the level of individual components
                  and APIs, but also stepping back to consider the wider
                  system, infrastructure and business requirements.
                </p>

                <p>
                  My approach is pragmatic: use the right technology for the
                  problem, keep complexity under control and build systems that
                  can evolve as requirements change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Experience
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Experience that spans the whole development lifecycle
                </h2>
              </div>

              <div>
                <div className="space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Over my career I’ve worked on projects for organisations
                    including The Brilliant Club, Ecorys, UCL, Tastecard and
                    Travelodge, as well as working independently with clients.
                  </p>

                  <p>
                    More recently, I’ve focused on modern JavaScript and cloud
                    technologies, moving from PHP and Drupal into Node.js and
                    React, and subsequently adopting Next.js and AWS for
                    building modern production platforms.
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {experience.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical leadership */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Technical leadership
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Hands-on technical leadership
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  As a technical lead, I don’t just design systems and hand
                  the implementation to someone else.
                </p>

                <p className="font-medium text-slate-950">
                  I stay close to the code.
                </p>

                <p>
                  I’ve designed architectures, built applications, managed
                  AWS infrastructure, integrated third-party systems, reviewed
                  code, worked with other developers and taken responsibility
                  for getting software into production.
                </p>

                <p>
                  That combination means I can help with both the strategic
                  decisions and the practical implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What clients can expect */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Working together
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                What clients can expect
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                When I work on a project, my aim is to become someone you can
                rely on to take ownership of the technical side.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {expectations.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Let&apos;s work together
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Let’s build something useful
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                If you need an experienced developer to build something new,
                solve a difficult technical problem or help take an existing
                platform forward, I’d be happy to have a conversation.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                  Get in touch
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}