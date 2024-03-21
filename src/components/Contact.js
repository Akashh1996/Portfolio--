'user client';

import { useState } from 'react';

const Contact = () => {
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

    return (
        <>
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
                        Whether you're ready to launch a project or simply want to connect, pop me a
                        message to{' '}
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
                                    fillOpacity={0.7}
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
                                    fillOpacity={0.7}
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
                                    fillOpacity={0.7}
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
        </>
    );
};

export default Contact;