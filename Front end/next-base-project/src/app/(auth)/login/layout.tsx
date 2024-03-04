import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat App | Login',
  description: 'This is Login Page'
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}