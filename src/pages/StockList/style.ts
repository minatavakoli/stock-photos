import styled from "@emotion/styled";

export const StyledTemplate = styled.article`
  .description-box {
    opacity: 0;
    transition: 0.3s;
  }
  &:hover .description-box {
    opacity: 1;
    transform: translateY(-100%);
  }
`;
