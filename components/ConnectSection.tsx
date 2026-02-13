"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  LuLinkedin,
  LuLoader,
  LuMail,
  LuMessageCircle,
  LuMessageSquare,
  LuUser,
} from "react-icons/lu";

export function ConnectSection() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setLoading] = useState(false);

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();

    setLoading(true);

    emailjs.init({
      publicKey: "B5g9tR98IMVvknq-B",
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: [],
        // The variable contains the email address
        watchVariable: "userEmail",
      },
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });

    if (!form.current) return;

    emailjs
      .sendForm("service_y4fhs3g", "template_q8m1gse", form.current, {
        publicKey: "B5g9tR98IMVvknq-B",
      })
      .then(
        () => {
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);

          setLoading(false);
        },
      );
  }

  return (
    <section id="connect" className="max-w-5xl mx-auto">
      <div className="mt-24 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 fade-in-up">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
          <LuMessageCircle className="size-4" />
          Let&apos;s build something together
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Open to data analysis and analytics roles.
        </h2>
        <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
          Whether you need dashboards, data insights, or analytics support,
          I&apos;d love to hear about your projects and how we can work
          together.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label
              htmlFor="contact-name"
              className="mb-1 flex items-center gap-1.5 text-xs font-medium text-neutral-300"
            >
              <LuUser className="size-3.5" />
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 transition focus:border-white/40 focus:bg-black/60"
            />
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="contact-email"
              className="mb-1 flex items-center gap-1.5 text-xs font-medium text-neutral-300"
            >
              <LuMail className="size-3.5" />
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 transition focus:border-white/40 focus:bg-black/60"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="contact-message"
              className="mb-1 flex items-center gap-1.5 text-xs font-medium text-neutral-300"
            >
              <LuMessageSquare className="size-3.5" />
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Tell me a bit about your project or idea..."
              className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 transition focus:border-white/40 focus:bg-black/60"
            />
          </div>
          <div className="flex flex-col items-start gap-4 pt-2 sm:col-span-2">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-1 rounded-full hover:bg-gray-800 hover:text-emerald-300 
            bg-neutral-50 px-5 py-2.5 text-sm font-medium text-black transition"
            >
              {sending ? (
                <>
                  <LuLoader className="size-5 animate-spin" />
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <LuMail className="size-5" />
                  <span>Send email</span>
                </>
              )}
            </button>

            <div className="flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-white/15" />
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Or
              </span>
              <span className="h-px flex-1 bg-white/15" />
            </div>

            <a
              href="https://www.linkedin.com/in/mo-alaa14"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-white hover:text-white"
            >
              <LuLinkedin className="size-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
