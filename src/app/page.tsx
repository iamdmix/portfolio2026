import Image from "next/image";
import {
  person,
  sameAs,
  experience,
  projects,
  socials,
  elsewhereSocials,
} from "@/lib/data";
import { EasterEgg } from "@/components/easter-egg";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${person.site}/#profilepage`,
      url: person.site,
      name: person.name,
      mainEntity: { "@id": `${person.site}/#person` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: person.site,
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${person.site}/#person`,
      name: person.name,
      url: person.site,
      email: `mailto:${person.email}`,
      jobTitle: "Backend & Systems Engineer",
      description:
        "Systems enthusiast working across Linux, backend engineering, cloud infrastructure, and networking. Builds home server infrastructure and keyboard-first macOS setups.",
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "VIT Chennai" },
        {
          "@type": "EducationalOrganization",
          name: "Deeksha Center for Learning PU College, Bengaluru",
        },
      ],
      homeLocation: [
        { "@type": "Place", name: "Bengaluru, Karnataka, India" },
        { "@type": "Place", name: "Chennai, India" },
      ],
      knowsAbout: [
        "Linux",
        "Backend Engineering",
        "Cloud Infrastructure",
        "AWS",
        "Networking",
        "Docker",
        "Go",
        "Java",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified Cloud Practitioner",
        credentialCategory: "certification",
        issuedBy: { "@type": "Organization", name: "Amazon Web Services" },
      },
      sameAs,
    },
  ],
};

function Mark() {
  return (
    <span
      aria-hidden="true"
      className="inline-block pl-1.5 font-mono text-sm text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7aa2f7]"
    >
      ↗
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="glow-a" />
        <div className="glow-b" />
      </div>
      <div
        aria-hidden="true"
        className="grain pointer-events-none fixed inset-0 z-40 opacity-[0.035]"
      />

      <main className="relative z-10 mx-auto w-full max-w-[820px] flex-1 px-[max(1.5rem,env(safe-area-inset-left))] pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5rem,env(safe-area-inset-top))] sm:pt-24">
        {/* Hero */}
        <header>
          <div className="rise flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[13px] text-zinc-500">
                {person.kicker}
              </p>
              <h1 className="mt-4 font-display text-6xl font-bold leading-[1.02] tracking-tight text-zinc-50 sm:text-7xl">
                Dharmik
                <br />
                Vivek Shinde
              </h1>
            </div>
            <div
              title="AWS Certified Cloud Practitioner"
              className="mb-2.5 shrink-0 sm:mb-0"
            >
              <Image
                src="/aws-ccp.png"
                alt="AWS Certified Cloud Practitioner badge"
                width={600}
                height={600}
                className="h-24 w-24 sm:h-[8.75rem] sm:w-[8.75rem]"
              />
            </div>
          </div>

          <div className="rise rise-1 mt-8 max-w-xl space-y-4 text-[15px] leading-relaxed text-zinc-400">
            <p>
              Hi, I&apos;m Dharmik. I like systems—getting into computers to
              understand how things work across Linux, backend engineering,
              cloud infrastructure, and networking. Most of what I know came
              from building projects, running servers, and solving problems I
              had no idea how to handle when I started.
            </p>
            <p>
              Outside of tech, I&apos;m usually lifting or out on a run,
              cycling on weekends, practicing keyboard, harmonium and tabla,
              rotating through watches, hunting down sneakers, or reading with
              a playlist on. Half engineer, half athlete, full-time listener.
            </p>
          </div>

          <nav
            aria-label="Social"
            className="rise rise-1 mt-8 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[13px]"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-[#7aa2f7]"
              >
                {s.label}
                <Mark />
              </a>
            ))}
          </nav>
        </header>

        {/* Experience */}
        <section aria-labelledby="exp-h" className="rise rise-2 mt-16 sm:mt-20">
          <SectionHeading>
            <span id="exp-h">Experience</span>
          </SectionHeading>
          <div className="mt-4">
            {experience.map((e) => (
              <details key={e.org} className="group border-b border-zinc-800/70">
                <summary className="flex cursor-pointer list-none flex-col gap-0.5 py-4 [&::-webkit-details-marker]:hidden sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <p className="text-[15px]">
                    <span className="font-display font-medium text-zinc-100 transition-colors group-hover:text-[#7aa2f7]">
                      {e.org}
                    </span>
                    <span className="text-zinc-500"> — {e.role}</span>
                  </p>
                  <span className="flex items-center gap-3 font-mono text-xs text-zinc-500 sm:shrink-0">
                    {e.period}
                    <span
                      aria-hidden="true"
                      className="plus-marker text-sm text-zinc-600"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <ul className="details-body mt-1 max-w-2xl space-y-2 pb-6 text-sm leading-relaxed text-zinc-500">
                  {e.details.map((d) => (
                    <li key={d} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="shrink-0 text-zinc-700">
                        ·
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section aria-labelledby="proj-h" className="rise rise-2 mt-14">
          <SectionHeading>
            <span id="proj-h">Projects</span>
          </SectionHeading>
          <div className="mt-4">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-zinc-800/70 py-4 transition-colors"
              >
                <p className="font-display text-[15px] font-medium text-zinc-100 transition-colors group-hover:text-[#7aa2f7]">
                  {p.name}
                  <Mark />
                </p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                  {p.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section aria-labelledby="write-h" className="rise rise-2 mt-14">
          <SectionHeading>
            <span id="write-h">Writing</span>
          </SectionHeading>
          <div className="mt-4">
            <a
              href={person.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-zinc-800/70 py-4 transition-colors"
            >
              <p className="font-display text-[15px] font-medium text-zinc-100 transition-colors group-hover:text-[#7aa2f7]">
                dmix writes
                <Mark />
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                Where I yap about tech and demystify system concepts like
                Docker, Linux internals, and networking.
              </p>
            </a>
          </div>
        </section>

        {/* Elsewhere */}
        <section aria-labelledby="else-h" className="rise rise-3 mt-14">
          <SectionHeading>
            <span id="else-h">Elsewhere</span>
          </SectionHeading>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 font-mono text-[13px]">
            {elsewhereSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-zinc-400 transition-colors hover:text-[#7aa2f7]"
              >
                {s.label}
                <Mark />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="rise rise-3 mt-16 border-t border-zinc-800/70 pb-[max(0px,env(safe-area-inset-bottom))] pt-5">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-baseline sm:justify-between">
            <EasterEgg />
            <p className="font-mono text-xs text-zinc-500">
              © 2026 Dharmik Vivek Shinde
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
