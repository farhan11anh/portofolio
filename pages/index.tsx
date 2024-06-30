import type { NextPage } from "next";
import profile from "../public/profile_pic.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { createElement } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <motion.div
      className="w-11/12 max-w-sm  lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 }
      }}
      initial="hidden"
      animate="enter"
    >
      <Head>
        <title>Muhammad Farhan Ananto | About me</title>
      </Head>

      {/* Intro */}
      <div className="flex justify-between pt-4">
        <div>
          <h1 className="text-4xl font-bold  dark:text-neutral-200 text-neutral-800">Muhammad Farhan Ananto</h1>
          <p className="dark:text-neutral-200 text-neutral-800">
            Software Engineer (Frontend Engineer) <br />
            📍 Yogyakarta id <br />
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 tracking-wide text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="mailto: muhammad.farhan.ana@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              muhammad.farhan.ana@gmail.com
            </a>
          </p>
        </div>
        {/* prof pic */}
        <div className="flex h-fit w-24 overflow-hidden rounded-full border-2">
          <a
            draggable={false}
            target="_blank"
            href="https://www.linkedin.com/in/muhammad-farhan-ana//"
            rel="noreferrer"
          >
            <div className="group flex items-center justify-center">
              <Image
                width="100%"
                height="100%"
                className="rounded-full duration-200 ease-linear group-hover:blur-sm"
                src={profile.src}
                alt="prof-pic"
                draggable={false}
              />
              <FaLinkedin
                className="invisible absolute text-white opacity-0 duration-200 ease-linear group-hover:visible group-hover:opacity-100"
                size={28}
              />
            </div>
          </a>
        </div>
      </div>
      {/* About */}
      <div className="mt-4 flex flex-col">
        <h3
          className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-800 after:dark:bg-zinc-500">
          About
        </h3>
        <p className="text-justify tracking-wide dark:text-neutral-200 text-neutral-800">
          Experienced Web Developer especially Frontend Developer hands-on experience in Angular, Nuxt.js, and Next.js. Graduated with a background in HTML, CSS, and JavaScript, rapidly advancing skills through practical projects. Proficient in creating robust applications such as Jesica AI, ERM (Risk Management), TMA (Asset Management) using Nuxt 3, and SAK EP (Financial Statements) with Angular. Skilled in backend integration and API development, contributing to projects like XL Supercharge Management and various modules of Lumintu Liberate LMS. Proven ability to collaborate effectively in team environments and deliver high-quality solutions aligned with client requirements.
        </p>
      </div>
      {/* Bio */}
      <div className="mt-4 flex flex-col">
        <h3
          className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-800 after:dark:bg-zinc-500">
          Bio
        </h3>
        <div className="grid grid-cols-[1fr_3fr] gap-4">
          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2000</div>
          <p className="dark:text-neutral-200 text-neutral-800">Born in Sleman, Yogyakarta.</p>

          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2019</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            Started studying Computer Science at University Amikom Yogyakrta
          </p>

          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2021</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            Intern at {" "} 
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://sevenpion.co.id/"
              target="_blank"
              rel="noreferrer"
            >
              Sevenpion (CV. Media Inovasi Berkarya)
            </a> as Frontend Developer
          </p>

          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2022</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            Working as a Frontend engineer at {" "}
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://lumintu-logic.com/"
              target="_blank"
              rel="noreferrer"
            >
              Lumintu Logic
            </a> as Developer (Kampus Merdeka Program)
          </p>
          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2022</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            participating in the Angular bootcamp at {" "}
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://zettabyte.life/"
              target="_blank"
              rel="noreferrer"
            > Zettabyte
            </a>
             in the Zettacamp program.
          </p>

          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2023</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            Work as a Frontend Engineer at {" "}
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://javan.co.id/"
              target="_blank"
              rel="noreferrer"
            >
              Javan
            </a>
          </p>

          <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2023</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            Work as a Frontend Engineer at {" "}
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://www.telkomsigma.co.id/"
              target="_blank"
              rel="noreferrer"
            >
              Telkomsigma
            </a>
          </p>
          {/* <div className="w-fit font-bold dark:text-neutral-200 text-neutral-800">2024</div>
          <p className="dark:text-neutral-200 text-neutral-800">
            Started studying Computer Science at University Siber Asia
          </p> */}

          


        </div>
      </div>
      {/* Social media */}
      <div className="mt-4 flex flex-col">
        <h3
          className="mb-2 w-fit text-xl font-bold after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-neutral-200 text-neutral-800 after:dark:bg-zinc-500">
          On the web
        </h3>
        <div className="flex flex-col">
          <MediaLink
            icon={() => <FaLinkedin />}
            text="@muhammad-farhan-ana"
            mediaLink="https://www.linkedin.com/in/muhammad-farhan-ana/"
          />
          <MediaLink
            icon={() => <FaGithub />}
            text="@farhan11anh"
            mediaLink="https://github.com/farhan11anh"
          />
          <MediaLink
            icon={() => <FaInstagram />}
            text="@farhan_twist"
            mediaLink="https://www.instagram.com/farhan_twist/"
          />
        </div>
      </div>
    </motion.div>
  );
};

interface mediaLinkProps {
  icon: IconType;
  mediaLink: string;
  text: string;
}

const MediaLink = ({ icon, mediaLink, text }: mediaLinkProps) => {
  return (
    <a
      draggable={false}
      target="_blank"
      href={mediaLink}
      className="group flex w-fit items-center rounded-md py-2 px-3 duration-200 ease-linear hover:bg-sky-200 hover:bg-opacity-60 dark:hover:bg-teal-200 dark:hover:bg-opacity-20"
      rel="noreferrer"
    >
      <div
        className="text-sky-500 duration-200 ease-linear group-hover:text-sky-600 dark:text-teal-300 dark:group-hover:text-teal-200">
        {createElement(icon)}
      </div>
      <p
        className="ml-2 inline-block origin-bottom-right indent-0 text-sky-500 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 group-hover:text-sky-600 group-hover:after:scale-100  group-hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 dark:group-hover:text-teal-200 dark:group-hover:after:bg-teal-200">
        {text}
      </p>
    </a>
  );
};

export default Home;
