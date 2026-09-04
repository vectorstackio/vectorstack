// app/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Senior Full-Stack Developer | Node.js, React, Next.js & AWS | Michael Garthwaite',
  description:
    'Senior full-stack developer and technical lead specialising in Node.js, React, Next.js and AWS. Bespoke web applications, integrations, automation and AI solutions for businesses.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Senior Full-Stack Developer | Node.js, React, Next.js & AWS',
    description:
      'Senior full-stack development, cloud systems, integrations, automation and AI-powered applications.',
    type: 'website',
    url: siteUrl,
    siteName: 'Michael Garthwaite',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Michael Garthwaite — Senior Full-Stack Developer & Technical Lead',
      },
    ],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Michael Garthwaite',
      givenName: 'Michael',
      familyName: 'Garthwaite',
      alternateName: 'Mike Garthwaite',
      email: 'mike@vectorstack.io',
      url: siteUrl,
      jobTitle: 'Senior Full-Stack Developer & Technical Lead',
      sameAs: [
        'https://www.linkedin.com/in/mike-garthwaite-0747ba14',
      ],
      worksFor: {
        '@id': `${siteUrl}/#organization`,
      },
      knowsAbout: [
        'Node.js',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'AWS',
        'Cloud Computing',
        'Software Architecture',
        'Artificial Intelligence',
        'AI Applications',
        'API Integration',
        'Salesforce Integration',
        'Automation',
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'VectorStack Limited',
      url: siteUrl,
      founder: {
        '@id': `${siteUrl}/#person`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Michael Garthwaite',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
}

const services = [
  {
    title: 'Web Application Development',
    description:
      'Bespoke web applications and platforms built with modern JavaScript and TypeScript technologies.',
    technologies: 'Node.js · React · Next.js · TypeScript',
  },
  {
    title: 'Cloud & AWS',
    description:
      'Scalable and reliable cloud applications designed around your requirements, from serverless services to complete application architectures.',
    technologies: 'AWS · Lambda · API Gateway · S3 · EventBridge',
  },
  {
    title: 'Integrations & Automation',
    description:
      'Connecting business systems and automating processes so your technology works together reliably.',
    technologies: 'Salesforce · APIs · Data synchronisation · Background processing',
  },
  {
    title: 'AI Applications',
    description:
      'Practical AI solutions that combine modern AI models with your applications and business data.',
    technologies: 'OpenAI · RAG · Pinecone · LangChain · LangGraph',
  },
  {
    title: 'Technical Leadership',
    description:
      'Architecture, technical direction and hands-on development for projects that need experienced technical ownership.',
    technologies: 'Architecture · Technical design · Code review · Mentoring',
  },
]

const projects = [
  {
    title: 'The Brilliant Club',
    subtitle: 'Bespoke learning platform',
    description:
      'Designed and architected a web-based learning platform used by teachers, students and tutors. Built from the ground up using Next.js, Node.js, AWS and MongoDB, with Salesforce, real-time messaging, notifications and other third-party integrations.',
    technologies: 'Next.js · Node.js · AWS · MongoDB · Salesforce',
  },
  {
    title: 'AWS Cost Insights',
    subtitle: 'AI-powered cloud cost analysis',
    description:
      'An AI-powered application for analysing AWS costs and infrastructure, identifying cost drivers, anomalies, trends and potential savings.',
    technologies: 'Next.js · TypeScript · AWS · OpenAI · Pinecone',
  },
  {
    title: 'Travelodge',
    subtitle: 'Web platform development',
    description:
      'Worked on the Travelodge website as part of the development team at Sense Internet, contributing to a large-scale commercial web platform used by one of the UK\'s major hotel brands.',
    technologies: 'Node.js · React · Web Development',
  },
]

const reasons = [
  {
    title: 'Experience',
    description:
      'Extensive experience designing and building production systems, including complex business applications and integrations.',
  },
  {
    title: 'End-to-end ownership',
    description:
      'I can work across architecture, backend, frontend, cloud infrastructure, deployment and ongoing development.',
  },
  {
    title: 'Business-focused',
    description:
      'I focus on understanding what the software needs to achieve rather than simply implementing technical requirements.',
  },
  {
    title: 'Modern technology',
    description:
      'I use modern JavaScript, AWS and AI technologies to build practical, maintainable solutions.',
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

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
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Senior Full-Stack Developer & Technical Lead
              </h1>

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Building modern web applications, cloud systems,
                integrations and AI-powered solutions.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I design and build bespoke software for businesses that need
                experienced technical leadership and hands-on development.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  View my work
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  Get in touch
                </Link>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                Michael Garthwaite · VectorStack Limited · West Yorkshire, UK
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Experience
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Experienced in building systems from the ground up
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600 lg:col-span-2">
                <p>
                  I&apos;m a senior full-stack developer and technical lead with
                  extensive experience designing, building and maintaining
                  bespoke web applications and cloud-based systems.
                </p>

                <p>
                  I specialise in Node.js, React, Next.js, TypeScript and AWS, with particular experience 
                  in application architecture, third-party integrations, automation and AI-powered applications.
                </p>

                <p>
                  I particularly enjoy greenfield projects where I can take an
                  idea or business requirement and turn it into a well-designed,
                  production-ready system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                What I do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Technical expertise focused on business outcomes
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-[border-color,box-shadow] hover:border-slate-300 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <p className="mt-6 text-sm font-medium leading-6 text-blue-600">
                    {service.technologies}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Selected work
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Systems I&apos;ve designed and built
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                A selection of projects demonstrating experience across
                application development, cloud infrastructure, integrations
                and AI.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-7"
                >
                  <p className="text-sm font-medium text-blue-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-5 flex-1 leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <p className="mt-6 text-sm font-medium leading-6 text-slate-400">
                    {project.technologies}
                  </p>

                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why work with me */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Why work with me?
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  One experienced developer from idea to production
                </h2>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 lg:col-span-2">
                {reasons.map((reason) => (
                  <article key={reason.title}>
                    <h3 className="text-xl font-semibold text-slate-950">
                      {reason.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {reason.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Technologies
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Modern tools for modern applications
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-semibold text-slate-950">Frontend</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  React · Next.js · TypeScript · JavaScript · Tailwind CSS
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">Backend</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Node.js · REST APIs · Microservices · Serverless
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">Cloud</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  AWS · Lambda · API Gateway · S3 · CloudWatch · EC2
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">Data</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  MongoDB · Redis · Pinecone
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">AI</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  OpenAI · RAG · LangChain · LangGraph
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">Integrations</h3>
                <p className="mt-2 leading-7 text-slate-600">
                  Salesforce · REST APIs · Third-party services · Automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="bg-blue-600">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              Whether you&apos;re starting a new application, modernising an
              existing system, connecting your business systems or exploring
              how AI could improve your processes, I&apos;d be happy to discuss
              what you&apos;re trying to achieve.
            </p>

            <div className="mt-9">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_DEFAULT_EMAIL_ADDRESS}`}
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Get in touch
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>

            <p className="mt-7 text-sm text-blue-100">
              Available for freelance projects from November 2026.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
