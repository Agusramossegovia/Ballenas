import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './Componentes/footer';
import Nav from './Componentes/nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salvemos a las ballenas',
  description: 'Sitio de proteccionista de las ballenas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='contenedor'>
        <Nav/>

        {children}
        
        <Footer/>
        </div>



      </body>
    </html>
  )
}
