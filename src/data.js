/* eslint-disable no-plusplus */


// AQUI MANEJAMOS LAS FUNCIONES

// ORDENAR ALFABETICAMENTE

export const sortData = (data, sortBy, sortOrder) => {
  const newArray = data;
  if (sortBy === 'name' && sortOrder === 'ascending') {
    newArray.sort((a, b) => {
      if (a.name > b.name) { // si el primer valor es superior al segundo devuelve un valor positivo
        return 1;
      }
      if (a.name < b.name) { // devuelve un valor negativo (-1) si el 1er valor es inferior al 2do
        return -1;
      }
      return 0;
    });
  }
  if (sortBy === 'name' && sortOrder === 'descending') {
    newArray.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
  return newArray;
};

// FILTRAR POR ROL
export const filterData = (data, condition) => {
  const filtering = data.filter((obj) => {
    const filterByRole = [];
    for (let i = 0; i < obj.tags.length; i++) {
      if (obj.tags[i] === condition) {
        filterByRole.push(obj.tags[i]);
        return filterByRole;
      }
    }
    return false;
  });
  return filtering;
};

// PROMEDIO DE ESTADISTICA OFENSIVA(daño x ataque,veloc de ataque,golpe critico,armadura) D CADA ROL
// PROMEDIO DE AD (DAÑO POR ATAQUE) DE CADA ROL
export const averageData = (data, role) => {
  const filterOnlyByRole = data.filter(champion => champion.tags.includes(role));

  const reduceRole = filterOnlyByRole.reduce((acc, current) => acc
   + current.stats.attackdamage
   + current.stats.attackspeedoffset
   + current.stats.crit
   + current.stats.armor, 0);
  const avgRole = reduceRole / filterOnlyByRole.length;
  return avgRole;
};
