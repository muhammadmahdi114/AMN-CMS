import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [tableghaatShowSubMenu, setTableghaatShowSubMenu] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = useMemo(() => [
        {
            id: 1,
            name: "Dashboard",
            activeIcon: "/active.svg",
            inactiveIcon: "/inactive.svg",
        },
        {
            id: 2,
            name: "Taaruf",
            activeIcon: "/active.svg",
            inactiveIcon: "/inactive.svg",
        },
        {
            id: 3,
            name: "Tazakuraat",
            activeIcon: "/active.svg",
            inactiveIcon: "/inactive.svg",
        },
        {
            id: 4,
            name: "Munasibaat",
            activeIcon: "/active.svg",
            inactiveIcon: "/inactive.svg",
        },
        {
            id: 5,
            name: "Tableghaat",
            activeIcon: "/active.svg",
            inactiveIcon: "/inactive.svg",
        },
    ], []);

    const tableghaatSubMenuItems = useMemo(() => [
        { id: 1, name: "Noor Diary", nav: "noor-diary" },
        { id: 2, name: "Mujjalah", nav: "mujjalah" },
        { id: 3, name: "Noor", nav: "noor" },
    ], []);

    useEffect(() => {
        const path = location.pathname.split("/")[1];
        const foundMenuItem = menuItems.find(
            (item) => item.name.toLowerCase().replace(/ /g, "-") === path
        );

        if (foundMenuItem) {
            setActiveSection(foundMenuItem.name);
            if (foundMenuItem.name === "Tableghaat") {
                setTableghaatShowSubMenu(true);
            } else {
                setTableghaatShowSubMenu(false);
            }
        } else {
            setActiveSection("");
            setTableghaatShowSubMenu(false);
        }
    }, [location.pathname, menuItems]);

    const handleMainItemClick = (itemName) => {
        setActiveSection(itemName);

        if (itemName === "Tableghaat") {
            setTableghaatShowSubMenu(!tableghaatShowSubMenu);
        } else {
            setTableghaatShowSubMenu(false);
            const formattedRoute = itemName.toLowerCase().replace(/ /g, "-");
            navigate(`/${formattedRoute}`);
        }
    };

    const handleTableghaatSubItemClick = (subItemNav) => {
        setActiveSection("Tableghaat");
        navigate(`/${subItemNav}`);
    };

    return (
        <div className="fixed left-0 top-0 bg-white w-60 min-h-screen flex flex-col overflow-y-auto">
            <h1 className="text-2xl text-primary font-krona font-bold border-b p-6 mb-5">AMN | CMS</h1>
            {menuItems.map((item) => (
                <div key={item.id} className="my-2">
                    <button
                        onClick={() => handleMainItemClick(item.name)}
                        className={`flex items-center text-sm gap-x-2 px-6 py-2 w-full ${item.name === activeSection ||
                            (item.name === "Tableghaat" && tableghaatShowSubMenu)
                            ? "border-l-4 border-primary bg-gray-50"
                            : ""
                        }`}
                    >
                        <img
                            src={
                                item.name === activeSection ||
                                (item.name === "Tableghaat" && tableghaatShowSubMenu)
                                    ? item.activeIcon
                                    : item.inactiveIcon
                            }
                            alt={item.name}
                        />
                        <span>{item.name}</span>
                        {item.name === "Tableghaat" && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-4 h-4 ml-2 transition-transform ${tableghaatShowSubMenu
                                    ? "transform rotate-180"
                                    : ""
                                }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Tableghaat Sub Menu */}
                    {item.name === "Tableghaat" && tableghaatShowSubMenu && (
                        <div className="py-2 space-y-2 pl-4">
                            {tableghaatSubMenuItems.map((subItem) => (
                                <button
                                    key={subItem.id}
                                    onClick={() => handleTableghaatSubItemClick(subItem.nav)}
                                    className={`flex items-center text-sm gap-x-2 px-6 py-2 w-full ${`/${subItem.nav}` === location.pathname
                                        ? "border-l-4 -ml-4 border-primary bg-gray-50"
                                        : ""
                                    }`}
                                >
                                    <p className="font-bold">
                                        &gt; <span className="font-normal ml-1">{subItem.name}</span>
                                    </p>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NavBar;
