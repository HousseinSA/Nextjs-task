import React from "react"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={"/"} className=" w-[100px] md:w-[150px] pointer-events-none">
      <Image
        className="md:w-40"
        width={200}
        height={200}
        alt="techno-trans logo"
        src={"/logo.webp"}
      />
    </Link>
  )
}

export default Logo
