"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "en" | "fr";

interface Translations {
    nav: {
        home: string;
        services: string;
        contact: string;
        cta: string;
    };
    hero: {
        badge: string;
        headline1: string;
        headline2: string;
        sub: string;
        cta1: string;
        cta2: string;
    };
    services: {
        badge: string;
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
            tags: string[];
        }[];
    };
    contact: {
        badge: string;
        title: string;
        subtitle: string;
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
    };
    footer: {
        rights: string;
    };
}

const translations: Record<Locale, Translations> = {
    en: {
        nav: {
            home: "Home",
            services: "Services",
            contact: "Contact",
            cta: "Get in Touch",
        },
        hero: {
            badge: "Cloud & Data Consulting",
            headline1: "AR-KAM: Elevating ",
            headline2: "Data to New Heights.",
            sub: "Specialized Cloud & DevOps consultancy focused on the industrialization and intelligent automation of enterprise processes.",
            cta1: "Explore Services",
            cta2: "Contact Us",
        },
        services: {
            badge: "Our Expertise",
            title: "Core Pillars",
            subtitle:
                "End-to-end consulting services engineered for the modern enterprise.",
            items: [
                {
                    title: "Cloud Architecture",
                    description:
                        "Design and transformation using Microsoft Azure (Certified) and Oracle Cloud Infrastructure (OCI). Enterprise-grade cloud strategies tailored to your business.",
                    tags: ["Azure", "OCI", "Migration", "Strategy"],
                },
                {
                    title: "DevOps Industrialization",
                    description:
                        "Implementing high-velocity CI/CD Pipelines with Jenkins, Azure DevOps, and GitHub Actions. Infrastructure as Code powered by Terraform.",
                    tags: ["CI/CD", "Terraform", "Jenkins", "GitHub Actions"],
                },
                {
                    title: "Cloud-Native Apps",
                    description:
                        "Modernizing applications via Kubernetes, Docker, and .NET/Node.js containerization. Building resilient, scalable microservice architectures.",
                    tags: ["Kubernetes", "Docker", ".NET", "Node.js"],
                },
                {
                    title: "Data Intelligence",
                    description:
                        "Building ETL/ELT pipelines and advanced analytics using Azure Synapse. Turning raw data into actionable enterprise intelligence.",
                    tags: ["Azure Synapse", "ETL/ELT", "Analytics", "BI"],
                },
            ],
        },
        contact: {
            badge: "Contact",
            title: "Let's Work Together",
            subtitle:
                "Ready to elevate your cloud infrastructure? Get in touch with us.",
            name: "Full Name",
            namePlaceholder: "John Doe",
            email: "Email Address",
            emailPlaceholder: "john@company.com",
            message: "Message",
            messagePlaceholder: "Tell us about your project...",
            submit: "Send Message",
        },
        footer: {
            rights: "All rights reserved.",
        },
    },
    fr: {
        nav: {
            home: "Accueil",
            services: "Services",
            contact: "Contact",
            cta: "Nous Contacter",
        },
        hero: {
            badge: "Conseil Cloud & Data",
            headline1: "AR-KAM : Propulsez",
            headline2: "vos données au sommet",
            sub: "Cabinet de conseil spécialisé en Cloud & DevOps, axé sur l'industrialisation et l'automatisation intelligente des processus d'entreprise.",
            cta1: "Découvrir nos Services",
            cta2: "Nous Contacter",
        },
        services: {
            badge: "Notre Expertise",
            title: "Piliers Fondamentaux",
            subtitle:
                "Services de conseil de bout en bout, conçus pour l'entreprise moderne.",
            items: [
                {
                    title: "Architecture Cloud",
                    description:
                        "Conception et transformation avec Microsoft Azure (Certifié) et Oracle Cloud Infrastructure (OCI). Stratégies cloud de niveau entreprise adaptées à votre activité.",
                    tags: ["Azure", "OCI", "Migration", "Stratégie"],
                },
                {
                    title: "Industrialisation DevOps",
                    description:
                        "Mise en œuvre de pipelines CI/CD haute vélocité avec Jenkins, Azure DevOps et GitHub Actions. Infrastructure as Code propulsée par Terraform.",
                    tags: ["CI/CD", "Terraform", "Jenkins", "GitHub Actions"],
                },
                {
                    title: "Applications Cloud-Native",
                    description:
                        "Modernisation des applications via Kubernetes, Docker et la conteneurisation .NET/Node.js. Construction d'architectures microservices résilientes et évolutives.",
                    tags: ["Kubernetes", "Docker", ".NET", "Node.js"],
                },
                {
                    title: "Intelligence Data",
                    description:
                        "Construction de pipelines ETL/ELT et analyses avancées avec Azure Synapse. Transformation des données brutes en intelligence actionnable.",
                    tags: ["Azure Synapse", "ETL/ELT", "Analytique", "BI"],
                },
            ],
        },
        contact: {
            badge: "Contact",
            title: "Travaillons Ensemble",
            subtitle:
                "Prêt à élever votre infrastructure cloud ? Contactez-nous.",
            name: "Nom Complet",
            namePlaceholder: "Jean Dupont",
            email: "Adresse Email",
            emailPlaceholder: "jean@entreprise.com",
            message: "Message",
            messagePlaceholder: "Parlez-nous de votre projet...",
            submit: "Envoyer le Message",
        },
        footer: {
            rights: "Tous droits réservés.",
        },
    },
};

interface I18nContextType {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: Translations;
}

const I18nContext = createContext<I18nContextType>({
    locale: "en",
    setLocale: () => { },
    t: translations.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("en");

    return (
        <I18nContext.Provider
            value={{ locale, setLocale, t: translations[locale] }}
        >
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    return useContext(I18nContext);
}
