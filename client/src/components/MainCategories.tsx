import React, { useState } from "react";
import CustomButton from "./resubles/CustomButton";
import { BiSearch } from "react-icons/bi";

const MainCategories = () => {
  const [activeButton, setActiveButton] = useState<string>("All Posts");

  const handleButtonClick = (title: string) => {
    setActiveButton(title);
  };

  const buttons = [
    { title: "All Posts", variant: "category" },
    { title: "Design", variant: "category" },
    { title: "Web Development", variant: "category" },
    { title: "Artificial Intelligence", variant: "category" },
    { title: "Development", variant: "category" },
    { title: "Database", variant: "category" },
    
  ];

  return (
    <div className="bg-white rounded-3xl md:rounded-full px-3 md:px-6 py-3 min-h-[50px]">
        <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-x-5 md:gap-x-3 gap-y-4 items-center overflow-x-scroll w-full ">
            {buttons.map(({ title, variant }) => (
            <CustomButton
            className="text-md"
                key={title}
                title={title}
                variant={variant as "primary" | "category"}
                isActive={activeButton === title}
                onClick={() => handleButtonClick(title)}
            />
            ))}
            </div>
            <div className=" items-center gap-3 sm:flex hidden">
            <span className="block w-[2px] bg-gray-400 h-10"></span>
                <div className="flex items-center gap-3 bg-gray-100 py-3 px-3 rounded-full ml-auto lg:ml-[unset]">
                    <span><BiSearch size={17} color="gray" /></span>
                    <input type="text" placeholder="seaarch a post..." className="bg-transparent text-gray-500 font-extralight text-lg outline-none placeholder:text-gray-400 placeholder:font-light" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default MainCategories;
