import React from "react";
import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineFeedback,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { HiFire } from "react-icons/hi";
import { RiFlagFill, RiShoppingBag2Line } from "react-icons/ri";
import { CgMusicNote } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { ImNewspaper } from "react-icons/im";
import { BsTrophy, BsYoutube } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
import { GiClothesline } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiHelpAlt } from "react-icons/tfi";
import { IconProps } from "../types/types";

const Icon: React.FC<IconProps> = ({ iconName, ...props }) => {
  switch (iconName) {
    case "Home":
      return <MdHomeFilled {...props} />;
    case "Explore":
      return <MdOutlineExplore {...props} />;
    case "Shorts":
      return <MdOutlineExplore {...props} />;
    case "Subscriptions":
      return <MdOutlineSubscriptions {...props} />;
    case "Library":
      return <MdOutlineVideoLibrary {...props} />;
    case "History":
      return <VscHistory {...props} />;
    case "Trending":
      return <HiFire {...props} />;
    case "Shopping":
      return <RiShoppingBag2Line {...props} />;
    case "Music":
      return <CgMusicNote {...props} />;
    case "Gaming":
      return <SiYoutubegaming {...props} />;
    case "News":
      return <ImNewspaper {...props} />;
    case "Sport":
      return <BsTrophy {...props} />;
    case "Learning":
      return <AiOutlineBulb {...props} />;
    case "Fashion & Beauty":
      return <GiClothesline {...props} />;
    case "Premium":
      return <BsYoutube {...props} />;
    case "Creator":
      return <BsYoutube {...props} />;
    case "Music":
      return <BsYoutube {...props} />;
    case "Kids":
      return <BsYoutube {...props} />;
    case "TV":
      return <BsYoutube {...props} />;
    case "Settings":
      return <VscSettingsGear {...props} />;
    case "Report history":
      return <RiFlagFill {...props} />;
    case "Help":
      return <TfiHelpAlt {...props} />;
    case "Send feedback":
      return <MdOutlineFeedback {...props} />;
    default:
      return null;
  }
};

export default Icon;
