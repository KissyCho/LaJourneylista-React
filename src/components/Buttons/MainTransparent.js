import React from "react";
import { MainTransparentButton } from "./styles";

const MainTransparent = ({children, className}) => {

  return <MainTransparentButton className={className}>{children}</MainTransparentButton>;
};

export default MainTransparent;
