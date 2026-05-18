"use client";

import { useState } from "react";

type Language = "id" | "en";

type LocalizedText = {
    id: string;
    en: string;
};

type Project = {
    name: string;
    techStack: LocalizedText;
    role: LocalizedText;
    metric: LocalizedText;
};

type Company = {
    name: string;
    period: LocalizedText;
    title: LocalizedText;
    summary: LocalizedText;
    projects: Project[];
    expandableProjects?: Project[];
};

const companies: Company[] = [
    {
        name: "PT Kiranatama Emveep",
        period: {
            id: "02/2022 - Sekarang",
            en: "02/2022 - Now",
        },
        title: {
            id: ".NET Developer",
            en: ".NET Developer",
        },
        summary: {
            id: "Perusahaan pengembang aplikasi enterprise, menangani solusi internal untuk klien skala nasional seperti Astra dan Kalbe.",
            en: "An enterprise application development company delivering internal solutions for national clients such as Astra and Kalbe.",
        },
        projects: [
            {
                name: "Astra TSO (Astra PSS)",
                techStack: {
                    id: "ASP.NET",
                    en: "ASP.NET",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Membangun dan memelihara aplikasi internal untuk kebutuhan operasional tim Astra.",
                    en: "Built and maintained internal applications for Astra's operational workflows.",
                },
            },
            {
                name: "Kalbe EBR",
                techStack: {
                    id: ".NET Core",
                    en: ".NET Core",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mengembangkan aplikasi internal Kalbe berbasis .NET Core untuk mendukung proses bisnis inti.",
                    en: "Developed internal .NET Core applications for Kalbe to support core business processes.",
                },
            },
            {
                name: "Kalbe Etesting",
                techStack: {
                    id: ".NET Core",
                    en: ".NET Core",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Menyediakan modul pengujian internal yang meningkatkan konsistensi proses testing aplikasi.",
                    en: "Delivered internal testing modules that improved application testing consistency.",
                },
            },
        ],
    },
    {
        name: "PT Walden Global Services",
        period: {
            id: "09/2017 - 02/2022",
            en: "09/2017 - 02/2022",
        },
        title: {
            id: ".NET Developer",
            en: ".NET Developer",
        },
        summary: {
            id: "Software house dan service partner yang mengerjakan aplikasi web, desktop, CMS, serta integrasi SharePoint untuk berbagai industri.",
            en: "A software house and service partner delivering web, desktop, CMS, and SharePoint integration solutions across industries.",
        },
        projects: [
            {
                name: "MKH",
                techStack: {
                    id: "ASP.NET MVC, WPF",
                    en: "ASP.NET MVC, WPF",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Merilis aplikasi web dan desktop dalam satu alur solusi untuk kebutuhan operasional klien.",
                    en: "Delivered web and desktop applications as a unified solution for client operations.",
                },
            },
            {
                name: "Redden",
                techStack: {
                    id: "ASP.NET MVC C#, Nop Commerce",
                    en: "ASP.NET MVC C#, Nop Commerce",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Menyelesaikan pengembangan web berbasis CMS e-commerce untuk manajemen konten dan transaksi.",
                    en: "Completed e-commerce CMS based web development for content and transaction management.",
                },
            },
            {
                name: "Astra LMS",
                techStack: {
                    id: "ASP.NET MVC C#",
                    en: "ASP.NET MVC C#",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Membangun platform web learning management sesuai kebutuhan internal pengguna perusahaan.",
                    en: "Built a web-based learning management platform for internal enterprise users.",
                },
            },
        ],
        expandableProjects: [
            {
                name: "Grasindo",
                techStack: {
                    id: "Laravel",
                    en: "Laravel",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mengembangkan aplikasi berbasis web untuk kebutuhan proses bisnis klien.",
                    en: "Developed web applications to support client business workflows.",
                },
            },
            {
                name: "WGEA",
                techStack: {
                    id: "ASP.NET MVC C#, Umbraco CMS",
                    en: "ASP.NET MVC C#, Umbraco CMS",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Membangun aplikasi web berbasis CMS Umbraco untuk pengelolaan konten yang lebih cepat.",
                    en: "Built a CMS-driven web application with Umbraco for faster content management.",
                },
            },
            {
                name: "Ahass MPM",
                techStack: {
                    id: "ASP.NET MVC C#",
                    en: "ASP.NET MVC C#",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mengembangkan aplikasi web untuk mendukung proses layanan operasional Ahass.",
                    en: "Developed web applications to support Ahass operational service processes.",
                },
            },
            {
                name: "Boga Floating",
                techStack: {
                    id: "Windows Forms",
                    en: "Windows Forms",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Membangun aplikasi desktop untuk kebutuhan operasional internal.",
                    en: "Built a desktop application for internal operational needs.",
                },
            },
            {
                name: "Boga CRM",
                techStack: {
                    id: "Laravel",
                    en: "Laravel",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mengembangkan sistem CRM berbasis web untuk pengelolaan relasi pelanggan.",
                    en: "Developed a web-based CRM system for customer relationship management.",
                },
            },
            {
                name: "Darya Varia",
                techStack: {
                    id: "ASP.NET MVC C#",
                    en: "ASP.NET MVC C#",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mengembangkan aplikasi web untuk kebutuhan proses internal perusahaan.",
                    en: "Developed web applications for internal enterprise process needs.",
                },
            },
            {
                name: "Meratus Line - Employee Handover",
                techStack: {
                    id: "Microsoft SharePoint",
                    en: "Microsoft SharePoint",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mendukung implementasi aplikasi employee handover berbasis SharePoint.",
                    en: "Supported SharePoint-based employee handover application implementation.",
                },
            },
            {
                name: "Meratus Line - On Boarding",
                techStack: {
                    id: "Microsoft SharePoint",
                    en: "Microsoft SharePoint",
                },
                role: {
                    id: ".NET Developer",
                    en: ".NET Developer",
                },
                metric: {
                    id: "Mendukung implementasi aplikasi onboarding karyawan berbasis SharePoint.",
                    en: "Supported SharePoint-based employee onboarding application implementation.",
                },
            },
        ],
    },
    {
        name: "PT Cyberindo Aditama (CBN)",
        period: {
            id: "01/2016 - 09/2017",
            en: "01/2016 - 09/2017",
        },
        title: {
            id: "Junior Programmer",
            en: "Junior Programmer",
        },
        summary: {
            id: "Perusahaan layanan infrastruktur digital tempat memulai karier sebagai pengembang aplikasi web enterprise.",
            en: "A digital infrastructure service company where I started my career as an enterprise web application developer.",
        },
        projects: [
            {
                name: "Cisnets 3",
                techStack: {
                    id: "ASP.NET MVC C#",
                    en: "ASP.NET MVC C#",
                },
                role: {
                    id: "Junior Programmer",
                    en: "Junior Programmer",
                },
                metric: {
                    id: "Mengembangkan fitur aplikasi web untuk mendukung kebutuhan pelanggan dan operasional internal.",
                    en: "Developed web application features supporting customer needs and internal operations.",
                },
            },
            {
                name: "Cisnets 2",
                techStack: {
                    id: "ASP.NET Web Forms C#",
                    en: "ASP.NET Web Forms C#",
                },
                role: {
                    id: "Junior Programmer",
                    en: "Junior Programmer",
                },
                metric: {
                    id: "Menjaga stabilitas aplikasi legacy sekaligus melakukan pengembangan modul baru.",
                    en: "Maintained legacy application stability while developing new modules.",
                },
            },
            {
                name: "Member Center",
                techStack: {
                    id: "ASP.NET Web Forms C#",
                    en: "ASP.NET Web Forms C#",
                },
                role: {
                    id: "Junior Programmer",
                    en: "Junior Programmer",
                },
                metric: {
                    id: "Menyediakan portal web anggota untuk akses layanan dan informasi akun secara terpusat.",
                    en: "Delivered a member web portal for centralized service access and account information.",
                },
            },
        ],
    },
];

const additionalSkills: LocalizedText[] = [
    {
        id: "Database: SQL Server, MySQL",
        en: "Database: SQL Server, MySQL",
    },
    {
        id: "Programming: C#, SQL, HTML, JavaScript, CSS, PHP (Laravel)",
        en: "Programming: C#, SQL, HTML, JavaScript, CSS, PHP (Laravel)",
    },
    {
        id: "Server: Windows Server",
        en: "Server: Windows Server",
    },
    {
        id: "Tools: SharePoint, Power Automate (Ms Flow)",
        en: "Tools: SharePoint, Power Automate (Ms Flow)",
    },
];

const freelanceProjects: Project[] = [
    {
        name: "Linggo",
        techStack: {
            id: "Laravel",
            en: "Laravel",
        },
        role: {
            id: "Freelance Web Developer",
            en: "Freelance Web Developer",
        },
        metric: {
            id: "Mengembangkan aplikasi web sesuai kebutuhan bisnis klien.",
            en: "Developed web applications based on client business requirements.",
        },
    },
    {
        name: "Taspen",
        techStack: {
            id: "ASP.NET MVC C#",
            en: "ASP.NET MVC C#",
        },
        role: {
            id: "Freelance .NET Developer",
            en: "Freelance .NET Developer",
        },
        metric: {
            id: "Membangun modul aplikasi web untuk kebutuhan internal proyek.",
            en: "Built web application modules for internal project requirements.",
        },
    },
    {
        name: "Ismaya Finance Ops",
        techStack: {
            id: "ASP.NET Core API, PostgreSQL",
            en: "ASP.NET Core API, PostgreSQL",
        },
        role: {
            id: "Freelance Backend Developer",
            en: "Freelance Backend Developer",
        },
        metric: {
            id: "Menyediakan API layanan finance operations dengan integrasi database PostgreSQL.",
            en: "Delivered a finance operations API integrated with PostgreSQL database.",
        },
    },
    {
        name: "MRO-Cogindo",
        techStack: {
            id: "ASP.NET, Blazor",
            en: "ASP.NET, Blazor",
        },
        role: {
            id: "Freelance Fullstack Developer",
            en: "Freelance Fullstack Developer",
        },
        metric: {
            id: "Mengerjakan aplikasi web dengan frontend Blazor dan backend ASP.NET.",
            en: "Built a web application with Blazor frontend and ASP.NET backend.",
        },
    },
];

const labels = {
    cv: {
        id: "Curriculum Vitae",
        en: "Curriculum Vitae",
    },
    profile: {
        id: ".NET Developer dengan pengalaman membangun aplikasi web dan desktop enterprise. Fokus pada pengembangan aplikasi internal, maintenance sistem, dan delivery solusi berbasis ASP.NET, .NET Core, dan ekosistem Microsoft.",
        en: ".NET Developer with experience building enterprise web and desktop applications. Focused on internal application development, system maintenance, and solution delivery across ASP.NET, .NET Core, and Microsoft ecosystem.",
    },
    location: {
        id: "Lokasi",
        en: "Location",
    },
    phone: {
        id: "Telepon",
        en: "Phone",
    },
    experience: {
        id: "Pengalaman Profesional",
        en: "Professional Experience",
    },
    hoverHint: {
        id: "Hover untuk detail",
        en: "Hover for details",
    },
    expandWalden: {
        id: "Lihat semua proyek PT Walden",
        en: "View all PT Walden projects",
    },
    collapseWalden: {
        id: "Sembunyikan proyek PT Walden",
        en: "Hide PT Walden projects",
    },
    education: {
        id: "Pendidikan",
        en: "Education",
    },
    additionalSkills: {
        id: "Additional Skills",
        en: "Additional Skills",
    },
    freelanceProjects: {
        id: "Freelance Projects",
        en: "Freelance Projects",
    },
    techStack: {
        id: "Tech stack",
        en: "Tech stack",
    },
    role: {
        id: "Peran saya",
        en: "My role",
    },
    impact: {
        id: "Dampak/hasil",
        en: "Impact/result",
    },
    printA4: {
        id: "Cetak CV A4",
        en: "Print A4 CV",
    },
    email: {
        id: "Email",
        en: "Email",
    },
    printHint: {
        id: "Catatan: versi cetak mengikuti bahasa aktif.",
        en: "Note: print version follows the active language.",
    },
};

export default function CVPage() {
    const [lang, setLang] = useState<Language>("id");
    const [waldenExpanded, setWaldenExpanded] = useState(false);
    const t = (text: LocalizedText) => text[lang];

    const renderProject = (project: Project, key: string) => (
        <li key={key} className="relative group/project">
            <button
                type="button"
                className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-left text-sm font-medium text-zinc-800 transition-colors duration-300 hover:border-zinc-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
                {project.name}
            </button>

            <div className="pointer-events-none mt-2 rounded-md border border-zinc-700 bg-zinc-900 p-3 text-sm text-zinc-100 transition-all duration-300 sm:absolute sm:left-0 sm:top-[calc(100%+8px)] sm:z-20 sm:w-[min(95vw,30rem)] sm:-translate-y-1 sm:opacity-0 sm:group-hover/project:translate-y-0 sm:group-hover/project:opacity-100 sm:group-focus-within/project:translate-y-0 sm:group-focus-within/project:opacity-100 print:pointer-events-auto print:static print:w-full print:translate-y-0 print:opacity-100">
                <p>
                    <span className="font-semibold text-white">{t(labels.techStack)}:</span> {t(project.techStack)}
                </p>
                <p className="mt-1">
                    <span className="font-semibold text-white">{t(labels.role)}:</span> {t(project.role)}
                </p>
                <p className="mt-1">
                    <span className="font-semibold text-white">{t(labels.impact)}:</span> {t(project.metric)}
                </p>
            </div>
        </li>
    );

    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900">
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 12mm;
                    }

                    body {
                        background: #ffffff !important;
                    }
                }
            `}</style>
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
                <header className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{t(labels.cv)}</p>
                        <div className="flex flex-wrap items-center gap-2 print:hidden">
                            <button
                                type="button"
                                onClick={() => window.print()}
                                className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-900"
                            >
                                {t(labels.printA4)}
                            </button>
                            <div className="inline-flex rounded-lg border border-zinc-300 bg-zinc-50 p-1">
                                <button
                                    type="button"
                                    onClick={() => setLang("id")}
                                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${lang === "id" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:text-zinc-900"
                                        }`}
                                >
                                    Indonesia
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLang("en")}
                                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${lang === "en" ? "bg-zinc-900 text-white" : "text-zinc-600 hover:text-zinc-900"
                                        }`}
                                >
                                    English
                                </button>
                            </div>
                        </div>
                        <div className="hidden rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 print:block">
                            {lang === "id" ? "Bahasa: Indonesia" : "Language: English"}
                        </div>
                    </div>
                    <p className="mt-2 text-xs text-zinc-500/90 print:hidden">{t(labels.printHint)}</p>

                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                        Prasetyo Aditya Putra
                    </h1>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-[15px]">{t(labels.profile)}</p>

                    <div className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-3">
                        <span className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                            {t(labels.location)}: Jl. Babakan Ciamis No. 67
                        </span>
                        <span className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                            {t(labels.email)}: prasetyoadityaputra@gmail.com
                        </span>
                        <span className="rounded-md border border-zinc-200 bg-white px-3 py-2">
                            {t(labels.phone)}: 085-622-84000
                        </span>
                    </div>
                </header>

                <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 sm:p-7">
                    <div className="flex items-end justify-between gap-3">
                        <h2 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">{t(labels.experience)}</h2>
                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 print:hidden">{t(labels.hoverHint)}</span>
                    </div>

                    <div className="mt-6 space-y-6">
                        {companies.map((company) => (
                            <article
                                key={company.name}
                                className="group rounded-lg border border-zinc-200 bg-white p-4 transition-colors duration-300 hover:border-zinc-300 sm:p-5"
                            >
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <h3 className="inline-flex items-center text-lg font-semibold text-zinc-950 transition-colors duration-300 group-hover:text-black">
                                            {company.name}
                                        </h3>
                                        <p className="text-sm text-zinc-600">{t(company.title)}</p>
                                    </div>
                                    <span className="text-sm text-zinc-500">{t(company.period)}</span>
                                </div>

                                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                                    {t(company.summary)}
                                </p>

                                <ul className="mt-4 grid gap-3">{company.projects.map((project) => renderProject(project, `${company.name}-${project.name}`))}</ul>

                                {company.expandableProjects && company.expandableProjects.length > 0 ? (
                                    <>
                                        <div className="mt-4 rounded-md border border-zinc-200 bg-zinc-50 p-3 print:hidden">
                                            <button
                                                type="button"
                                                aria-expanded={waldenExpanded}
                                                onClick={() => setWaldenExpanded((prev) => !prev)}
                                                className="w-full text-left text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-900"
                                            >
                                                {waldenExpanded ? t(labels.collapseWalden) : t(labels.expandWalden)} ({company.expandableProjects.length})
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-500 ease-in-out ${waldenExpanded ? "mt-3 max-h-[2200px] opacity-100" : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <ul className="grid gap-3">
                                                    {company.expandableProjects.map((project) => renderProject(project, `${company.name}-more-${project.name}`))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="hidden print:block">
                                            <ul className="mt-4 grid gap-3">
                                                {company.expandableProjects.map((project) => renderProject(project, `${company.name}-print-${project.name}`))}
                                            </ul>
                                        </div>
                                    </>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-6 grid gap-6 md:grid-cols-2">
                    <article className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-7">
                        <h2 className="text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">{t(labels.education)}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
                            <span className="font-semibold">Bachelor Degree of Computer Science</span>
                            <br />
                            Indonesian Computer University (2010 - 2015)
                        </p>
                    </article>

                    <article className="rounded-xl border border-zinc-200 bg-white p-6 sm:p-7">
                        <h2 className="text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">{t(labels.additionalSkills)}</h2>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
                            {additionalSkills.map((skill) => (
                                <li key={skill.id} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                                    {t(skill)}
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>

                <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 sm:p-7">
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">{t(labels.freelanceProjects)}</h2>
                    <ul className="mt-4 grid gap-3">{freelanceProjects.map((project) => renderProject(project, `freelance-${project.name}`))}</ul>
                </section>
            </section>
        </main>
    );
}
