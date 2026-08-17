"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { profileData } from "@/app/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, transform: "translateY(14px)" },
  show: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] } },
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(15,23,42,.7)",
  border: "1px solid rgba(148,163,184,.18)",
  color: "#e2e8f0",
  fontSize: ".9rem",
  outline: "none",
  fontFamily: "inherit",
  transition: "border-color .15s ease",
};

const errorStyle = {
  display: "inline-block",
  alignSelf: "flex-start",
  color: "#22d3ee",
  fontSize: ".8rem",
  marginTop: "4px",
};

export default function Form() {
  const reduce = useReducedMotion();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (params) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (serviceId && templateId && publicKey) {
      const toastId = toast.loading("Sending your message...");
      try {
        await emailjs.send(serviceId, templateId, params, {
          publicKey,
          limitRate: { throttle: 5000 },
        });
        toast.success("Message sent.", { id: toastId });
        reset();
      } catch {
        toast.error("Could not send. Use GitHub instead.", { id: toastId });
      }
      return;
    }

    if (contactEmail) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${params.from_name}`);
      const body = encodeURIComponent(
        `${params.message}\n\nFrom: ${params.from_name}\nReply to: ${params.reply_to}`
      );
      window.location.assign(
        `mailto:${contactEmail}?subject=${subject}&body=${body}`
      );
      return;
    }

    toast.info("Add NEXT_PUBLIC_CONTACT_EMAIL or EmailJS env vars to enable sending.");
  };

  const onSubmit = (data) => {
    sendEmail({
      to_name: profileData.name,
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    });
  };

  return (
    <>
      <Toaster richColors position="top-right" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", maxWidth: "640px", marginBottom: "32px" }}>
        <Link
          href={profileData.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", color: "#e2e8f0", textDecoration: "none" }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: ".85rem" }}>
            <Github size={16} strokeWidth={1.5} />
            {profileData.githubUsername}
          </span>
          <ExternalLink size={14} style={{ color: "#64748b" }} />
        </Link>
        <Link
          href={profileData.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", color: "#e2e8f0", textDecoration: "none" }}
        >
          <span style={{ fontSize: ".85rem" }}>{profileData.websiteLabel}</span>
          <ExternalLink size={14} style={{ color: "#64748b" }} />
        </Link>
      </div>

      <motion.form
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "640px", width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <motion.div variants={item} style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="contact-name" className="sr-only">Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required.",
              minLength: { value: 2, message: "At least 2 characters." },
            })}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,238,.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(148,163,184,.18)"}
          />
          {errors.name && <span id="contact-name-error" style={errorStyle}>{errors.name.message}</span>}
        </motion.div>

        <motion.div variants={item} style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="contact-email" className="sr-only">Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address." },
            })}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,238,.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(148,163,184,.18)"}
          />
          {errors.email && <span id="contact-email-error" style={errorStyle}>{errors.email.message}</span>}
        </motion.div>

        <motion.div variants={item} style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="contact-message" className="sr-only">Project details</label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder="Tell me about your project"
            {...register("message", {
              required: "Message is required.",
              maxLength: { value: 1000, message: "Under 1,000 characters." },
              minLength: { value: 20, message: "At least 20 characters." },
            })}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={e => e.target.style.borderColor = "rgba(34,211,238,.5)"}
            onBlur={e => e.target.style.borderColor = "rgba(148,163,184,.18)"}
          />
          {errors.message && <span id="contact-message-error" style={errorStyle}>{errors.message.message}</span>}
        </motion.div>

        <motion.div variants={item}>
          <button type="submit" className="button button-primary" style={{ marginTop: "8px" }}>
            Send project inquiry
          </button>
        </motion.div>
      </motion.form>
    </>
  );
}
