import React, {ReactElement} from 'react';
import Link from "next/link";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})

const NavBar = () => {
    return (
        <nav>
            <span className="text-3xl">Which Pokemon is more round?</span>
            <div className="p-4 xl:p-8"></div>
            <ul className="grid grid-cols-2 gap-16">
                <Link href="/">
                    <li className="border border-gray-500 px-5 py-2 rounded-2xl text-center">
                        Vote
                    </li>
                </Link>
                <Link href="/results">
                    <li className="border border-gray-500 px-5 py-2 rounded-2xl text-center">
                        Results
                    </li>
                </Link>
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
            <div className="flex flex-col h-screen w-screen justify-start items-center p-5">
                <div className="p-2 xl:p-10"/>
                <NavBar/>
                <div className="h-3 xl:h-3"/>
                <div className="max-w-5xl">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;