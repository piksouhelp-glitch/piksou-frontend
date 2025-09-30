"use client"

import { useState } from "react"
import Link from "next/link"
import {
    ArrowLeft,
    FileText,
    Shield,
    Eye,
    Database,
    Users,
    AlertTriangle,
    Gavel,
    Mail,
    Download,
    PrinterIcon as Print,
} from "lucide-react"

// CONTENU ÉDITABLE (FR)
const LEGAL_CONTENT_FR = {
    header: {
        title: "POLITIQUE DE CONFIDENTIALITÉ & CONDITIONS D’UTILISATION",
        subtitle: "Application Mobile PiKSou",
        lastUpdated: "28 décembre 2024",
        effectiveDate: "1 janvier 2025",
        version: "1.0",
    },
    company: {
        name: "[Nom de votre société]",
        address: "[Adresse complète], Maurice",
        registrationNumber: "[Numéro d’enregistrement]",
        phone: "+230 [Votre numéro]",
        emails: {
            general: "hello@piksou.mu",
            privacy: "privacy@piksou.mu",
            legal: "legal@piksou.mu",
        },
    },
    navigation: [
        { id: "privacy-policy", title: "Politique de Confidentialité", icon: Shield },
        { id: "terms-of-service", title: "Conditions d’Utilisation", icon: FileText },
        { id: "data-collection", title: "Collecte et Sécurité des Données", icon: Database },
        { id: "user-rights", title: "Droits des Utilisateurs", icon: Eye },
        { id: "user-responsibilities", title: "Responsabilités Utilisateurs", icon: Users },
        { id: "disclaimers", title: "Avertissements et Limites", icon: AlertTriangle },
        { id: "legal-compliance", title: "Conformité Légale", icon: Gavel },
        { id: "contact", title: "Contact", icon: Mail },
    ],
    sections: {
        introduction: {
            title: "INTRODUCTION",
            content: [
                "Bienvenue sur PiKSou — une application mobile qui aide les personnes à Maurice à comparer les prix et offres d’épicerie entre différents supermarchés. Ce document présente notre Politique de Confidentialité et nos Conditions d’Utilisation.",
                "En utilisant PiKSou, vous acceptez nos politiques. Si vous n’êtes pas d’accord, veuillez ne pas utiliser l’application.",
                "PiKSou est opéré par [Nom de la société], basé à Maurice à l’adresse [Adresse]. Nous respectons votre vie privée et restons transparents sur l’utilisation de vos informations.",
            ],
        },
        privacyPolicy: {
            title: "POLITIQUE DE CONFIDENTIALITÉ",
            subsections: [
                {
                    title: "1. INFORMATIONS QUE NOUS COLLECTONS",
                    items: [
                        { subtitle: "1.1 Données personnelles:", content: "Lors de l’inscription, nous pouvons recueillir votre nom, votre e‑mail et vos préférences de localisation pour vous afficher des offres locales." },
                        { subtitle: "1.2 Utilisation:", content: "Nous analysons la manière dont vous utilisez l’app (ex. offres enregistrées) pour améliorer votre expérience." },
                        { subtitle: "1.3 Appareil:", content: "Nous collectons des informations techniques (type d’appareil, OS, version de l’app) pour le support et la performance." },
                        { subtitle: "1.4 Messages:", content: "Si vous nous contactez, nous conservons vos messages et pièces jointes pour résoudre votre demande." },
                    ],
                },
                {
                    title: "2. COMMENT NOUS UTILISONS VOS INFORMATIONS",
                    items: [
                        { subtitle: "2.1 Faire fonctionner l’app:", content: "Afficher les offres, enregistrer vos préférences et assurer le bon fonctionnement." },
                        { subtitle: "2.2 Vous contacter:", content: "Envoyer des mises à jour ou répondre à vos messages. Les communications marketing sont optionnelles." },
                        { subtitle: "2.3 Améliorer PiKSou:", content: "Corriger des bugs, améliorer des fonctionnalités et comprendre ce que les utilisateurs apprécient." },
                        { subtitle: "2.4 Obligations légales:", content: "Respecter la loi, répondre aux demandes officielles et prévenir la fraude." },
                    ],
                },
            ],
        },
        termsOfService: {
            title: "CONDITIONS D’UTILISATION",
            subsections: [
                {
                    title: "4. UTILISATION DE PiKSou",
                    items: [
                        { subtitle: "4.1 Accord:", content: "En utilisant PiKSou, vous acceptez les présentes conditions et agissez de manière responsable." },
                        { subtitle: "4.2 Modifications:", content: "Nous pouvons mettre à jour ces conditions et vous informer des changements importants." },
                    ],
                },
                {
                    title: "5. À PROPOS DE L’APP",
                    items: [
                        { subtitle: "5.1 Fonction:", content: "PiKSou présente des offres et permet de comparer les prix des supermarchés mauriciens." },
                        { subtitle: "5.2 Exactitude des offres:", content: "Nous faisons de notre mieux, mais les prix/offres peuvent changer sans préavis." },
                        { subtitle: "5.3 Disponibilité du service:", content: "Nous visons une disponibilité continue mais ne pouvons pas garantir 100% d’uptime." },
                    ],
                },
            ],
        },
        dataSecurity: {
            title: "SÉCURITÉ ET CONSERVATION DES DONNÉES",
            content: [
                { subtitle: "7.1 Sécurité:", content: "Chiffrement, serveurs sécurisés et contrôles d’accès protègent vos données." },
                { subtitle: "7.2 Durée de conservation:", content: "Nous conservons vos données tant que votre compte est actif (certaines données non personnelles peuvent être gardées plus longtemps)." },
                { subtitle: "7.3 En cas d’incident:", content: "Nous vous informerons, ainsi que les autorités, conformément à la loi." },
            ],
        },
        userRights: {
            title: "VOS DROITS ET CHOIX",
            content: [
                { subtitle: "8.1 Accès:", content: "Vous pouvez demander une copie de vos données personnelles." },
                { subtitle: "8.2 Mise à jour:", content: "Vous pouvez corriger vos informations dans l’app ou via une demande." },
                { subtitle: "8.3 Suppression:", content: "Vous pouvez supprimer votre compte à tout moment depuis l’app ou en nous contactant." },
            ],
        },
        disclaimers: {
            title: "AVERTISSEMENTS ET LIMITES DE RESPONSABILITÉ",
            content: [
                { subtitle: "9.1 Sans garantie:", content: "PiKSou est fourni « tel quel » sans garantie de fonctionnement parfait." },
                { subtitle: "9.2 Exactitude:", content: "Nous ne pouvons garantir l’exactitude complète ou l’actualité de toutes les offres." },
                { subtitle: "9.3 Non affilié:", content: "Nous ne sommes pas affiliés officiellement aux supermarchés listés." },
                { subtitle: "9.4 Limitation:", content: "Aucune responsabilité pour dommages indirects (économies perdues, données, etc.)." },
            ],
        },
        legalCompliance: {
            title: "CONFORMITÉ LÉGALE ET DROIT APPLICABLE",
            content: [
                { subtitle: "10.1 Lois applicables:", content: "Nous respectons les lois mauriciennes, y compris la loi sur la protection des données." },
                { subtitle: "10.2 Litiges:", content: "Tout litige sera du ressort des tribunaux de Maurice." },
                { subtitle: "10.3 Fin de l’accord:", content: "Nous pouvons suspendre un compte si nécessaire. Vous pouvez supprimer le vôtre à tout moment." },
            ],
        },
        contact: {
            title: "INFORMATIONS DE CONTACT",
            content: [
                "Questions ou préoccupations ? Contactez‑nous par e‑mail ou via l’application.",
                "Nous répondons généralement sous 48 h aux questions générales et sous 30 jours aux demandes formelles de données.",
            ],
        },
    },
    footer: {
        lastUpdated: "28 décembre 2024",
        effectiveDate: "1 janvier 2025",
        version: "1.0",
        language: "Français",
        copyright: "© 2024 PiKSou. Tous droits réservés. Fait avec ❤️ à Maurice.",
    },
}

