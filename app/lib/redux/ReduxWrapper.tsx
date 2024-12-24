"use client"
import React from "react"
import { Provider } from "react-redux"
import store, { persistor } from "@/app/lib/redux/store"
import { PersistGate } from "redux-persist/integration/react"

interface ReduxWrapperProps {
  children?: ReactNode
}

const ReduxWrapper: React.FC<ReduxWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxWrapper
