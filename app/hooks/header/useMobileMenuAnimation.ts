import { MutableRefObject, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveLink, setMobileState } from "@/app/lib/redux/headerSlice"
import { RootState } from "@lib/types/ReduxTypes/HeaderTypes"
import gsap from "gsap"

export const useMobileMenuAnimation = (
  menuRef: MutableRefObject<HTMLDivElement | null>
) => {
  const dispatch = useDispatch()
  const mobileState = useSelector(
    (state: RootState) => state.header.mobileState
  )
  useEffect(() => {
    if (menuRef.current) {
      if (mobileState) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3 }
        )
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => {
            if (menuRef.current) {
              menuRef.current.style.display = "none"
            }
          },
        })
      }
    }

    const windowResize = () => {
      if (window.innerWidth >= 768) {
        dispatch(setMobileState(false))
      }
    }
    window.addEventListener("resize", windowResize)

    return () => window.removeEventListener("resize", windowResize)
  }, [mobileState, menuRef, dispatch])

  const handleLinkClick = (navLink?: string) => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      onComplete: () => {
        if (navLink) {
          dispatch(setActiveLink(navLink))
        }
        dispatch(setMobileState(!mobileState))
      },
    })
  }

  return handleLinkClick
}

