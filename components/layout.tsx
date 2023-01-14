import Head from "next/head";
import { ReactNode } from "react";
import Header from "./header";

interface LayoutProps {
    children: ReactNode
    title?: string
}

const Layout = ({ children, title = "Grinder" }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="#1 Sentence Mining Tool" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen flex flex-col">
                <Header title={title} />
                {children}
            </main>
        </>
    )
}



export default Layout;