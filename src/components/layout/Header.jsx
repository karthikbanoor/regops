"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    {
      name: "Medical Devices",
      href: "#",
      dropdown: [
        { name: "Gap Analysis & Transition Planning", href: "/medical-devices/gap-analysis-transition-planning" },
        { name: "510(k) Premarket Notifications", href: "/medical-devices/510(k)-premarket-notifications" },
        "Device Description & Specification",
        "Pre-Submission Meeting Support",
        "PMCF Plan Development",
        "Change Impact Assessment",
        "PMS System Design",
        "Market Assessment & Prioritization"
      ]
    },
    {
      name: "Pharmaceuticals",
      href: "/pharma",
      dropdown: ["Regulatory Affairs", "Pharmacovigilance", "CMC", "Market Access"]
    },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          RegOps<span className={styles.logoDot}>Global</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <div key={item.name} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                {item.name}
                {item.dropdown && <ChevronDown size={14} className={styles.chevron} />}
              </Link>
              
              {item.dropdown && (
                <div className={cn(styles.dropdown, item.dropdown.length > 6 && styles.dropdownWide)}>
                  {item.dropdown.map((subItem) => {
                    const label = typeof subItem === 'string' ? subItem : subItem.name;
                    const href = typeof subItem === 'string' ? '#' : subItem.href;
                    return (
                      <Link key={label} href={href} className={styles.dropdownItem}>
                         {label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
           <Button size="medium" className={styles.getStartedBtn}>
               Get in Touch
           </Button>
           <button 
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuInner}>
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href} 
                    className={styles.mobileLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className={styles.mobileDropdown}>
                      {item.dropdown.map((subItem) => {
                        const label = typeof subItem === 'string' ? subItem : subItem.name;
                         const href = typeof subItem === 'string' ? '#' : subItem.href;
                         return (
                          <Link 
                              key={label} 
                              href={href} 
                              className={styles.mobileDropdownItem}
                              onClick={() => setIsOpen(false)}
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className={styles.mobileAction}>
                <Button className={styles.fullWidth}>Get in Touch</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
