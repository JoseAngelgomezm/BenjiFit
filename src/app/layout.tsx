// app/layout.tsx (o app/page.tsx si estás trabajando con esa estructura)
import React from 'react';
import { Inter } from 'next/font/google'; // Si estás usando fuentes personalizadas
import './globals.css'; // Si tienes estilos globales

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body className={inter.className}>
        <header>
          {/* Aquí puedes agregar un encabezado global, navegación, etc. */}
          <h1>Benji Gómez - Entrenador Personal</h1>
        </header>

        <main>{children}</main> {/* Renderiza la página actual aquí */}
        
        <footer>
          {/* Puedes agregar un pie de página global */}
        </footer>
      </body>
    </html>
  );
}
