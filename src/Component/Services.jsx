import React, { useState } from "react";
import * as serviceStyle from "./services.module.css";
import { FaToolbox, FaBath } from "react-icons/fa";
import { AiOutlineClear, AiTwotoneTool } from "react-icons/ai";
import { GiHeatHaze, GiPipes } from "react-icons/gi";
import { MdKitchen } from "react-icons/md";
import ScrollMenu from "react-horizontal-scrolling-menu";

const list = [
  "Drain Cleaning",
  "Water Heaters",
  "Faucets and fixtures",
  "Bathroom Repipe",
  "Kitchen Disposals",
  "Drain Clog or Blockage - Clear",
  "Sewer Main Line - Clear",
];

const icons = [
  <AiOutlineClear />,
  <GiHeatHaze />,
  <FaToolbox />,
  <FaBath />,
  <MdKitchen />,
  <GiPipes />,
  <AiTwotoneTool />,
];

const MenuItem = ({ text, icon }) => {
  console.log(icon);
  return (
    <div className={serviceStyle.item}>
      {icon}
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "", className: "arrow-prev" });
const ArrowRight = Arrow({ text: "", className: "arrow-next" });

const Menu = (list, selected, icons) =>
  list.map((ser, index) => (
    <MenuItem text={ser} key={ser} icon={icons[index]} selected={selected} />
  ));

export default function Services() {
  const [selected, setSelected] = useState("Drain Cleaning");

  const menu = Menu(list, selected, icons);
  const onSelect = (key) => {
    setSelected(key);
  };
  return (
    <div className={serviceStyle.serviceParent} id="services">
      <h2 className={serviceStyle.name}>Services</h2>
      <div className={serviceStyle.parent}>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
