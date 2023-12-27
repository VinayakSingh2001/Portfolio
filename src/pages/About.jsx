import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100" id="aboutPage">
        <div className="max-w-3xl bg-white p-8 rounded-md shadow-md">
          <div className="text-center mb-6">
            <img
              src="https://media1.popsugar-assets.com/files/thumbor/uEk2QaUxxwC7Fw2ba-O-Sh51ME8/144x306:3064x3226/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/26/043/n/1922398/9e0a852e5dddbd0c6d8984.08741543_/i/Joe-Jonas.jpg" // Replace with the path to your circular profile image
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-800">Vinayak Singh</h1>
            <p className="text-gray-600">Web Developer</p>
          </div>

          <div className="text-gray-700">
            <p>
              Hello! I'm a passionate web developer with expertise in creating responsive and user-friendly web applications.
            </p>
            <p>
              I specialize in front-end technologies like React and enjoy turning ideas into reality through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying a good cup of coffee.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default About
