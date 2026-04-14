import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { TbXboxXFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]  text-center p-5  '>
        <div className='space-y-3 pt-7 '>
                <h1 className='text-5xl font-bold text-white'>KeenKeeper</h1>
            <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-white font-semibold text-xl'>Social Links</p>
            <div className='flex gap-2 justify-center mt-2'>
                <AiFillInstagram className='bg-white rounded-full w-8 h-8 p-1'></AiFillInstagram>
                <FaFacebookSquare className='bg-white rounded-full w-8 h-8 p-1'></FaFacebookSquare>
                <TbXboxXFilled className='bg-white rounded-full w-8 h-8 p-1 mb-5'></TbXboxXFilled>

            </div>
            <div className='flex justify-between container mx-auto pt-10 border-t border-[#2f5a4c]'>
                <p className='text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</p>

                <div className='text-[#FAFAFA]'>
                   <p> Privacy Policy           Terms of Service           Cookies</p>
                </div>
     
            </div>
        </div>
        </div>
    );
};

export default Footer;