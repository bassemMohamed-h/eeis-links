import styles from "./SocialLinks.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSnapchat,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";

export default function SocialLinks() {
  const links = [
    { name: "LinkedIn", 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/company/egyptian-engineering-for-integrated-system/" },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/61563478710140/",
    },
    { name: "Instagram", 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/eeis.2026?igsh=MXJscWZkZzEyYzUwOA==" },
    { name: "Contact Email", 
      icon: <FaEnvelope />, 
      url: "mailto:projects@ee-is.com" },
    { name: "01018425509", icon: <FaPhone />, url: "tel:+01018425509" },
    { name: "01225488825", icon: <FaPhone />, url: "tel:+01225488825" },
  ];
  return (
    <main className={styles.page}>
      <div className={styles.bg}></div>
      <div className={styles.noise}></div>

      <div className={styles.container}>
        <div className={styles.header}>
         <Image
            src="/eeis-logo.png"
            alt="EEIS Logo"
            width={600}
            height={200}
            priority
            className={styles.logo}
          />

          <h1 className={styles.title}>EEIS</h1>

        </div>

        <div className={styles.divider}></div>

        <div className={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.linkItem}
              style={{ animationDelay: `${index * 0.06}s` }}
              target="_blank"
            >
              <span className={styles.icon}>{link.icon}</span>
              <span>{link.name}</span>
              <span className={styles.arrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
