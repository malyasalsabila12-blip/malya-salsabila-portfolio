"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/profile";

export function ContactFormClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name || "Hiring Team"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard fallback ignored
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8 space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name or team"
          className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the QA role, product stack, and quality challenges..."
          className="mt-1.5 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 text-sm text-black focus:border-black focus:bg-white focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-900"
        >
          Compose email →
        </button>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-700 transition hover:border-zinc-300 hover:text-black"
        >
          {copied ? "Copied email ✓" : `Copy ${profile.email}`}
        </button>
      </div>
    </form>
  );
}
