import * as React from 'react';
import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';

const Layout: React.FC<any> = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="main-content | flow-root h-full min-h-full pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
