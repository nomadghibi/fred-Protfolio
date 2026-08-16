"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { profileData } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export default function Form() {
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
        toast.success("Your message was sent successfully.", { id: toastId });
        reset();
      } catch {
        toast.error("The message could not be sent. Please use GitHub instead.", {
          id: toastId,
        });
      }
      return;
    }

    if (contactEmail) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${params.from_name}`);
      const body = encodeURIComponent(
        `${params.message}\n\nFrom: ${params.from_name}\nReply to: ${params.reply_to}`
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    toast.info(
      "Contact form setup is optional. Add EmailJS values or NEXT_PUBLIC_CONTACT_EMAIL in .env.local."
    );
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
      <Toaster richColors />

      <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-2">
        <Link
          href={profileData.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="custom-bg flex items-center justify-between rounded-lg p-4 hover:text-accent"
        >
          <span className="flex items-center gap-3">
            <Github className="h-5 w-5" strokeWidth={1.5} />
            GitHub / {profileData.githubUsername}
          </span>
          <ExternalLink className="h-4 w-4" />
        </Link>
        <Link
          href={profileData.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="custom-bg flex items-center justify-between rounded-lg p-4 hover:text-accent"
        >
          <span>{profileData.websiteLabel}</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required.",
            minLength: {
              value: 2,
              message: "Name should be at least 2 characters.",
            },
          })}
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent text-sm">
            {errors.name.message}
          </span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required." })}
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent text-sm">
            {errors.email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          rows={6}
          placeholder="Tell me about your project"
          {...register("message", {
            required: "Message is required.",
            maxLength: {
              value: 1000,
              message: "Message should be under 1,000 characters.",
            },
            minLength: {
              value: 20,
              message: "Please provide at least 20 characters.",
            },
          })}
          className="w-full p-3 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg resize-y"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent text-sm">
            {errors.message.message}
          </span>
        )}

        <motion.button
          variants={item}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer"
          type="submit"
        >
          Send project inquiry
        </motion.button>
      </motion.form>
    </>
  );
}
