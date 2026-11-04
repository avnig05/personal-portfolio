import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avni Gandhi — AI systems, software, and experiments',
  description: 'The personal portfolio of Avni Gandhi.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
