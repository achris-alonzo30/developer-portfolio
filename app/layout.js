import { GoogleTagManager } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

export const metadata = {
  title: 'Chris Alonzo',
  description: "Welcome to Chris Alonzo's portfolio! I'm a self-taught full-stack developer with a passion for continuous learning and collaboration. I thrive on new challenges and am adept at quickly grasping new concepts. Let's connect and create something amazing together!",
  icons: [ "/logo.svg" ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  )
};
