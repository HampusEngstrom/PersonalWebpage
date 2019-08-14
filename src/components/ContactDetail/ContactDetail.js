import React from "react";
import { LabeledIcon } from "./../IconsComponent";

const ContactDetails = ({ icon, label }) => (
  <LabeledIcon className={"labeled-icon"} icon={icon} label={label} />
);

export default ContactDetails;
