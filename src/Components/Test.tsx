import { useState } from "react";
import styled from "styled-components";
export const Test: React.FC = () => {
  const [libs] = useState([
    { id: 1, libb: "aos", children: "js" },
    { id: 2, libb: "threejs", children: "js" },
    { id: 3, libb: "tiny", children: "js" },
  ]);
  return (
    <Container>
      <Ul>
        {libs.map((lib) => (
          <Li key={lib.id}>
            {lib.libb} {lib.children}
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid green;
`;

const Ul = styled.ul``;

const Li = styled.li``;
