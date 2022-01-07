export function paginatePets(pets, activePage, petsPerPage) {
  return [...pets].slice((activePage - 1) * petsPerPage, activePage * petsPerPage)
}