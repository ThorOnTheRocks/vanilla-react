import React, { useState } from 'react';

import Pet from "./Pet";
import Pagination from "./Pagination";
import { paginatePets } from './helpers';

const Results = ({ pets }) => {
  const [activePage, setActivePage] = useState(1);
  const petsPerPage = 4;
  const calculatedPets = paginatePets(pets, activePage, petsPerPage);
  const count = pets.length;
  const totalPages = Math.ceil(count / petsPerPage);

  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        calculatedPets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            key={pet.id}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        petsPerPage={petsPerPage}
        count={count}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Results;