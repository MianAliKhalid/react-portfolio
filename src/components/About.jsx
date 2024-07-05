import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a dedicated Full Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I have successfully delivered numerous projects that meet the highest standards of quality and performance.
        </p>

        <br />

        <p className="text-xl">
         My expertise lies in utilizing modern frameworks and libraries to build scalable and efficient solutions. I am always eager to learn new technologies and take on challenging projects that push the boundaries of my skillset..
        </p>
      </div>
    </div>
  )
}

export default About