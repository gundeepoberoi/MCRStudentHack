import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex border-t border-gray-100/50 mt-10 py-4 -mb-5 md:-mb-20">
      <div className="w-full mx-auto max-w-screen-2xl p-4 md:flex md:items-center md:justify-between">
        <p className="text-xs md:text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <Link href="https://mcrstudenthack.com/" className="hover:underline">
            StudentHack
          </Link>
          . All Rights Reserved.
          <br />
          Designed By: Gundeep Oberoi, Jacob Georgis, Yat Long Poon, Dhruv
          Sharma, Aadityaa Mehrotra, Jacob Yip and Hanin Amri.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
