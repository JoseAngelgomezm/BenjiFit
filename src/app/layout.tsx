// app/layout.tsx (o app/page.tsx si estás trabajando con esa estructura)
import React from "react";
import { Inter } from "next/font/google"; // Si estás usando fuentes personalizadas
import "./globals.css"; // Si tienes estilos globales

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body className={inter.className}>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
