import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Card from './Card';

export default function Characters() {
  const fetchCharacters = async () => {
    const { data } = await axios(`https://rickandmortyapi.com/api/character`);
    console.log(data);
    return data;
  };

  const { status, data, error } = useQuery('characters', fetchCharacters);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.results.map((character: any) => (
        <Card key={character.name} character={character} />
      ))}
    </div>
  );
}
