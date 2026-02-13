"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cloud, Cpu, Database, Activity } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { MouseEvent } from "react";

const icons = [Cloud, Cpu, Activity, Database];

function ServiceCard({
    title,
    description,
    tags,
    icon: Icon,
    index,
}: {
    title: string;
    description: string;
    tags: string[];
    icon: typeof Cloud;
    index: number;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 200, damping: 20 };
    const rotateX = useSpring(useTransform(y, [-100, 100], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(x, [-100, 100], [-8, 8]), springConfig);

    function handleMouse(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 800,
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 cursor-default transition-shadow duration-500 hover:glow-box-hover glow-box"
        >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-royal/5 via-transparent to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal to-royal-light flex items-center justify-center mb-6 group-hover:glow-neon transition-shadow duration-500">
                    <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-[var(--font-heading)] text-xl font-bold text-foreground mb-3">
                    {title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-royal bg-royal/5 rounded-full border border-royal/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    const { t } = useI18n();

    return (
        <section id="services" className="py-24 sm:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold text-royal uppercase tracking-widest bg-royal/5 rounded-full border border-royal/10 mb-4">
                        {t.services.badge}
                    </span>
                    <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                        {t.services.title}
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">
                        {t.services.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {t.services.items.map((item, i) => (
                        <ServiceCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            tags={item.tags}
                            icon={icons[i]}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
