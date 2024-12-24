"use client"
import React from "react"
import { Provider } from "react-redux"
import store from "@/app/lib/redux/store"

interface ReduxWrapperProps {
  children?: React.ReactNode
}

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxWrapper
