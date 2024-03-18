
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function Socials() {
    return (
      <section id="socials" className="flex flex-row gap-10 mt-10">
          <Link href={"https://www.instagram.com/unics_hackathons/"} target="_LINK" rel="noreferrer">
            <FaInstagram size={40} className="text-cyan-100 hover:text-cyan-300 transition duration-500"/>
          </Link>
          <Link href={"https://www.linkedin.com/company/unics-hackathons/"} target="_LINK" rel="noreferrer">
            <FaLinkedin size={40} className="text-cyan-100 hover:text-cyan-300 transition duration-500"/>
          </Link>
          <Link href={"https://twitter.com/UniCSHackathons"} target="_LINK" rel="noreferrer">
            <FaTwitter size={40} className="text-cyan-100 hover:text-cyan-300 transition duration-500"/>
          </Link>
      </section>
    );
}