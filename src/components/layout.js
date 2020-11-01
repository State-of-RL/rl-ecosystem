import React from "react"
import PropTypes from "prop-types"

import Header from "./header"



const Layout = ({ children, readingMode }) => {
 
    return (
      <>
        <Header siteTitle="Something" />
        <div
          className={"container px-2 mx-auto " + (readingMode && " max-w-2xl")}
        >
          <main>{children}</main>
        </div>
        {/* <Footer /> */}
      </>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout