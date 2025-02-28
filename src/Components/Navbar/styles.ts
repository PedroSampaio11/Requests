import styled from "styled-components";

export const NavbarContainer = styled.section`
  padding: 2rem 4rem;
  display: flex;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    gap: 2rem;
    font-size: 1rem;
    color:#dfdedf;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  li:hover{
    filter: brightness(1.1);
    cursor: pointer;
  }
  li:first-child{
    color:#ED145B;
    font-weight: 600;
    font-size: 1rem;
    filter: brightness(1);
    text-shadow: 0 0 11px rgba(237, 20, 92, 0.55);
  }
  a{
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.purple500};
    font-weight: 600;
    border: 2px solid;
    border-radius: 100%;
    padding: 1rem;
    box-shadow: 0 0 11px 2px rgba(237, 20, 92, 0.44);
    text-shadow: 0 0 11px rgba(237, 20, 92, 0.55);
  }
`;
