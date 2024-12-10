import Link from "next/link"

const NavLink = ({
  navLink,
  handelActive,
  isActive,
}: {
  navLink: string
  handelActive: (active: string) => void
  isActive: boolean
}) => {
  const baseClasses = " cursor-pointer  py-1.5 px-5"
  const activeLink = "rounded text-textColor bg-bgColor border-none"

  const inActiveLink =
    "border-b-2 border-transparent hover:border-gray-700 hover:text-gray-400 "

  return (
    <li
      className={` ${baseClasses} ${isActive ? activeLink : inActiveLink}`}
      onClick={() => handelActive(navLink)}
    >
      <Link href="/" draggable={false}>
        {navLink}
      </Link>
    </li>
  )
}

export default NavLink
