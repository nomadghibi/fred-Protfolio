import Form from "@/components/contact/Form";
import { profileData } from "../../data";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <section className="sub-hero">
        <p className="eyebrow">Let&apos;s build something useful</p>
        <h1 style={{
          margin: 0,
          color: "white",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          letterSpacing: "-0.055em",
          fontWeight: 620,
          lineHeight: 0.97,
        }}>
          Have a workflow AI<br />should make better?
        </h1>
        <p style={{ marginTop: "18px", color: "#94a3b8", fontSize: ".95rem", maxWidth: "52ch", lineHeight: 1.7 }}>
          Connect with {profileData.name} about AI strategy, SaaS development,
          private AI, workflow automation, or a practical business software project.
        </p>
      </section>

      <div className="sub-content">
        <Form />
      </div>
    </>
  );
}
