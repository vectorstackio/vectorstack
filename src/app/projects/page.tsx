import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    absolute: 'Projects | VectorStack',
  },
  description:
    'Selected software development projects covering full-stack development, AWS, AI, integrations and technical leadership.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | VectorStack',
    description:
      'Selected software development projects covering full-stack development, AWS, AI, integrations and technical leadership.',
    type: 'website',
  },
}

const projects = [
  {
    title: 'Learning Platform',
    subtitle: 'The Brilliant Club',
    description:
      'A bespoke learning platform designed and built from the ground up to support teachers, students and tutors across the learning journey.',
    role: 'Lead Developer / Technical Lead',
    overview:
      'I designed and architected the platform and led its development from the ground up. The system supports multiple user types, secure authentication, learning materials, work submission and review, messaging and integration with external business systems.',
    aspects: [
      'Designed and architected the platform from scratch',
      'Built the application using Node.js, React and Next.js',
      'Designed a microservices-based backend',
      'Built services for authentication, files, messaging and notifications',
      'Developed a bespoke real-time messaging system using Socket.IO',
      'Integrated the platform with Salesforce',
      'Integrated with Certn for tutor background checks',
      'Built AWS infrastructure and deployment architecture',
      'Responsible for technical decisions, code reviews, testing and ongoing maintenance',
    ],
    technologies: [
      'Node.js',
      'React',
      'Next.js',
      'TypeScript',
      'AWS',
      'MongoDB',
      'Salesforce',
      'Socket.IO',
      'Certn',
    ],
  },
  {
    title: 'AWS Cost Insights',
    subtitle: 'AI-powered cloud cost analysis',
    description:
      'An AI-assisted cloud cost analysis platform that turns AWS usage and infrastructure data into understandable cost insights, recommendations and automated reports.',
    role: 'Developer / Architect',
    overview:
      'The platform combines AWS cost and infrastructure data with AI to help identify spending patterns, anomalies, underutilised resources and potential savings opportunities.',
    aspects: [
      'Built a Next.js application for presenting cloud cost and infrastructure insights',
      'Built Node.js/AWS Lambda APIs for cost and infrastructure analysis',
      'Integrated AWS Cost Explorer data',
      'Integrated CloudWatch infrastructure metrics',
      'Built analysis of EC2 utilisation and EBS resources',
      'Added identification of idle EC2 instances and unattached EBS volumes',
      'Added estimated savings calculations',
      'Integrated OpenAI for AI-generated cost insights and recommendations',
      'Built automated monthly reporting',
      'Generated PDF reports and stored them in S3',
      'Used EventBridge for scheduled report generation',
      'Used SES to deliver report notifications',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'AWS Lambda',
      'API Gateway',
      'AWS Cost Explorer',
      'CloudWatch',
      'EventBridge',
      'S3',
      'SES',
      'OpenAI',
    ],
  },
  {
    title: 'Travelodge',
    subtitle: 'Sense Internet',
    description:
      'Web development work for Travelodge undertaken while working with Sense Internet.',
    role: 'Full-Stack Developer',
    overview:
      'Worked on the Travelodge website as part of my work with Sense Internet, contributing to a production web platform for a major UK hotel brand.',
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

export default function ProjectsPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="Michael Garthwaite home">
            <Logo />
          </Link>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <li>
                <Link href="/#work" className="transition-colors hover:text-blue-600">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/projects" aria-current="page" className="text-blue-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="rounded-full bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Selected work
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Selected projects
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                A selection of platforms, applications and technical solutions I&apos;ve designed and built across full-stack development, cloud infrastructure, AI and integrations.
              </p>
              <p className="mt-5 max-w-3xl leading-7 text-slate-600">
                These projects span greenfield development, complex integrations and cloud-based platforms, with a focus on solving real business problems.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl space-y-12 px-6 py-20 lg:px-8 lg:py-28">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                      {project.subtitle}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                      {project.title}
                    </h2>
                    <p className="mt-5 leading-7 text-slate-600">{project.description}</p>
                    <div className="mt-7 border-l-2 border-blue-600 pl-4">
                      <p className="text-sm font-semibold text-slate-950">Role</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{project.role}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-slate-950">Overview</h3>
                    <p className="mt-4 leading-7 text-slate-600">{project.overview}</p>

                    {project.aspects && (
                      <>
                        <h3 className="mt-8 text-xl font-semibold text-slate-950">Key aspects</h3>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {project.aspects.map((aspect) => (
                            <li key={aspect} className="flex gap-3 leading-7 text-slate-600">
                              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                              <span>{aspect}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {project.technologies && (
                      <>
                        <h3 className="mt-8 text-xl font-semibold text-slate-950">Technologies</h3>
                        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                          {project.technologies.map((technology) => (
                            <li
                              key={technology}
                              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                More experience
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600 sm:text-xl">
                Alongside these projects, I&apos;ve worked across a range of organisations and platforms, including Ecorys, UCL and Tastecard. My experience spans greenfield development, platform modernisation, integrations and production web applications.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Practical software
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for the real world
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I focus on building software that is useful, maintainable and ready for production. That means thinking beyond the code — understanding the business problem, making sensible architectural decisions, integrating with existing systems and building something that can evolve over time.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-600">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a project that needs building?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              If you&apos;re looking for an experienced developer who can take ownership of a project from architecture through to production, let&apos;s talk.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                Get in touch
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-blue-300 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-blue-700"
              >
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <span className="text-white">Michael Garthwaite</span>
            <span className="mx-2">·</span>
            VectorStack Limited
          </div>
          <div>© {new Date().getFullYear()} VectorStack Limited</div>
        </div>
      </footer>
    </>
  )
}
