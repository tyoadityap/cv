import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "CV - Prasetyo Aditya Putra",
    description: "CV Prasetyo Aditya Putra - Software Engineer with experience in building scalable web applications and APIs. Passionate about clean code and best practices.",
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
