import React from 'react';

type NavLinkProps = {
    menu: string;
    isActive: boolean;
    onClick: () => void;
};

const NavLink = ({ menu, isActive, onClick }: NavLinkProps) => {
    return (
        <div
            className={`rounded-sm transition duration-200 py-[5px] px-[20px] hover:bg-bgColor hover:text-textColor cursor-pointer ${isActive ? 'bg-bgColor text-textColor' : ' text-white'}`}
            onClick={onClick} 
        >
            {menu}
        </div>
    );
};

export default NavLink;