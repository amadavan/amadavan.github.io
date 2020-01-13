import "../scss/_app.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import React from "react"
import Header from "./header.js"

library.add(fab)


export default ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
)