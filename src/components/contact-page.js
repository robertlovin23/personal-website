import React from "react"
import pageStyles from "../pages/background-module.module.css"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div className={pageStyles.backgroundImage4} css={css`margin-top: 25px; width: 100%;`}>
        {children}
  </div>
)