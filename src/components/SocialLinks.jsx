import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/ali-khalid1/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://www.github.com/mianalikhalid',
            
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:mianalikhalid2000@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '../assets/Ali_CV.docx',
            download: true,
        },
        {
            id: 5,
            child: (
                <>
                    Fiverr <TbBrandFiverr size={30} />
                </>
            ),
            href: 'https://www.fiverr.com/mianali_1',
            style: 'rounded-br-md'
        }
    ];

    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={`flex justify-center items-center w-40 h-14 px-4 bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] ml-[-100px] ${style}`}>
                        <a
                            href={href}
                            className="flex justify-between items-center text-white w-full"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
