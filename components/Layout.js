import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
