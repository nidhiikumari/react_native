// import { metadata } from './login/layout';

import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App | Login",
  description: "This App is About Firebase Integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <title>Firebase Chat App Integration</title>
      </head>
      <body>
        <div>{children}</div>
      </body>
    </>
  );
}
