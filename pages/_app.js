import React from "react";

import '../styles/globals.css'
import '../styles/react-datetime.css'
function MyApp({ Component, pageProps }) {
  return(
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
        )
}

export default MyApp
