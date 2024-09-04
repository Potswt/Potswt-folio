"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/potsawat-kps-2259932b3/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Potswt",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100007695038868",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com/nnine_pot/",
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
