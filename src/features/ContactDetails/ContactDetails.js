import React from "react";
import { ContactDetail } from "./../../components/ContactDetail";
import styled from "styled-components";
import {
  faAt,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 1vh 1vh 1vh;
  @media (min-width: 768px) {
    padding: 5px;
    width: 100%;
  }
`;

export default ({ email, phoneNumber, address }) => (
  <ContactDetails>
    <ContactDetail label={email} icon={faAt} />
    <ContactDetail label={phoneNumber} icon={faPhoneAlt} />
    <ContactDetail label={address} icon={faMapMarkerAlt} />
  </ContactDetails>
);
