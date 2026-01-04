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
      href: "/medical-devices",
      dropdown: ["Strategy", "Submissions", "Quality", "Clinical"]
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
                <div className={styles.dropdown}>
                  {item.dropdown.map((subItem) => (
                    <Link key={subItem} href="#" className={styles.dropdownItem}>
                      {subItem}
                    </Link>
                  ))}
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
                      {item.dropdown.map((subItem) => (
                        <Link 
                            key={subItem} 
                            href="#" 
                            className={styles.mobileDropdownItem}
                            onClick={() => setIsOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
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
