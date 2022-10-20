import type { NextPage } from 'next'
import { Footer } from "../components/common/Footer/Footer"
import { Header }  from "../components/common/Header/Header"

const Layout: NextPage = ({ children }: any) => {
    return (
        <>
            <Header />
            <main className='main-content | flex flex-col min-h-full h-full'>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout