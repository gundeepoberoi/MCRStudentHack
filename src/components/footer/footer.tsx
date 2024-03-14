import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="rounded-lg shadow m-4 dark:bg-gray-800 mb-[-10vh]">
            <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2024 <a href="https://mcrstudenthack.com/" className="hover:underline">MCRStudentHack</a>. All Rights Reserved.
                    <br />
                    Designed By: Gundeep Oberoi, Jacob Georgis, Yat Long Poon, Dhruv Sharma, Aadityaa Mehrohtra, Jacob Yip and Hanin Amri.
                </span>
            </div>

        </footer>
    );
};

export default Footer;