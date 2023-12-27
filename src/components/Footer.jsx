import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='flex flex-col bg-[#0B0B0B]'>
            <div className="flex flex-col md:flex-row justify-center gap-7 px-5 py-4">
                <div className="bg-[#e9ecef] flex items-center rounded-full p-2 cursor-pointer hover:bg-gray-300 hover:text-black">
                    <FaInstagram className="text-black text-md mx-2" />
                    <h3 className='pr-3 text-black text-[13px]'>Instagram</h3>
                </div>
                <div className="bg-[#e9ecef] rounded-full p-2 items-center flex cursor-pointer hover:bg-gray-300 hover:text-black">
                    <FaLinkedin className="text-black text-md mx-2" />
                    <h3 className='pr-3 text-black text-[13px]'>LinkedIn</h3>
                </div>
                <div className="bg-[#e9ecef] rounded-full flex p-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black">
                    <FaTwitter className="text-black text-md mx-2" />
                    <h3 className='pr-3 text-black text-[13px]'>Twitter</h3>
                </div>
                <div className="bg-[#e9ecef] rounded-full flex p-2 items-center cursor-pointer hover:bg-gray-300 hover:text-black">
                    <FaGithub className="text-black text-md mx-2" />
                    <h3 className='pr-3 text-black text-[13px]'>Github</h3>
                </div>
            </div>
            <div>
                {/* Your additional content goes here */}
            </div>
        </div>

    );
};

export default Footer;
