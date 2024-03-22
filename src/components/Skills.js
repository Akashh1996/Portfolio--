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
                    <h2> Frontend</h2>
                    <p className='skill-frontend-description'>
                        On the frontend, I specialize in creating visually appealing and
                        user-friendly interfaces. My focus lies in creating intuitive designs and
                        interactive elements that prioritize user experience and satisfaction
                        ensuring seamless navigation and accessibility across various devices and
                        browsers.
                    </p>
                    <ul className='skill-frontend'>
                        <li>JavaScript</li>
                        <li className='accent'>React</li>
                        <li>Flux</li>
                        <li className='accent'>Redux</li>
                        <li>React Testing Library</li>
                        <li className='accent'>Jest</li>
                        <li>Graphql</li>
                        <li>Turbo</li>
                        <li className='accent'>NextJS</li>
                        <li>Core web vitals</li>
                    </ul>
                </div>
                <div className='skill-section left-gradient'>
                    <h2>Backend</h2>
                    <p className='skill-backend-description'>
                        While my primary focus is on frontend development, I also possess skills in
                        backend development. I'm capable of building and maintaining server-side
                        logic and databases.
                    </p>
                    <ul className='skill-frontend'>
                        <li className='accent'>Express</li>
                        <li>Node</li>
                        <li>Mongoose</li>
                        <li className='accent'>Mongodb</li>
                        <li>Mocha</li>
                        <li>Rest api</li>
                        <li>Redis</li>
                        <li>Php</li>
                        <li>Jwt</li>
                    </ul>
                </div>
                <div className='skill-section left-gradient'>
                    <h2>Tools and other</h2>
                    <p className='skill-other-description'>
                        In addition to my development skills, I am proficient in utilizing various
                        tools and technologies that streamline the development process enabling
                        smooth transition from development to production environments, ensuring
                        seamless deployment of web applications.
                    </p>
                    <ul className='skill-frontend'>
                        <li>Github</li>
                        <li className='accent'>Git</li>
                        <li>Bitbucket</li>
                        <li>Newrelic</li>
                        <li className='accent'>Scrum</li>
                        <li>Lighthouse</li>
                        <li>Browserstack</li>
                        <li className='accent'>Jira</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                        <li>Docker</li>
                    </ul>
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
