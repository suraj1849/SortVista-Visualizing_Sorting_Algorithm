import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv>
     <p>
      Team Members :*Suraj Patil *Dhruv Sawant *Khushi Raval *Piyush Shah *Shreya *Dhruv Saini
     </p>
    </FooterDiv>
  );
}
