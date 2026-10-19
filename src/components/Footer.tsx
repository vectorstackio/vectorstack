// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          Michael Garthwaite · ReasonStack Limited
        </p>

        <p>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}