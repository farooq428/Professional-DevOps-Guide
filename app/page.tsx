
export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 py-16 text-white sm:px-8">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Main Content */}
      <section className="relative z-10 mx-auto w-full max-w-5xl text-center">

        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Learn · Build · Deploy
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
          Assalam O Alaikum
          <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            DevOps Engineers!
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg md:text-xl">
          Welcome to your complete DevOps practice repository.
          Learn, practice, and master modern tools to build,
          automate, deploy, and manage production-ready applications.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#roadmap"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500 sm:w-auto"
          >
            Explore Roadmap
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 1.99 3.74 1.5.1-.73.4-1.23.7-1.52-2.48-.28-5.1-1.24-5.1-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.12 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            GitHub Repository
          </a>
        </div>

        {/* DevOps Technologies */}
        <div id="roadmap" className="mt-20 scroll-mt-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-sm">
            Your DevOps Learning Journey
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-2xl">
                <span aria-hidden="true">🔄</span>
              </div>
              <h2 className="text-lg font-bold">CI/CD Pipelines</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Automate testing, builds, and deployments with GitHub Actions.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-2xl">
                <span aria-hidden="true">🐳</span>
              </div>
              <h2 className="text-lg font-bold">Docker</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Package applications into portable containers and manage services.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-2xl">
                <span aria-hidden="true">☁️</span>
              </div>
              <h2 className="text-lg font-bold">Cloud Deployment</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Deploy and run applications on cloud servers with confidence.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.06]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-2xl">
                <span aria-hidden="true">📊</span>
              </div>
              <h2 className="text-lg font-bold">Monitoring</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Understand application health, logs, metrics, and reliability.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-500">
          Built for practical learning, real-world projects, and continuous growth.
          <p className="mt-2 text-slate-600">
            Learn today. Automate tomorrow. Deploy with confidence.
          </p>
        </footer>

      </section>
    </main>
  );
}
