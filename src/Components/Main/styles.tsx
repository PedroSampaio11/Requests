import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  padding: 2rem 4rem;
  color: #d4d4d4;
  height: 600px;
  button{
    padding: .8rem 4rem;
    border: 2px solid #ED145B;
    color: #ED145B;
    margin-top: 1rem;
    border-radius: 8px;
    background-color: transparent;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover{
      background-color: #ED145B;
      color: #d4d4d4;
      border: 2px solid transparent;
    }
  }
  h1{
    animation: test 7s forwards ;
    font-size: 1rem;
    @keyframes test {
      0%{
        opacity: 0;
      }50%{
        opacity: .5;
      }100%{
        opacity: 1;
      }
    }
    }
`;
