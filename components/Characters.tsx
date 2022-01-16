import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Card from './Card';

export default function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({
    queryKey,
  }: {
    queryKey: Array<string | number>;
  }) => {
    console.log(queryKey);
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    // console.log(data);
    return data;
  };

  const { status, data, isPreviousData, isLoading, isError } = useQuery(
    ['characters', page],
    fetchCharacters,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.results.map((character: any) => (
        <Card key={character.name} character={character} />
      ))}
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          이전
        </button>
        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((prev) => prev + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
}
