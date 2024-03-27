// @flow strict
import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";


function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <strong className="text-[#16f2b3]">Chris Lonzo</strong>
          </p>
          <div className="flex items-center gap-5">
          <Link target="_blank" href="https://github.com/achris-alonzo30/">
              <Tooltip title="https://github.com/achris-alonzo30/" placement="top">
              <IoLogoGithub
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={32}
              />
              </Tooltip>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/lonzochris/">
              <Tooltip title="https://www.linkedin.com/in/lonzochris/" placement="top">
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={32}
              />
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;