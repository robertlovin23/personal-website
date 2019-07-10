import React from "react"
import skillStyles from "../pages/background-module.module.css"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div className={skillStyles.backgroundImage2} css={css`margin-top: 25px; width: 100%;`}>
        {children}
  </div>
)