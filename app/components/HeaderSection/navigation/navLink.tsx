import React from 'react';

type NavLinkProps = {
    menu: string;
    isActive: boolean;
    onClick: () => void;
};

const NavLink = ({ menu, isActive, onClick }: NavLinkProps) => {
    return (
        <div
            className={`rounded-sm transition duration-200 py-[5px] px-[20px] hover:bg-[#e5e7eb] hover:text-[#0f172a] cursor-pointer ${isActive ? 'bg-[#e5e7eb] text-[#0f172a]' : ' text-white'}`}
            onClick={onClick} 
        >
            {menu}
        </div>
    );
};

export default NavLink;