import React from "react";
import styled from "styled-components";

const BrowseJobsButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        Browse Jobs
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px 25px;
    background: transparent;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    box-shadow: 0 0 15px #8707ff inset;
    transform: scale(1.05);
  }

  .button:active {
    box-shadow: 0 0 20px #8707ff inset;
    transform: scale(0.98);
  }
`;

export default BrowseJobsButton;