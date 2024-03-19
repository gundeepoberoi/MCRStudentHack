import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
    return (
        <div id="socials" className="mt-10 text-cyan-100 flex flex-row gap-10">
            <Link href={"https://www.instagram.com/unics_hackathons/"} target="_LINK" rel="noreferrer">
                <FaInstagram size={40} className="hover:text-cyan-300 transition duration-500" />
            </Link>
            <Link href={"https://www.linkedin.com/company/unics-hackathons/"} target="_LINK" rel="noreferrer">
                <FaLinkedin size={40} className="hover:text-cyan-300 transition duration-500" />
            </Link>

            <Link href={"https://twitter.com/UniCSHackathons"} target="_LINK" rel="noreferrer">
                <FaXTwitter size={40} className="hover:text-cyan-300 transition duration-500" />
            </Link>
        </div>
    )


}