import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Akash Sapkota | Portfolio',
    description: 'This is my portfolio where you can see my projects and skills, about me and also you can contact me. Checkout my github profile to see more.',
    keywords: 'web developer portfolio, frontend developer, portfolio, akash, akash sapkota, akash portfolio, akash sapkota portfolio, react developer, react, nextjs, javascript, node',
    url: 'https://akashsapkota.netlify.com',
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
                <link rel="icon" href="/favicon.png" type="image/x-icon"></link>
                <meta property='og:title' content='Akash Sapkota | Portfolio' />
                <meta property='og:description' content='This is my portfolio where you can see my projects and skills, about me and also you can contact me. Checkout my github profile to see more.' />
                <meta name="generator" content="Next 14.0.0"></meta>
                <meta
                    name='keyword'
                    content='web developer portfolio, frontend developer, portfolio, akash, akash sapkota, akash portfolio, akash sapkota portfolio, react developer, react, nextjs, javascript, node'
                ></meta>
                <meta property='og:url' content='https://akashsapkota.netlify.com' />
                <meta property='og:type' content='website' />
                <meta property='author' content='Akash Sapkota' />
                <meta http-equiv="last-modified" content="2024-03-20@10:30:00 GMT"></meta>
                <meta name="application-name" content="akashsapkota.netlify.app"></meta>
                <meta name="google-site-verification" content="y1ewVDE3H4lJCe8Fe4OCKMWA9nDk10Uu8qsFIY5yvQk" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
