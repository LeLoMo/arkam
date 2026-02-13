"use client";

import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
    const { t } = useI18n();

    return (
        <section id="contact" className="py-24 sm:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold text-royal uppercase tracking-widest bg-royal/5 rounded-full border border-royal/10 mb-4">
                        {t.contact.badge}
                    </span>
                    <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
                        {t.contact.title}
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg">
                        {t.contact.subtitle}
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 glow-box"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                {t.contact.name}
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={t.contact.namePlaceholder}
                                    className="w-full pl-11 pr-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-300 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                {t.contact.email}
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={t.contact.emailPlaceholder}
                                    className="w-full pl-11 pr-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-300 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                {t.contact.message}
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder={t.contact.messagePlaceholder}
                                    className="w-full pl-11 pr-4 py-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all duration-300 placeholder:text-slate-400 resize-none"
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-royal rounded-xl hover:bg-royal-light transition-all duration-300 glow-box hover:glow-box-hover"
                        >
                            <Send className="w-4 h-4" />
                            {t.contact.submit}
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
