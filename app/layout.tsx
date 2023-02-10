import Header from '@/components/Header';
import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className='h-screen flex flex-col'>
                <Header title={''} />
                {children}
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Grinder',
    description: 'sentence mining made easy',
    keywords: ['Language Learning', 'Anki', 'Sentece Mining'],
    authors: ['kualta', 'contact@kualta.dev', 'https://kualta.dev/'],

    icons: {
        icon: '/favicon.ico',
        // shortcut: '/shortcut-icon.png',
        // apple: '/apple-icon.png',
        // other: {
        //     rel: 'apple-touch-icon-precomposed',
        //     url: '/apple-touch-icon-precomposed.png',
        // },
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
