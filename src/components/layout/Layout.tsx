import React, {ReactElement} from 'react';
import Link from "next/link";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const NavBar = () => {
    return (
        <nav>
            <ul className="flex gap-52">
                <li className="border border-gray-500 px-5 py-2 rounded-2xl">
                    <Link href="/">Vote</Link>
                </li>
                <li className="border border-gray-500 px-5 py-2 rounded-2xl">
                    <Link href="/results">Results</Link>
                </li>
            </ul>
        </nav>
    )
}

const Layout = ({children}: { children: ReactElement }) => {
    return (<>
            <style jsx global>{`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}</style>
            <div className="flex flex-col h-screen w-screen justify-start items-center">
                <div className="md:h-48 h-24"/>
                <NavBar/>
                <div className="h-10"/>
                <div className="max-w-5xl">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;