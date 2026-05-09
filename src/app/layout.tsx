import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "CV - Prasetyo Aditya Putra",
    description: "Curriculum Vitae interaktif dengan Next.js dan Tailwind CSS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className="antialiased">{children}</body>
        </html>
    );
}
