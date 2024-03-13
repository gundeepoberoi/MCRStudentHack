import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 mb-[-10vh]">
      <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-xs md:text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <Link href="https://mcrstudenthack.com/" className="hover:underline">
            MCRStudentHack
          </Link>
          . All Rights Reserved.
          <br />
          Designed By: Gundeep Oberoi, Jacob Georgis, Yat Long Poon, Dhruv
          Sharma, Aadityaa Mehrohtra, Jacob Yip and Hanin Amri.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
