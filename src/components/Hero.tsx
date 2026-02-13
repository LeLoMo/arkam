"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
    const { t } = useI18n();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-royal/10 to-neon/10 animate-drift" />
                <div
                    className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-neon-light/10 to-royal/5 animate-drift"
                    style={{ animationDelay: "5s" }}
                />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-b from-royal/5 to-transparent animate-pulse-glow" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(26,82,118,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,82,118,1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">


                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
                >
                    <span className="text-foreground">{t.hero.headline1}</span>
                    <br />
                    <span className="bg-gradient-to-r from-royal via-royal-light to-neon bg-clip-text text-transparent">
                        {t.hero.headline2}
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-slate-500 leading-relaxed"
                >
                    {t.hero.sub}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#services"
                        className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-royal rounded-2xl hover:bg-royal-light transition-all duration-300 glow-box hover:glow-box-hover"
                    >
                        {t.hero.cta1}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-royal bg-royal/5 border border-royal/15 rounded-2xl hover:bg-royal/10 transition-all duration-300"
                    >
                        {t.hero.cta2}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
