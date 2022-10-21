import * as React from 'react'
import type { NextPage } from 'next'
import Footer from "@/components/common/Footer/Footer"
import Header  from "@/components/common/Header/Header"

const Layout: React.FC<any> = ({ children }: any) => {
    return (
        <>
            <Header />
            <main className='main-content | flow-root min-h-full h-full'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout