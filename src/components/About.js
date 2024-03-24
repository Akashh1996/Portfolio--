'use client';

import Image from 'next/image';

const About = () => {
    return (
        <>
            <div className='title-wrapper'>
                <h1 className='welcome title'>About</h1>
            </div>
            <div className='about-wrapper'>
                <div className='about-description'>
                    <div className='about-section left-gradient'>
                        <h2>Who am i ?</h2>
                        <p>
                            I’m Akash, a <span className='accent'>full-stack developer</span> and
                            your friendly neighborhood tech lover based in sunny Barcelona! I’m all
                            about turning coffee into code and transforming crazy ideas into digital
                            wonders.
                        </p>
                    </div>

                    <div className='about-section left-gradient'>
                        <h2>Nowadays</h2>
                        <p>
                            Currently, I’m working at{' '}
                            <a
                                className='accent'
                                href='https://www.deporvillage.com/'
                                target='_blank'
                                aria-label='Deporvillage'
                            >
                                Deporvillage
                            </a>{' '}
                            as a frontend developer where I’m part of an awesome team working on
                            providing best sport products on an e-commerce platform.
                        </p>
                    </div>

                    <div className='about-section left-gradient'>
                        <h2>Hobbies</h2>
                        <p>
                            When I’m not typing away furiously, you can catch me playing
                            <span className='accent'> basketball</span>, table tennis, or solving
                            sudoku! If you dont see me playing either of them, I’m probably at the
                            beach or in the mountains.
                        </p>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <div className='container'>
                        <Image
                            className='image'
                            src='/img.png'
                            alt='Image'
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
