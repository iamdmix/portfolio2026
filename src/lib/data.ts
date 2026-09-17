export const person = {
  name: "Dharmik Vivek Shinde",
  kicker: "backend & systems engineer — bengaluru ⇄ chennai, india",
  site: "https://dharmikshinde.tech",
  blog: "https://blog.dharmikshinde.tech",
  email: "dharmikvs26@gmail.com",
} as const;

export const links = {
  github: "https://github.com/iamdmix",
  linkedin: "https://www.linkedin.com/in/dharmik-vivek-shinde-891156282/",
  x: "https://x.com/dharmikshinde",
  instagram: "https://www.instagram.com/shindedharmik",
  leetcode: "https://leetcode.com/u/shindedharmik/",
  strava: "https://strava.app.link/7rxe4CWIv6b",
  appleMusic: "https://music.apple.com/profile/dharmikvs26",
  spotify:
    "https://open.spotify.com/user/5dai0qchkjtf6qd49hy1tc5pr?si=9KjsEFNqRA-LGcRZ5VZePQ&utm_source=copy-link",
  soundcloud: "https://on.soundcloud.com/dpWv5XpE7eSBqHV26d",
} as const;

export const sameAs = Object.values(links) as string[];

export const experience = [
  {
    org: "HummingWave Technologies",
    role: "Full Stack Developer Intern",
    period: "May 2026 – Jul 2026",
    details: [
      "Built the Next.js BFF architecture and shipped Figma designs to pixel.",
      "Moved dynamic asset storage onto AWS S3.",
      "Flutter webview components where the web couldn't reach.",
    ],
  },
  {
    org: "LumiEther Research LLP",
    role: "Backend Engineering Intern",
    period: "May 2025 – Jul 2025",
    details: [
      "Engineered a custom Java (Quarkus) JSON-schema workflow engine.",
      "Built a WebSockets + REST stack for multimedia processing.",
    ],
  },
  {
    org: "Linux Users Group (LUGVITC)",
    role: "Former Chairperson",
    period: "Sept 2023 – Apr 2026",
    details: [
      "Member since Sept 2023; Chairperson Apr 2025 – Apr 2026.",
      "Led technical events and Cyber-0-Day CTFs.",
      "Ran custom Linux VMs for 500+ participants.",
    ],
  },
] as const;

export const projects = [
  {
    name: "scooby",
    desc: "My home server infrastructure defined in code (Docker, Prometheus, Grafana, Cloudflare Tunnels).",
    href: "https://github.com/iamdmix/scooby",
  },
  {
    name: "dotfiles",
    desc: "Dotfiles and keyboard-first setup for macOS.",
    href: "https://github.com/iamdmix/dotfiles",
  },
] as const;

export const credential = {
  title: "AWS Certified Cloud Practitioner",
  issuer: "Amazon Web Services",
  level: "Foundational",
  badge: "/aws-ccp.png",
} as const;

export const socials = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Blog", href: person.blog },
  { label: "Email", href: `mailto:${person.email}` },
] as const;

export const elsewhereSocials = [
  { label: "Twitter/X", href: links.x },
  { label: "Instagram", href: links.instagram },
  { label: "LeetCode", href: links.leetcode },
  { label: "Strava", href: links.strava },
  { label: "Apple Music", href: links.appleMusic },
  { label: "Spotify", href: links.spotify },
  { label: "SoundCloud", href: links.soundcloud },
] as const;

