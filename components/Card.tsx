import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  margin: 1rem 0;
  img {
    border-radius: 15px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Card({ character }: { character: any }) {
  return (
    <CardWrapper>
      <Image
        src={character.image}
        alt={`character ${character.name} image`}
        width={200}
        height={200}
      />
      <ContentWrapper>
        <h2>{character.name}</h2>
        <p>
          {character.status} - {character.species}
        </p>
        <p>{character.location.name}</p>
      </ContentWrapper>
    </CardWrapper>
  );
}
