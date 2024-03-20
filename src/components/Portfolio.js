'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css'; // Import CSS file for styling
import projects from '@/utils/projects';
import socialMediaIcons from '@/utils/icons';
import Image from 'next/image';

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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'message') setMessage(value);
    };

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showMyProjects(projects.slice(0, myProjects.length + 2));
        }, 600);
        if (myProjects.length === projects.length) return;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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

    const techIcons = ['next.svg', 'react.svg', 'mongodb.svg', 'express.svg', 'node.svg'];

    return (
        <div ref={topRef} className='wrapper'>
            <div className={`header-container ${scrollDirection === 'up' ? 'scrolled' : ''}`}>
                <div className='logo-wrapper'>
                    <div className='logo-text-a'>
                        <span>A</span>
                    </div>
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

                <div className='button-wrapper'>
                    <div className='social-media-icons'>
                        {socialMediaIcons.map((icon, idx) => (
                            <i key={idx} className={icon}></i>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={sectionRef} className='content-wrapper section-wrapper'>
                <div className='title-wrapper'>
                    <h1 className='welcome title'>About</h1>
                </div>
                <div className='about-wrapper'>
                    <div className='about-description'>
                        <div className='about-section left-gradient'>
                            <h2>Who am i ?</h2>
                            <p>
                                I’m Akash, a <span className='accent'>full-stack developer</span>{' '}
                                and your friendly neighborhood tech lover based in sunny Barcelona!
                                I’m all about turning coffee into code and transforming crazy ideas
                                into digital wonders.
                            </p>
                        </div>

                        <div className='about-section left-gradient'>
                            <h2>Nowadays</h2>
                            <p>
                                Currently, I’m working at{' '}
                                <a
                                    className='accent'
                                    href='https://deporvillage.com/'
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
                                <span className='accent'> basketball</span>, table tennis, or
                                solving sudoku! If you dont see me playing either of them, I’m
                                probably at the beach or in the mountains.
                            </p>
                        </div>
                    </div>
                    <div className='image-wrapper left-gradient'>
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
            </div>

            <div ref={skillsRef} className='content-wrapper section-wrapper'>
                <div className='title-wrapper'>
                    <h1 className='welcome title'>Skills</h1>
                </div>
                <div>
                    <div className='skill-section left-gradient'>
                        <div>
                            <h2> Frontend</h2>
                        </div>
                        <p className='skill-frontend-description'>
                            On the frontend, I specialize in creating visually appealing and
                            user-friendly interfaces. My focus lies in creating intuitive designs
                            and interactive elements that prioritize user experience and
                            satisfaction ensuring seamless navigation and accessibility across
                            various devices and browsers.
                        </p>
                        <div className='skill-frontend'>
                            <span>Html</span>
                            <span>Css</span>
                            <span className='accent'>React</span>
                            <span>JavaScript</span>
                            <span>Flux</span>
                            <span className='accent'>Redux</span>
                            <span>React Testing Library</span>
                            <span>Graphql</span>
                            <span>Scss</span>
                            <span>Bootstrap</span>
                            <span>Styled components</span>
                            <span>Material UI</span>
                            <span className='accent'>Jest</span>
                            <span>Saas</span>
                            <span>Sandbox</span>
                            <span>Storybook</span>
                            <span className='accent'>NextJS</span>
                            <span>Turbo</span>
                            <span>Wordpress</span>
                            <span>Core web vitals</span>
                        </div>
                    </div>
                    <div className='skill-section left-gradient'>
                        <h2>Backend</h2>
                        <p className='skill-backend-description'>
                            While my primary focus is on frontend development, I also possess skills
                            in backend development. I'm capable of building and maintaining
                            server-side logic and databases.
                        </p>
                        <div className='skill-frontend'>
                            <span className='accent'>Express</span>
                            <span>Node</span>
                            <span>Mongoose</span>
                            <span className='accent'>Mongodb</span>
                            <span>Mocha</span>
                            <span>Rest api</span>
                            <span>Redis</span>
                            <span>Php</span>
                            <span>Jwt</span>
                        </div>
                    </div>
                    <div className='skill-section left-gradient'>
                        <h2>Tools and other</h2>
                        <p className='skill-other-description'>
                            In addition to my development skills, I am proficient in utilizing
                            various tools and technologies that streamline the development process
                            enabling smooth transition from development to production environments,
                            ensuring seamless deployment of web applications.
                        </p>
                        <div className='skill-frontend'>
                            <span>Github</span>
                            <span className='accent'>Git</span>
                            <span>Bitbucket</span>
                            <span>Newrelic</span>
                            <span className='accent'>Scrum</span>
                            <span>Lighthouse</span>
                            <span>Browserstack</span>
                            <span className='accent'>Jira</span>
                            <span>Heroku</span>
                            <span>Netlify</span>
                            <span>Docker</span>
                        </div>
                    </div>
                </div>
                <div className='tech-icons'>
                    {techIcons.map((icon, idx) => (
                        <Image
                            key={idx}
                            className='image'
                            src={icon}
                            alt={icon.replace(/\.svg$/, '')}
                            width={26}
                            height={26}
                            quality={100}
                        />
                    ))}
                </div>
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
                                        <i className='fa fa-github'></i>
                                    </a>
                                    {project?.demo ? (
                                        <a
                                            target='_blank'
                                            href={project?.demo}
                                            aria-label='Demo link'
                                        >
                                            <i
                                                className='fa fa-external-link'
                                                aria-hidden='true'
                                            ></i>
                                        </a>
                                    ) : (
                                        <i className='fa fa-external-link' aria-hidden='true'></i>
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
                <div className='title-wrapper'>
                    <h1 className='welcome title'>Contact</h1>
                </div>
                <div>
                    <div className='left-gradient contact-description'>
                        <h2>Get in touch</h2>
                        <p className='contact-text'>
                            If you've journeyed this far down the digital rabbit hole, you're on the
                            brink of something extraordinary. Together, we'll unlock endless
                            possibilities and create something truly remarkable.
                        </p>
                        <p>
                            Whether you're ready to launch a project or simply want to connect, pop
                            me a message to{' '}
                            <a
                                className='accent'
                                href='mailto:akashh.sapkota@gmail.com'
                                aria-label='Send email to akashh.sapkota@gmail.com'
                            >
                                akashh.sapkota@gmail.com
                            </a>{' '}
                            or drop me a message using the form below.
                        </p>
                    </div>
                    <div className='form-wrapper left-gradient'>
                        <form>
                            <div className='input-wrapper inline-group'>
                                <label className='name-label'>
                                    <svg
                                        version='1.1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        preserveAspectRatio='xMidYMid meet'
                                        viewBox='0 0 50 50'
                                        height='20'
                                        width='20'
                                        fill='rgb(209, 209, 209, .9)'
                                        fillOpacity={0.8}
                                    >
                                        <path d='M25,2.579c6.191,0,11.212,5.019,11.212,11.21C36.212,19.981,31.191,25,25,25 s-11.211-5.019-11.211-11.211C13.789,7.598,18.809,2.579,25,2.579z M25,30.604c-17.097,0-22.42,11.212-22.42,11.212v5.604h44.84 v-5.604C47.42,41.816,42.097,30.604,25,30.604z'></path>
                                    </svg>
                                </label>
                                <input
                                    spellCheck='false'
                                    type='text'
                                    placeholder='Name'
                                    value={name}
                                    onChange={handleOnChange}
                                    name='name'
                                />
                            </div>
                            <div className='input-wrapper inline-group'>
                                <label className='email-label'>
                                    <svg
                                        version='1.1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        preserveAspectRatio='xMidYMid meet'
                                        viewBox='0 0 50 50'
                                        height='20'
                                        width='20'
                                        fill='rgb(209, 209, 209, .9)'
                                        fillOpacity={0.8}
                                    >
                                        <path d='M2.58,13.065L25.746,32.02l23.166-18.955V8.853H2.58V13.065z M2.58,38.862 l11.377-12.639L2.58,15.967V38.862z M48.912,39.173L37.214,26.267L48.912,16.12V39.173z M25.746,35.687l-9.477-7.879L2.58,42.55 h46.333L35.203,27.808L25.746,35.687z'></path>
                                    </svg>
                                </label>
                                <input
                                    spellCheck='false'
                                    type='text'
                                    placeholder='Email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className='input-wrapper'>
                                <label className='textarea-label'>
                                    <svg
                                        version='1.1'
                                        xmlns='http://www.w3.org/2000/svg'
                                        preserveAspectRatio='xMidYMid meet'
                                        viewBox='0 0 50 50'
                                        height='23'
                                        width='23'
                                        fill='rgb(209, 209, 209, .9)'
                                        fillOpacity={0.8}
                                    >
                                        <path d='M47.811,7.352l-4.198-4.191 c-0.434-0.433-1.003-0.65-1.571-0.65c-0.569,0-1.139,0.216-1.571,0.649l-3.358,3.348l7.341,7.328l3.358-3.347 C48.678,9.623,48.678,8.217,47.811,7.352z M15.315,28.264l7.342,7.33l20.225-20.187l-7.343-7.33L15.315,28.264z M13.73,29.831 l-1.567,8.892l8.91-1.562L13.73,29.831z M34.026,42.685H6.344V15.003H25.88l4.814-4.805H4.646c-1.709,0-3.107,1.398-3.107,3.107 v31.077c0,1.71,1.398,3.108,3.107,3.108h31.078c1.709,0,3.107-1.398,3.107-3.108V22.164l-4.805,4.797V42.685z'></path>
                                    </svg>
                                </label>
                                <textarea
                                    spellCheck='false'
                                    className='email'
                                    type='text'
                                    name='message'
                                    placeholder='Message'
                                    value={message}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`button-wrapper submit-button`}>
                    <div className='show-more' onClick={handleSubmit}>
                        Send
                    </div>
                </div>
                <div className='footer-cc'>
                    <p>© Akash Sapkota, {new Date().getFullYear()} Made with Next.js</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
