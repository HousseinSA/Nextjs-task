"use client"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "@lib/redux/store"

interface HeaderWrapperProps {
  children?: ReactNode
}

const HeaderWraper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default HeaderWraper
