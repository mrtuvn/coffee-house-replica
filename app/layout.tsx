import * as React from 'react'
import './globals.css'
import './custom.css'
import Footer from "@/components/common/Footer/Footer"
import Header  from "@/components/common/Header/Header"

// OLD
// const Layout: React.FC<any> = ({ children }: any) => {
//     return (
//         <>
//             <Header />
//             <main className='main-content | pt-20 flow-root min-h-full h-full'>
//                 {children}
//             </main>
//             <Footer />
//         </>
//     );
// }

// NEW
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
      <html lang="vi">
        <head>
          <title>The Coffee House Delivery</title>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"/> */}
        </head>
        <body>
            <Header />
                <main className='main-content | pt-20 flow-root min-h-full h-full'>
                    {children}
                </main>
            <Footer />
            </body>
      </html>
    );
}