import React from "react";
import { LabeledIcon } from "./../../components/IconsComponent";
import styled from "styled-components";

import {
  faAt,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;

  .labeled-icon {
    display: flex;
    padding: 3px 0px;
    width: 300px;
    justify-content: ${({ align }) => align || "flex-start"};
    .icon {
      display: ${({ visibleIcons }) => (visibleIcons ? "flex" : "none")};
    }
  }

  @media (min-width: 768px) {
    padding: 5px;
    width: 100%;
    justify-content: flex-start;
    align-items: ${({ align }) => align || "flex-start"};
  }
`;

export default ({
  email,
  phoneNumber,
  address,
  align,
  visibleIcons = true
}) => (
  <ContactDetails align={align} visibleIcons={visibleIcons}>
    {phoneNumber && <LabeledIcon icon={faPhoneAlt} label={phoneNumber} />}
    {address && <LabeledIcon icon={faMapMarkerAlt} label={address} />}
    {email && <LabeledIcon icon={faAt} label={email} />}
  </ContactDetails>
);
