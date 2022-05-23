import React from "react"
import { AppProps } from "next/app"
import Provider from "../provider"

function MyApp({ Component, pageProps }) {
  return 
  (
    <>
    <Provider>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}

export default MyApp
