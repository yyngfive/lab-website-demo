import Footer from '@/components/Footer';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Lab test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
