"use client"
import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "@lib/redux/store"

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
