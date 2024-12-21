import React from "react";
import styled from "styled-components";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/views/ThemedView";

const ExploreScreen = () => {
  return (
    <Container>
      <Title>Explore screen</Title>
    </Container>
  );
};

const Container = styled(ThemedView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled(ThemedText)`
  ${({ theme }) => theme.typography.heading_special_lg};
`;

export default ExploreScreen;
