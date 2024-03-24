import './globals.css';

export const metadata = {
    title: 'Akash Sapkota | Portfolio',
    description: "Welcome to Akash Sapkota's portfolio. Here you will find his latest projects and skills with their detailed descriptions, demos and source code. Also you will get to know about him and get in touch with him for any query. You can also check out his GitHub or LinkedIn profile for more information.",
    keywords: 'akash, akash portfolio, portfolio akash,akash sapkota, akash sapkota portfolio,react, nextjs, javascript, node, frontend developer',
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
                <meta property="og:image" content="https://akashsapkota.netlify.app/akash.png"></meta>
                <meta property='og:description' content="Welcome to Akash Sapkota's portfolio. Here you will find his latest projects and skills with their detailed descriptions, demos and source code. Also you will get to know about him and get in touch with him for any query. You can also check out his GitHub or LinkedIn profile for more information." />
                <meta name="generator" content="Next 14.0.0"></meta>
                <meta
                    name='keyword'
                    content='akash, akash portfolio, portfolio akash,akash sapkota, akash sapkota portfolio, react, nextjs, javascript, node, frontend developer'
                ></meta>
                <meta property="og:site_name" content="akashsapkota.netlify.app"></meta>
                <meta property='og:url' content='https://akashsapkota.netlify.app' />
                <meta property='og:type' content='website' />
                <meta property='author' content='Akash Sapkota' />
                <meta httpEquiv="last-modified" content="2024-03-24@10:30:00 GMT"></meta>
                <meta name="application-name" content="akashsapkota.netlify.app"></meta>
                <meta name="google-site-verification" content="y1ewVDE3H4lJCe8Fe4OCKMWA9nDk10Uu8qsFIY5yvQk" />
            </head>
            <body>{children}</body>
        </html>
    );
}
