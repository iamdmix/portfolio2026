import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
        HTTP / 404
      </p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
        Nothing here.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist — or moved without
        telling anyone. Head back home.
      </p>
      <Link
        href="/"
        className="mt-8 font-mono text-[13px] text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-[#7aa2f7] hover:decoration-[#7aa2f7]"
      >
        Back home
      </Link>
    </main>
  );
}
