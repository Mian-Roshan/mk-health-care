import styled from "vue3-styled-components";

const StyledButton: any = styled.button`
  font-size: 1.5em;
  color: ${(props: any) => props.color};
`;

export default StyledButton;