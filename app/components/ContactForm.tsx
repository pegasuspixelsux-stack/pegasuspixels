"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@pegasuspixels.com";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-[#6B7280] outline-none transition-colors focus:border-[#2563EB]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Consulta de ${name || "un visitante del sitio"}`;
    const bodyLines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      "",
      message,
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-[18px] border border-white/10 bg-white/[0.04] p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-white">
          Teléfono <span className="font-normal text-[#6B7280]">(opcional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+598 ..."
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
          Mensaje
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Contanos qué necesitás..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-block cursor-pointer rounded-lg bg-[#2563EB] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
