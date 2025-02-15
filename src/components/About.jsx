import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' name="about">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold  inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='text-xl mt-20'>Hey, I'm Bhanu Prakash Sakinala, a computer science graduate student at University of Cincinnati. I’m an full stack developer enthusiast, with interests in data structures, algorithms and machine learning. Problem solving is something I thrive on and have a thirst for new technologies and programming languages </p>
                <br />
                <p className='text-xl'>I have 1 years of professional working experience as a full stack developer where i mostly worked on tech stacks like Angular, Typescript, Spring, Java </p>
            </div>
        </div>
    )
}

export default About
