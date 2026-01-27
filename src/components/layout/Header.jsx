"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import styles from "./Header.module.css";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Medical Devices",
      href: "/medical-devices",
      dropdown: [
        { name: "Gap Analysis & Transition Planning", href: "/medical-devices/gap-analysis-transition-planning" },
        { name: "510(k) Premarket Notifications", href: "/medical-devices/510(k)-premarket-notifications" },
        { name: "Device Description & Specification", href: "/medical-devices/device-description-specification" },
        { name: "Pre-Submission Meeting Support", href: "/medical-devices/pre-submission-meeting-support" },
        { name: "PMCF Plan Development", href: "/medical-devices/pmcf-plan-development" },
        { name: "Change Impact Assessment", href: "/medical-devices/change-impact-assessment" },
        { name: "PMS System Design", href: "/medical-devices/pms-system-design" },
        { name: "Market Assessment & Prioritization", href: "/medical-devices/market-assessment-prioritization" }
      ]
    },
    {
      name: "Pharmaceuticals",
      href: "/pharmaceuticals",
      dropdown: [
        { name: "CMC Technical Writing", href: "/pharmaceuticals/cmc-technical-writing" },
        { name: "Dossier Authoring Services", href: "/pharmaceuticals/dossier-authoring-services" },
        { name: "eCTD Submission Services", href: "/pharmaceuticals/ectd-submission-services" },
        { name: "Gap Analysis & Compliance", href: "/pharmaceuticals/gap-analysis-compliance" },
        { name: "GxP Audit Services", href: "/pharmaceuticals/gxp-audit-services" },
        { name: "Labeling & Artwork Services", href: "/pharmaceuticals/labeling-artwork-services" },
        { name: "Lifecycle Management Services", href: "/pharmaceuticals/lifecycle-management-services" },
        { name: "Market Access & Expansion", href: "/pharmaceuticals/market-access-expansion" },
        { name: "Medical Writing Services", href: "/pharmaceuticals/medical-writing-services" },
        { name: "Pharmacovigilance Services", href: "/pharmaceuticals/pharmacovigilance-services" },
        { name: "RA Consulting & Strategy", href: "/pharmaceuticals/ra-consulting-strategy" },
        { name: "Regulatory Intelligence Services", href: "/pharmaceuticals/regulatory-intelligence-services" }
      ]
    },
    { name: "Consumer", href: "/consumer" },
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
           <Link href="/contact">
             <Button size="medium" className={styles.getStartedBtn}>
                 Get in Touch
             </Button>
           </Link>
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
                <div key={item.name} className={styles.mobileItemContainer}>
                  {/* If item has dropdown, clicking header toggles it. If not, it's a link */}
                  {item.dropdown ? (
                      <div 
                        className={styles.mobileItemHeader}
                        onClick={() => setExpandedMobile(prev => ({...prev, [item.name]: !prev[item.name]}))}
                      >
                        <span className={styles.mobileLink}>{item.name}</span>
                        <ChevronDown 
                            size={20} 
                            className={cn(styles.chevron, expandedMobile[item.name] && styles.rotate180)}
                        />
                      </div>
                  ) : (
                      <Link 
                        href={item.href} 
                        className={styles.mobileLink} // Apply same class for padding
                        onClick={() => setIsOpen(false)}
                        style={{ display: 'block' }} // Ensure it behaves like the header
                      >
                        {item.name}
                      </Link>
                  )}
                  
                  <AnimatePresence>
                    {item.dropdown && expandedMobile[item.name] && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={styles.mobileDropdown}
                        >
                            {/* Add "All [Category]" Link */}
                            {item.href && item.href !== '#' && (
                                <Link 
                                    href={item.href} 
                                    className={cn(styles.mobileDropdownItem, pathname === item.href && styles.activeMobileItem)}
                                    onClick={() => setIsOpen(false)}
                                >
                                    All {item.name}
                                </Link>
                            )}

                            {item.dropdown.map((subItem) => {
                                const label = typeof subItem === 'string' ? subItem : subItem.name;
                                const href = typeof subItem === 'string' ? '#' : subItem.href;
                                const isActive = pathname === href;
                                return (
                                <Link 
                                    key={label} 
                                    href={href} 
                                    className={cn(styles.mobileDropdownItem, isActive && styles.activeMobileItem)}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </Link>
                                );
                            })}
                        </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className={styles.mobileAction}>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className={styles.fullWidth}>Get in Touch</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