export default function PageLegaleFr() {
    const [activeSection, setActiveSection] = useState<string | null>(null)

    const handlePrint = () => {
        window.print()
    }

    const handleDownload = () => {
        const element = document.createElement("a")
        const file = new Blob([document.getElementById("legal-content")?.innerText || ""], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = "piksou-document-juridique-fr.txt"
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* En‑tête (masqué à l’impression) */}
            <div className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300 print:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/fr" className="inline-flex items-center text-[#48C774] hover:text-[#22c55e] transition-colors duration-200">
                                <ArrowLeft size={20} className="mr-2" />
                                Retour à l’accueil
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                                <Print size={16} className="mr-2" />
                                Imprimer
                            </button>
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center px-4 py-2 bg-[#48C774] text-white rounded-lg hover:bg-[#22c55e] transition-colors duration-200"
                            >
                                <Download size={16} className="mr-2" />
                                Télécharger
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white handwritten">
                            {LEGAL_CONTENT_FR.header.title}
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Document juridique complet pour {LEGAL_CONTENT_FR.header.subtitle}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                            Dernière mise à jour : {LEGAL_CONTENT_FR.header.lastUpdated} | Date d’effet : {LEGAL_CONTENT_FR.header.effectiveDate}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table des matières (masquée à l’impression) */}
                    <div className="lg:col-span-1 print:hidden">
                        <div className="sticky top-8">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 p-6 transition-colors duration-300">
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 handwritten">Table des matières</h2>
                                <nav className="space-y-2">
                                    {LEGAL_CONTENT_FR.navigation.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            onClick={() => setActiveSection(section.id)}
                                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${activeSection === section.id
                                                    ? "bg-[#48C774]/10 text-[#48C774]"
                                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                                                }`}
                                        >
                                            <section.icon size={16} />
                                            <span className="text-sm">{section.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Contenu principal */}
                    <div className="lg:col-span-3">
                        <div id="legal-content" className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 transition-colors duration-300 print:shadow-none print:rounded-none">
                            {/* En‑tête du document */}
                            <div className="p-8 border-b border-gray-200 dark:border-gray-700 print:border-black">
                                <div className="text-center mb-8">
                                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 print:text-black">
                                        {LEGAL_CONTENT_FR.header.title}
                                    </h1>
                                    <h2 className="text-2xl text-[#48C774] font-semibold mb-4 print:text-black">
                                        {LEGAL_CONTENT_FR.header.subtitle}
                                    </h2>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 print:text-black">
                                        <p>Dernière mise à jour : {LEGAL_CONTENT_FR.header.lastUpdated}</p>
                                        <p>Date d’effet : {LEGAL_CONTENT_FR.header.effectiveDate}</p>
                                        <p>Version : {LEGAL_CONTENT_FR.header.version}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Corps */}
                            <div className="p-8 print:p-4 space-y-12 text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
                                {/* Introduction */}
                                <section id="introduction">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.introduction.title}
                                    </h2>
                                    <div className="space-y-4 text-justify">
                                        {LEGAL_CONTENT_FR.sections.introduction.content.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                </section>

                                {/* Politique de Confidentialité */}
                                <section id="privacy-policy">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.privacyPolicy.title}
                                    </h2>
                                    {LEGAL_CONTENT_FR.sections.privacyPolicy.subsections.map((subsection, subsectionIndex) => (
                                        <div key={subsectionIndex} className="mb-6">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                                                {subsection.title}
                                            </h3>
                                            <div className="space-y-4 text-justify">
                                                {subsection.items.map((item, itemIndex) => (
                                                    <p key={itemIndex}>
                                                        <strong>{item.subtitle}</strong> {item.content}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </section>

                                {/* Conditions d’Utilisation */}
                                <section id="terms-of-service">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.termsOfService.title}
                                    </h2>
                                    {LEGAL_CONTENT_FR.sections.termsOfService.subsections.map((subsection, subsectionIndex) => (
                                        <div key={subsectionIndex} className="mb-6">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white print:text-black mb-3">
                                                {subsection.title}
                                            </h3>
                                            <div className="space-y-4 text-justify">
                                                {subsection.items.map((item, itemIndex) => (
                                                    <p key={itemIndex}>
                                                        <strong>{item.subtitle}</strong> {item.content}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </section>

                                {/* Sécurité des données */}
                                <section id="data-collection">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.dataSecurity.title}
                                    </h2>
                                    <div className="space-y-4 text-justify">
                                        {LEGAL_CONTENT_FR.sections.dataSecurity.content.map((item, index) => (
                                            <p key={index}>
                                                <strong>{item.subtitle}</strong> {item.content}
                                            </p>
                                        ))}
                                    </div>
                                </section>

                                {/* Droits des utilisateurs */}
                                <section id="user-rights">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.userRights.title}
                                    </h2>
                                    <div className="space-y-4 text-justify">
                                        {LEGAL_CONTENT_FR.sections.userRights.content.map((item, index) => (
                                            <p key={index}>
                                                <strong>{item.subtitle}</strong> {item.content}
                                            </p>
                                        ))}
                                    </div>
                                </section>

                                {/* Avertissements */}
                                <section id="disclaimers">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.disclaimers.title}
                                    </h2>
                                    <div className="space-y-4 text-justify">
                                        {LEGAL_CONTENT_FR.sections.disclaimers.content.map((item, index) => (
                                            <p key={index}>
                                                <strong>{item.subtitle}</strong> {item.content}
                                            </p>
                                        ))}
                                    </div>
                                </section>

                                {/* Conformité légale */}
                                <section id="legal-compliance">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.legalCompliance.title}
                                    </h2>
                                    <div className="space-y-4 text-justify">
                                        {LEGAL_CONTENT_FR.sections.legalCompliance.content.map((item, index) => (
                                            <p key={index}>
                                                <strong>{item.subtitle}</strong> {item.content}
                                            </p>
                                        ))}
                                    </div>
                                </section>

                                {/* Contact */}
                                <section id="contact">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black mb-4 handwritten">
                                        {LEGAL_CONTENT_FR.sections.contact.title}
                                    </h2>
                                    <div className="space-y-4 text-justify">
                                        {LEGAL_CONTENT_FR.sections.contact.content.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                        <div className="bg-gray-50 dark:bg-gray-700 print:bg-gray-100 p-6 rounded-lg">
                                            <p>
                                                <strong>Nom de la société :</strong> {LEGAL_CONTENT_FR.company.name}
                                            </p>
                                            <p>
                                                <strong>Adresse :</strong> {LEGAL_CONTENT_FR.company.address}
                                            </p>
                                            <p>
                                                <strong>Email :</strong> {LEGAL_CONTENT_FR.company.emails.general}
                                            </p>
                                            <p>
                                                <strong>Confidentialité :</strong> {LEGAL_CONTENT_FR.company.emails.privacy}
                                            </p>
                                            <p>
                                                <strong>Juridique :</strong> {LEGAL_CONTENT_FR.company.emails.legal}
                                            </p>
                                            <p>
                                                <strong>Téléphone :</strong> {LEGAL_CONTENT_FR.company.phone}
                                            </p>
                                            <p>
                                                <strong>Enregistrement :</strong> {LEGAL_CONTENT_FR.company.registrationNumber}
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Pied de document */}
                                <section className="border-t border-gray-200 dark:border-gray-700 print:border-black pt-8 mt-12">
                                    <div className="text-center text-sm text-gray-500 dark:text-gray-400 print:text-black">
                                        <p className="mb-2">
                                            Ce document a été mis à jour le {LEGAL_CONTENT_FR.footer.lastUpdated} et est effectif à partir du {LEGAL_CONTENT_FR.footer.effectiveDate}.
                                        </p>
                                        <p className="mb-2">
                                            Version : {LEGAL_CONTENT_FR.footer.version} | Langue : {LEGAL_CONTENT_FR.footer.language}
                                        </p>
                                        <p>{LEGAL_CONTENT_FR.footer.copyright}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


