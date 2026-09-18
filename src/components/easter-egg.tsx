"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MESSAGES = [
  "do not press",
  "you were warned",
  "press again, coward",
  "good boy",
];

const COLORS = ["#7aa2f7", "#f9923a", "#9ece6a", "#bb9af7", "#fafafa"];

function spawnConfetti() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const corners = [
    { x: 12, delay: 0 },
    { x: w - 12, delay: 160 },
  ];

  for (const corner of corners) {
    for (let i = 0; i < 96; i++) {
      const piece = document.createElement("span");
      const size = 5 + Math.random() * 7;
      piece.style.cssText = `position:fixed;left:${corner.x}px;top:${h - 12}px;width:${size}px;height:${Math.round(size * 0.55)}px;background:${COLORS[i % COLORS.length]};border-radius:1px;pointer-events:none;z-index:60;`;
      document.body.appendChild(piece);

      const dir = corner.x < w / 2 ? 1 : -1;

      // Fan: 88deg = near-vertical (reaches own top corner),
      // 42deg = shallow (sweeps past the middle of the page).
      const thetaDeg = 42 + Math.random() * 46;

      // Gentler gravity = longer, clearly visible float back down.
      const g = h * (1.2 + Math.random() * 0.6);
      const vy0 = Math.sqrt(2 * g * h * (0.7 + Math.random() * 0.4));
      const k = 1.1 + Math.random() * 0.7; // horizontal drag
      const tApex = vy0 / g;
      const tFall = Math.sqrt(
        (2 * h * (0.55 + Math.random() * 0.5)) / g,
      );
      const T = tApex + tFall;

      const fan = (88 - thetaDeg) / 46; // 0 = vertical, 1 = toward middle
      const drift = w * (0.06 + fan * (0.5 + Math.random() * 0.25)) * dir;
      const vx0 = (drift * k) / (1 - Math.exp(-k * T));
      const spin = (180 + Math.random() * 420) * (Math.random() < 0.5 ? -1 : 1);

      const STEPS = 12;
      const frames = [];
      for (let s = 0; s <= STEPS; s++) {
        const t = (T * s) / STEPS;
        // Screen coords: negative y = up. Flip the physics y (which is
        // positive during ascent) so pieces actually fly up, not down.
        const y = -(vy0 * t - 0.5 * g * t * t);
        const x = (vx0 * (1 - Math.exp(-k * t))) / k;
        const prog = s / STEPS;
        const opacity = prog > 0.85 ? Math.max(0, 1 - (prog - 0.85) / 0.15) : 1;
        frames.push({
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${spin * t}deg)`,
          opacity,
        });
      }

      piece
        .animate(frames, {
          delay: corner.delay + Math.random() * 240,
          duration: T * 1000,
          fill: "both",
        })
        .addEventListener("finish", () => piece.remove());
    }
  }
}

export function EasterEgg() {
  const [step, setStep] = useState(0);
  const [flashing, setFlashing] = useState(false);
  const flashTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(flashTimer.current), []);

  const detonate = useCallback(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spawnConfetti();
      setFlashing(true);
      window.clearTimeout(flashTimer.current);
      flashTimer.current = window.setTimeout(() => setFlashing(false), 450);
    }
    setStep((s) => (s + 1) % MESSAGES.length);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={detonate}
        aria-live="polite"
        className="cursor-pointer text-left font-mono text-xs text-zinc-600 transition-colors hover:text-[#7aa2f7]"
      >
        <span aria-hidden="true" className="text-[#7aa2f7]">
          {"//"}
        </span>{" "}
        {MESSAGES[step]}
      </button>
      {flashing &&
        createPortal(
          <div
            aria-hidden="true"
            className="flashbang pointer-events-none fixed inset-0 z-[70] bg-white"
          />,
          document.body,
        )}
    </>
  );
}
