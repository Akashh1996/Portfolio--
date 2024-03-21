'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import projects from '@/utils/projects';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const About = dynamic(() => import('@/components/About').then((mod) => mod));
const Skills = dynamic(() => import('@/components/Skills').then((mod) => mod));
const Contact = dynamic(() => import('@/components/Contact').then((mod) => mod));

const Portfolio = () => {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    const [myProjects, showMyProjects] = useState(projects.slice(0, 4));
    const [loading, setLoading] = useState(false);
    const sectionRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const topRef = useRef(null);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showMyProjects(projects.slice(0, myProjects.length + 2));
        }, 600);
        if (myProjects.length === projects.length) return;
    };

    useEffect(() => {
        const projectWrapper = document.querySelector('.project-wrapper');
        if (myProjects.length > 4 && myProjects.length <= projects.length) {
            projectWrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [myProjects]);

    const navItems = [
        {
            name: 'About',
            ref: sectionRef,
        },
        {
            name: 'Skills',
            ref: skillsRef,
        },
        {
            name: 'Projects',
            ref: projectRef,
        },
        {
            name: 'Contact',
            ref: contactRef,
        },
    ];

    const socialMediaIcons = [
        {
            icon: 'linkedin.svg',
            url: 'https://www.linkedin.com/in/akash-sapkota-front-end-developer/',
        },
        {
            icon: 'github.svg',
            url: 'https://github.com/Akashh1996',
        },
        {
            icon: 'facebook.svg',
            url: 'https://www.facebook.com/theblack.crow.338',
        },
        {
            icon: 'instagram.svg',
            url: 'https://www.instagram.com/akashh_ak',
        },
        {
            icon: 'gmail.svg',
            url: 'mailto:akashh.sapkota@gmail.com',
        },
    ];

    return (
        <div ref={topRef} className='wrapper'>
            <div className={`header-container ${scrollDirection === 'up' ? 'scrolled' : ''}`}>
                <div className='logo-wrapper'>
                    <a
                        area-label='logo'
                        href='https://akashsapkota.netlify.com'
                        className='logo-text-a'
                    >
                        <Image
                            src='/logo.png'
                            alt='logo'
                            width={39}
                            height={49}
                            quality={100}
                            className='logo'
                        />
                    </a>
                </div>
                <div className='menu'>
                    {navItems.map((item, idx) => (
                        <span
                            className='menu-item'
                            key={idx}
                            onClick={() => item.ref.current.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
            <div className='content-wrapper'>
                <div className='content'>
                    <div>
                        <h1 className='welcome welcome-text'>Hello world !</h1>
                    </div>
                </div>
                <div style={{ marginTop: '70px' }} className='hero-text'>
                    <div className='intro-wrapper left-gradient'>
                        <p className='intro'>
                            Hello there! I'm <span className='accent-m-b'>Akash Sapkota</span>, a
                            Barcelona-based code wizard specializing in{' '}
                            <span className=''>full-stack development</span>. How do I weave this
                            magic ? Let's uncover the secrets together!
                        </p>
                    </div>
                    <div className='sub-intro-wrapper left-gradient'>
                        <p className='sub-intro'>
                            The magic lies in building websites and web applications, creating
                            dynamic and responsive <span className='accent-m-b'>web solutions</span>
                            , and delivering high-quality code and user-friendly{' '}
                            <span className='accent-element'>experiences.</span>
                        </p>
                    </div>
                </div>

                <div className='social-media-icons'>
                    {socialMediaIcons.map(({ icon, url }, idx) => (
                        <a
                            target={icon !== 'gmail.svg' ? '_blank' : '_self'}
                            key={idx}
                            href={url}
                            aria-label={icon.replace(/\.svg$/, '')}
                        >
                            <Image
                                key={idx}
                                className='image'
                                src={icon}
                                alt={icon.replace(/\.svg$/, '')}
                                width={icon === 'linkedin.svg' ? 42 : 30}
                                height={icon === 'linkedin.svg' ? 42 : 30}
                                quality={100}
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div ref={sectionRef} className='content-wrapper section-wrapper'>
                <About />
            </div>

            <div ref={skillsRef} className='content-wrapper section-wrapper'>
                <Skills />
            </div>

            <div ref={projectRef} className='content-wrapper section-wrapper project-wrapper'>
                <div className='title-wrapper'>
                    <h1 className='welcome title'>Projects</h1>
                </div>
                <div className='project-wrapper'>
                    {myProjects.map((project, idx) => (
                        <div
                            className={`project-card left-gradient ${idx === 5 ? 'last-card' : ''}`}
                            key={idx}
                        >
                            <div className='project-card-header'>
                                <h2>
                                    <span className='number'>{`0.${idx + 1} `}</span>
                                    {project.title}
                                </h2>
                                <span className='project-card-icons'>
                                    <a
                                        target='_blank'
                                        href={project.gitHub}
                                        aria-label='Github link'
                                    >
                                        <Image
                                            className='image'
                                            src='/github.svg'
                                            alt='Github'
                                            width={30}
                                            height={30}
                                            quality={100}
                                        />
                                    </a>
                                    {project?.demo ? (
                                        <a
                                            target='_blank'
                                            href={project?.demo}
                                            aria-label='Demo link'
                                            className='external-link'
                                        >
                                            <Image
                                                className='image'
                                                src='/external.svg'
                                                alt='External'
                                                width={30}
                                                height={30}
                                                quality={100}
                                            />
                                        </a>
                                    ) : (
                                        <Image
                                            className='image'
                                            src='/external.svg'
                                            alt='External'
                                            width={30}
                                            height={30}
                                            quality={100}
                                        />
                                    )}
                                </span>
                            </div>
                            <div className='project-card-body'>
                                <p>{project.description}</p>
                            </div>
                            <div className='project-card-footer'>
                                {project.tech.map((tech, idx) => (
                                    <span className={tech.isAccent && 'accent'} key={idx}>
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {loading && (
                    <div className='loading'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}

                <div
                    className={`button-wrapper button-more ${
                        myProjects.length === projects.length ? 'hidden' : ''
                    }`}
                >
                    <div onClick={handleShowMore} className='show-more'>
                        <span>{projects.length - myProjects.length}</span> more...
                    </div>
                </div>
            </div>

            <div ref={contactRef} className='content-wrapper section-wrapper'>
                <Contact />
                <div className='footer-cc'>
                    <p>
                        ©{' '}
                        <a area-label='Akash Sapkota' href='https://akashsapkota.netlify.app'>
                            Akash Sapkota
                        </a>
                        , {new Date().getFullYear()} Made with Next.js
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
