// app/contact/page.tsx

import type { Metadata } from 'next'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact VectorStack | Freelance Software Developer & Technical Lead',
  },
  description:
    'Contact VectorStack about freelance software development, Node.js, React, Next.js, AWS, AI applications, integrations, automation and technical leadership.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title:
      'Contact VectorStack | Freelance Software Developer & Technical Lead',
    description:
      'Get in touch about freelance software development, AWS, AI, integrations, automation and technical leadership.',
    type: 'website',
    url: `${siteUrl}/contact`,
    siteName: 'VectorStack',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Contact VectorStack for software development and technical leadership',
      },
    ],
  },
}

const email = process.env.NEXT_PUBLIC_DEFAULT_EMAIL_ADDRESS ?? ''

const services = [
  {
    title: 'Build something new',
    description:
      'Greenfield web applications, platforms and APIs built from the ground up.',
  },
  {
    title: 'Solve a technical problem',
    description:
      'Architecture, performance, integrations, cloud infrastructure or difficult development challenges.',
  },
  {
    title: 'Extend an existing platform',
    description:
      'Add new functionality, modernise parts of an application or help move an existing project forward.',
  },
  {
    title: 'Technical leadership',
    description:
      'Architecture, technical direction, code reviews and hands-on development when you need experienced leadership.',
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

export default function ContactPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Contact
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Let’s talk about your project.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Have a project that needs an experienced developer, a technical
                lead, or someone who can take an idea through to a working
                production system?
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                I’m available for freelance and contract work, particularly
                greenfield development, technical leadership, AWS and cloud
                projects, AI applications, integrations and automation.
              </p>
            </div>
          </div>
        </section>

        {/* What I can help with */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  What I can help with
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Practical technical expertise
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {services.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Start a conversation */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Start a conversation
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Tell me what you’re working on
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Tell me a little about what you’re working on, what you need
                help with and where you’re currently at. There’s no need to
                have everything figured out — an initial conversation is often
                the best place to start.
              </p>

              {email ? (
                <div className="mt-10">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Email me
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </a>

                  <p className="mt-4 text-sm text-slate-500">{email}</p>
                </div>
              ) : (
                <p className="mt-10 text-sm text-slate-500">
                  Please configure NEXT_PUBLIC_DEFAULT_EMAIL_ADDRESS in your
                  environment.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                No hard sell
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Just a conversation
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                If you’re still working out the details of a project, that’s
                fine. I’m happy to have an initial conversation and see whether
                I can help.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Have something you’d like to build?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Let’s talk about it.
              </p>

              {email && (
                <div className="mt-9">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    Email me
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}