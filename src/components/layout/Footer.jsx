"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              RegOps<span className={styles.logoDot}>.</span>Global
            </Link>
            <p className={styles.tagline}>
              Your Strategic Partner in Regulatory Success. Navigating complexity with confidence and precision.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
              <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><Link href="/medical-devices">Medical Devices</Link></li>
              <li><Link href="/pharmaceuticals">Pharmaceuticals</Link></li>
              <li><Link href="/regulatory-strategy">Regulatory Strategy</Link></li>
              <li><Link href="/quality-compliance">Quality & Compliance</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/news">News & Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>123 Regulatory Way, Innovation City, Global</span>
              </li>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <span>info@regops.global</span>
              </li>
            </ul>
            <div className={styles.cta}>
                <Button variant="primary" className={styles.footerBtn}>Get in Touch</Button>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {new Date().getFullYear()} RegOps Global. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
