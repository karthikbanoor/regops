import styles from "./page.module.css";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <CTA />
    </main>
  );
}
