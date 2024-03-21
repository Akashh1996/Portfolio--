'use client';

import techIcons from '@/utils/techIcons';
import Image from 'next/image';


const Skills = () => {
    return (
        <>
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
                        user-friendly interfaces. My focus lies in creating intuitive designs and
                        interactive elements that prioritize user experience and satisfaction
                        ensuring seamless navigation and accessibility across various devices and
                        browsers.
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
                        While my primary focus is on frontend development, I also possess skills in
                        backend development. I'm capable of building and maintaining server-side
                        logic and databases.
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
                        In addition to my development skills, I am proficient in utilizing various
                        tools and technologies that streamline the development process enabling
                        smooth transition from development to production environments, ensuring
                        seamless deployment of web applications.
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
                        width={30}
                        height={30}
                        quality={100}
                    />
                ))}
            </div>
        </>
    );
};

export default Skills;