'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css'; // Import CSS file for styling
import projects from '@/utils/projects';

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
        window.addEventListener('scroll', updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    const Skills = [
        {
            title: 'Frontend',
            description:
                'On the frontend, I specialize in creating visually appealing and user-friendly interfaces. My focus lies in creating intuitive designs and interactive elements that prioritize user experience and satisfaction ensuring seamless navigation and accessibility across various devices and browsers.',
            tech: [
                'Html',
                'Css',
                'JavaScript',
                'React',
                'Redux',
                'Flux',
                'NextJS',
                'Jest',
                'React Testing Library',
                'Graphql',
                'Scss',
                'Bootstrap',
                'Styled Components',
                'Material UI',
                'Saas',
                'Sandbox',
                'Storybook',
                'Turbo',
                'Wordpress',
                'Core web vitals',
            ],
        },
        {
            title: 'Backend',
            description:
                'While my primary focus is on frontend development, I also possess skills in backend development. I&apos;m capable of building and maintaining server-side logic and databases.',
            tech: [
                'Express',
                'Css',
                'Node',
                'Mongoose',
                'Mongodb',
                'Mocha',
                'Rest api',
                'Redis',
                'Php',
                'Jwt',
            ],
        },
        {
            title: 'Tools and others',
            description:
                'In addition to my development skills, I am proficient in utilizing various tools and technologies that streamline the development process enabling smooth transition from development to production environments, ensuring seamless deployment of web applications.',
            tech: [
                'Git',
                'Github',
                'Bitbucket',
                'Jira',
                'Scrum',
                'Newrelic',
                'Jira',
                'Lighthouse',
                'Browserstack',
                'Heroku',
                'Netlify',
                'Docker',
            ],
        },
    ];

    const [myProjects, showMyProjects] = useState(projects.slice(0, 3));
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
        if (myProjects.length > 3 && myProjects.length <= projects.length) {
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

    const socialMediaIcons = ['fa fa-linkedin', 'fa fa-github', 'fa fa-facebook', 'fa fa-instagram', 'fa fa-envelope'];

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
                        <span className='menu-item' key={idx} onClick={() => item.ref.current.scrollIntoView({ behavior: 'smooth' })}>{item.name}</span>

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
                    <div className='intro-wrapper'>
                        <p className='intro'>
                            <span className='intro-title'>
                                Hello there! I'm <span className=''>Akash Sapkota</span>, a
                                Barcelona-based code wizard specializing in{' '}
                                <span className=''>full-stack development</span>. How do I weave
                                this magic ? Let's uncover the secrets together!
                            </span>
                        </p>
                    </div>
                    <div className='sub-intro-wrapper'>
                        <p className='sub-intro'>
                            <span>
                                {' '}
                                The magic lies in building websites and web applications, creating
                                dynamic and responsive web solutions, and delivering{' '}
                                <span className=''>high-quality </span>
                                code and user-friendly{' '}
                                <span className='accent-element'>experiences.</span>
                            </span>
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
                    <div className='image-wrapper'>
                        <div className='container'>
                            <img src='/img.png' alt='Image' className='image' />
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
                <div className='skill-description'>
                    <i className='devicon-javascript-plain'></i>
                    <i className='devicon-mongodb-plain'></i>
                    <i className='devicon-react-plain'></i>
                    <i className='devicon-express-original'></i>
                    <i className='devicon-nodejs-plain'></i>
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
                                <h3>
                                    <span className='number'>{`0.${idx + 1} `}</span>
                                    {project.title}
                                </h3>
                                <span className='project-card-icons'>
                                    <i className='fa fa-github'></i>
                                    <i className='fa fa-external-link' aria-hidden='true'></i>
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
                            <a className='accent' href='mailto:akashh.sapkota@gmail.com'>
                                akashh.sapkota@gmail.com
                            </a>{' '}
                            or drop me a message using the form below.
                        </p>
                    </div>
                    <div className='form-wrapper left-gradient'>
                        <div className='form-wrapper-block'>
                            <form>
                                <div className='inline-group-input'>
                                    <div className='input-wrapper inline-group'>
                                        <label className='name-label'>
                                            <span className='material-symbols-outlined'>
                                                person
                                            </span>{' '}
                                        </label>
                                        <input spellCheck='false' type='text' placeholder='Name' />
                                    </div>
                                    <div className='input-wrapper inline-group'>
                                        <label className='email-label'>
                                            <span className='material-symbols-outlined'>mail</span>{' '}
                                        </label>
                                        <input spellCheck='false' type='text' placeholder='Email' />
                                    </div>
                                </div>
                                <div className='input-wrapper'>
                                    <label className='textarea-label'>
                                        <span className='material-symbols-outlined'>comment</span>{' '}
                                    </label>
                                    <textarea
                                        spellCheck='false'
                                        className='email'
                                        type='text'
                                        placeholder='Message'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`button-wrapper submit-button`}>
                    <div className='show-more'>Send</div>
                </div>
                <div className='footer-cc'>
                    <p>© Akash Sapkota, {new Date().getFullYear()} Made with Next.js</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
