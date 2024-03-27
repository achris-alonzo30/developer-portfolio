// @flow strict
import Image from "next/image";

import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/certification.json';
import { certificates } from "@/utils/data/certificates";

function Certification() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {
                certificates.map(certificate => (
                  <GlowCard key={certificate.id} identifier={`education-${certificate.id}`}>
                    <div className="p-3 relative text-white h-full">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          Completed In <span className="font-bold text-[#16f2b3] underline">{certificate.dateCompletion}</span>
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <Image src={certificate.logo} alt="course-logo" height={96} width={96} />
                        </div>
                        <div className="z-10">
                          <Link target="_blank" href={certificate.link} className="flex flex-row items-center justify-between mb-2 hover:text-[#16f2b3] z-10">
                            <p className="text-base sm:text-xl font-medium uppercase">{certificate.name}</p>
                            <FaLongArrowAltRight size={24} />
                          </Link>
                          <p className="text-sm sm:text-base text-justify leading-6 tracking-tight">{certificate.description}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
        </div>
      </div>
    </div>
  );
};

export default Certification;