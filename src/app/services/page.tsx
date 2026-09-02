import type { Metadata } from 'next'
import Link from 'next/link'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Services | VectorStack',
  },
  description:
    'Senior full-stack development, AWS, AI, integrations and technical leadership from VectorStack.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | VectorStack',
    description:
      'Senior full-stack development, AWS, AI, integrations and technical leadership from VectorStack.',
    type: 'website',
  },
}

const services = [
  {
    title: 'Full-Stack Development',
    description:
      'I build robust, maintainable web applications from front end to back end, with a focus on clean architecture, performance and long-term maintainability.',
    technologies: ['Node.js', 'React', 'Next.js', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'AWS & Cloud Development',
    description:
      'I design and build scalable cloud-based solutions using AWS, including serverless applications, APIs, event-driven architectures and cloud infrastructure.',
    technologies: ['AWS Lambda', 'API Gateway', 'S3', 'EventBridge', 'CloudWatch'],
  },
  {
    title: 'AI & Intelligent Applications',
    description:
      'I develop practical AI solutions that can be integrated into real products and business workflows, rather than AI for its own sake.',
    technologies: [
      'OpenAI',
      'LLM applications',
      'RAG',
      'AI agents',
      'LangChain / LangGraph',
      'Vector databases',
    ],
  },
  {
    title: 'Integrations & Automation',
    description:
      'I connect systems and automate business processes, reducing manual work and making data flow reliably between the tools your business already uses.',
    technologies: [
      'REST APIs',
      'Salesforce',
      'Third-party integrations',
      'Data synchronisation',
      'Workflow automation',
    ],
  },
  {
    title: 'Technical Leadership',
    description:
      'I provide senior technical direction when you need help making architecture decisions, establishing development practices or taking a project from idea to production.',
    technologies: [
      'Architecture',
      'Technical strategy',
      'Code reviews',
      'Mentoring',
      'AWS architecture',
      'Greenfield development',
    ],
  },
]

const stages = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business problem, users and technical requirements.',
  },
  {
    number: '02',
    title: 'Architect',
    description:
      'Design a pragmatic architecture that balances scalability, maintainability and cost.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop the solution using modern, proven technologies and clean engineering practices.',
  },
  {
    number: '04',
    title: 'Launch & Improve',
    description:
      'Deploy to production, monitor the system and continue improving it as the business evolves.',
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
        <rect x="4" y="4" width="24" height="24" fill="#2563EB" stroke="#111827" strokeWidth="3" />
        <rect x="4" y="33" width="24" height="24" fill="white" stroke="#111827" strokeWidth="3" />
        <rect x="33" y="33" width="24" height="24" fill="#2563EB" stroke="#111827" strokeWidth="3" />
        <rect x="4" y="62" width="24" height="24" fill="#2563EB" stroke="#111827" strokeWidth="3" />
        <rect x="33" y="62" width="24" height="24" fill="white" stroke="#111827" strokeWidth="3" />
        <rect x="62" y="62" width="24" height="24" fill="#2563EB" stroke="#111827" strokeWidth="3" />
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

export default function ServicesPage() {
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
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Services
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Software development that solves real business problems.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                I help businesses design, build and improve modern web applications, cloud platforms and AI-powered solutions — from initial architecture through to production.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Let&apos;s talk
                  <span aria-hidden="true" className="ml-2">→</span>
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 hover:bg-slate-50"
                >
                  View my work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                How I can help
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl">
                Whether you need a new application, help modernising an existing platform, or specialist expertise for a complex integration, I can help turn the requirement into a robust production solution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-[border-color,box-shadow] hover:border-slate-300 hover:shadow-md"
                >
                  <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
                  <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} technologies`}>
                    {service.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                How I work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                From idea to production
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                I can contribute across the complete development lifecycle, from clarifying the problem through to a reliable production release.
              </p>
            </div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stages.map((stage) => (
                <li key={stage.number} className="border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">{stage.number}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{stage.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{stage.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                A practical technical partner
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Experienced enough to lead. Hands-on enough to build.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I&apos;ve spent years building production software for organisations ranging from established businesses to large-scale platforms. I combine hands-on development with architectural thinking, so you get someone who can understand the bigger picture without losing sight of the code.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-600">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              If you need an experienced developer to build something new, solve a difficult technical problem or help take an existing platform forward, I&apos;d be happy to have a conversation.
            </p>
            <div className="mt-9">
              <a
                href={`mailto:{process.env.NEXT_PUBLIC_DEFAULT_EMAIL_ADDRESS}`}
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Get in touch
                <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
