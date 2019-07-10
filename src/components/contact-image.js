import React from "react"
import contactStyles from "../pages/background-module.module.css"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div className={contactStyles.backgroundImage3} css={css`margin-top: 25px; width: 100%;`}>
        {children}
  </div>
)