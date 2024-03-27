// @flow strict
import Link from "next/link";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import { skillsImage } from "@/utils/skill-image";
import experience from "/public/lottie/code.json";
import { Tooltip } from "@mui/material";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Personal Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <Image
                        src={experience.logo}
                        alt="project logo"
                        width={30}
                        height={30}
                        className="flex-grow"
                      />
                      <div>
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-base sm:text-xl mb-2 font-medium">
                            {experience.name}
                          </p>
                          <div className="flex flex-row gap-4 items-center z-10">
                            <Link target="_blank" href={experience.githubLink}>
                              <Tooltip
                                title={experience.githubLink}
                                placement="top"
                              >
                                <IoLogoGithub
                                  className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                  size={32}
                                />
                              </Tooltip>
                            </Link>
                            <Link target="_blank" href={experience.link}>
                              <Tooltip title={experience.link} placement="top">
                                <CgWebsite
                                  className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                  size={32}
                                />
                              </Tooltip>
                            </Link>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base text-justify leading-6 tracking-tight">
                          {experience.description}
                        </p>
                        <div className="flex items-center gap-2 justify-evenly mt-8 z-10">
                          {experience.tools.map((tool, index) => (
                            <Tooltip
                              key={index}
                              title={tool}
                            >
                              <Image
                                src={skillsImage(tool)?.src}
                                alt="tool-image"
                                width={24}
                                height={24}
                                className="shadow-lg "
                              />
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
