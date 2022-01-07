import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Pagination = ({ activePage, setActivePage, count, petsPerPage, totalPages }) => {
  const beginning = activePage === 1 ? 1 : petsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + petsPerPage - 1;
  const [theme] = useContext(ThemeContext);
  return (
    <div className="btn-container">
      <button
        className="btn"
        disabled={activePage === 1}
        onClick={() => setActivePage(1)}
        style={{ backgroundColor: theme }}
      >
        ⏮️  First
      </button>
      <button
        className="btn"
        disabled={activePage === 1}
        onClick={() => setActivePage(activePage - 1)}
        style={{ backgroundColor: theme }}
      >
        ⬅️ Previous
      </button>
      <button
        className="btn"
        disabled={activePage === totalPages}
        onClick={() => setActivePage(activePage + 1)}
        style={{ backgroundColor: theme }}
      >
        Next ➡️
      </button>
      <button
        className="btn"
        disabled={activePage === totalPages}
        onClick={() => setActivePage(totalPages)}
        style={{ backgroundColor: theme }}
      >
        Last ⏭️
      </button>
      <p>
        Page {activePage} of {totalPages}
      </p>
    </div>
  )
}

export default Pagination;