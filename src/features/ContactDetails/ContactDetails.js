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
  padding: 1vh 1vh 1vh 1vh;

  .labeled-icon {
    display: flex;
    padding: 5px 0px;
  }

  @media (min-width: 768px) {
    padding: 5px;
    width: 100%;
  }
`;

export default ({ email, phoneNumber, address }) => (
  <ContactDetails>
    <LabeledIcon icon={faAt} label={email} />
    <LabeledIcon icon={faPhoneAlt} label={phoneNumber} />
    <LabeledIcon icon={faMapMarkerAlt} label={address} />
  </ContactDetails>
);
