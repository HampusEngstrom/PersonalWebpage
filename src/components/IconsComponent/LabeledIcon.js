import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContainer, IconTextContainer } from ".";

const LabeledIcon = ({ label, icon }) => (
  <div className="labeled-icon">
    <IconContainer>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
    <IconTextContainer>{label}</IconTextContainer>
  </div>
);

export default LabeledIcon;
