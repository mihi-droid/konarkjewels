"use client";

import { useEffect, useState } from "react";

const messages = [
  "Complimentary shipping on all orders above ₹5,000",
  "Lifetime exchange on select heritage pieces",
  "Certified diamonds, hallmarked gold — always",
];

// Rotating announcement strip. Purely presentational — swap `messages`
// for CMS-driven copy (offers, festival sales) without touching layout.
export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-ink text-ivory text-center py-2.5 text-body-sm tracking-wide" aria-live="polite">
      <span key={index} className="animate-[fadeIn_0.4s_ease]">
        {messages[index]}
      </span>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
