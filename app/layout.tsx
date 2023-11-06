import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
// eslint-disable-next-line no-unused-vars, camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dev Overflow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures and more.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
