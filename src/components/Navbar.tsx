"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

function FrFlag({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
            <rect width="213.3" height="480" fill="#002395" />
            <rect x="213.3" width="213.4" height="480" fill="#fff" />
            <rect x="426.7" width="213.3" height="480" fill="#ED2939" />
        </svg>
    );
}

function GbFlag({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
            <path fill="#012169" d="M0 0h640v480H0z" />
            <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
            <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" />
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { locale, setLocale, t } = useI18n();

    const navLinks = [
        { label: t.nav.home, href: "#home" },
        { label: t.nav.services, href: "#services" },
        { label: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLocale = () => setLocale(locale === "en" ? "fr" : "en");

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass-strong shadow-lg shadow-royal/5 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center group">
                    <img
                        src="/logo.png"
                        alt="AR-KAM Logo"
                        className="w-20 h-20 md:w-28 md:h-28 object-contain"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-royal transition-colors duration-300 rounded-lg hover:bg-royal/5 group"
                        >
                            {link.label}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-royal rounded-full transition-all duration-300 group-hover:w-6" />
                        </a>
                    ))}

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLocale}
                        className="ml-2 px-3 py-2 rounded-lg hover:bg-royal/5 transition-colors duration-300 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-royal"
                        aria-label={locale === "en" ? "Switch to French" : "Passer en anglais"}
                        title={locale === "en" ? "Passer en français" : "Switch to English"}
                    >
                        {locale === "en" ? <FrFlag className="w-6 h-4 rounded-sm" /> : <GbFlag className="w-6 h-4 rounded-sm" />}
                        <span className="hidden lg:inline">{locale === "en" ? "FR" : "EN"}</span>
                    </button>

                    <a
                        href="#contact"
                        className="ml-2 px-6 py-2.5 text-sm font-semibold text-white bg-royal rounded-xl hover:bg-royal-light transition-all duration-300 glow-box hover:glow-box-hover"
                    >
                        {t.nav.cta}
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    {/* Language Toggle (mobile) */}
                    <button
                        onClick={toggleLocale}
                        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label={locale === "en" ? "Switch to French" : "Passer en anglais"}
                    >
                        {locale === "en" ? <FrFlag className="w-6 h-4 rounded-sm" /> : <GbFlag className="w-6 h-4 rounded-sm" />}
                    </button>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6 text-royal" />
                        ) : (
                            <Menu className="w-6 h-6 text-royal" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden"
                    >
                        <div className="p-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-royal hover:bg-royal/5 rounded-xl transition-all duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-royal rounded-xl text-center hover:bg-royal-light transition-all duration-300"
                            >
                                {t.nav.cta}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
