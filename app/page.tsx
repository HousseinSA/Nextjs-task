import Header from "@components/HeaderSection/header"
import HeaderWraper from "@components/HeaderSection/HeaderWrapper"
import HeroSection from "./components/HeroSection/HeroSection"

export default function Home() {
  return (
    <>
      <HeaderWraper>
        <Header />
      </HeaderWraper>
      <HeroSection />
    </>
  )
}
