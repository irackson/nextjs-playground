import "homedeveloper/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "homedeveloper/trpc/react";

export const metadata = {
  title: "nextjs-playground",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
