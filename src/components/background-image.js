import React from "react"
import backgroundStyles from "../pages/background-module.module.css"
import { css } from "@emotion/core"

export default ({ children }) => (
  <div className={backgroundStyles.backgroundImage} css={css`margin-top: 25px; width: 100%;`}>
        {children}
  </div>
)