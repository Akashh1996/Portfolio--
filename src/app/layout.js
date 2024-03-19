import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Akash Sapkota | Full stack Developer',
    description: 'Frontend developer',
    keywords: 'portfolio, javascript, developer, akash portfolio',
    url: 'https://akashportfoliohub.netlify.com',
    type: 'website',
    robots: 'index, follow',
    author: 'Akash Sapkota',
    publisher: 'Akash Sapkota',
    creator: 'Akash Sapkota',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <meta property='og:title' content='Akash Sapkota | Full stack Developer' />
                <meta property='og:description' content='Frontend developer' />
                <meta
                    name='keyword'
                    content='akash sapkota portfolio, javascript, developer, akash portfolio, top portfolio 2024, best portfolio website'
                ></meta>
                <meta property='og:url' content='https://akashportfoliohub.netlify.com' />
                <meta property='og:type' content='website' />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100,0,0'
                />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
                ></link>
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
                />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap'
                ></link>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
