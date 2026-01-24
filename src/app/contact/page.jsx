"use client";

import styles from "./contact.module.css";
import { Mail, MapPin, Phone } from "lucide-react";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("contact");
}

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Left Column: Info */}
        <div className={styles.infoColumn}>
          <h1 className={styles.title}>Ready to Accelerate Your Regulatory Journey?</h1>
          <p className={styles.subtitle}>
            Connect with our experts to discuss your specific challenges. We provide tailored support for Medical Devices, Pharmaceuticals, and Consumer products.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.detailContent}>
                <h3>Email Us</h3>
                <p>info@regops.global</p>
                <p>support@regops.global</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.detailContent}>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.detailContent}>
                <h3>Global Headquarters</h3>
                <p>123 Regulatory Way, Suite 400</p>
                <p>Boston, MA 02110, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Zoho Form Iframe */}
        <div className={styles.formCard} style={{ padding: 0, overflow: 'hidden' }}>
          <iframe 
            src="https://forms.zohopublic.in/reg600612876231/form/ContactUs/formperma/TxJAPb_2vI0aJcePWFRUnhdwq-CfmIS2FRxsX7X4brc"
            style={{
              width: '100%',
              height: '850px', // Fixed height that fits nicely on screen
              border: 'none',
              borderRadius: '24px'
            }}
            title="Contact Us Form"
            // Scrolling enabled by default
          ></iframe>
        </div>
      </div>
    </main>
  );
}
