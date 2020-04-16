// AQUI MANEJAMOS LAS FUNCIONES

// ORDENAR ALFABETICAMENTE

export const sortData = (data, sortBy, sortOrder) => {
  const newArray = data;
  if (sortBy === 'name' && sortOrder === 'ascending') {
    newArray.sort((a, b) => ((a.name > b.name) ? 1 : -1));
  }
  if (sortBy === 'name' && sortOrder === 'descending') {
    newArray.sort((a, b) => ((a.name < b.name) ? 1 : -1));
  }
  return newArray;
};

// FILTRAR POR ROL
export const filterData = (data, role) => data.filter(champion => champion.tags.includes(role));

// PROMEDIO DE ESTADISTICA OFENSIVA(daño x ataque,veloc de ataque,golpe critico,armadura) D CADA ROL
// PROMEDIO DE AD (DAÑO POR ATAQUE) DE CADA ROL
export const averageData = (data, role) => {
  const filterOnlyByRole = filterData(data, role);

  const reduceRole = filterOnlyByRole.reduce((acc, current) => acc
   + current.stats.attackdamage
   + current.stats.attackspeedoffset
   + current.stats.crit
   + current.stats.armor, 0);
  const avgRole = reduceRole / filterOnlyByRole.length;
  return avgRole;
};

// PROMEDIO DE EO (ESTADISTICA OFENSIVA) PARA CADA CAMPEON
export const averageName = (data, name) => {
  const filterOnlyByName = data.filter(champion => champion.name === name);

  const reduceName = filterOnlyByName.reduce((acc, current) => acc
   + current.stats.attackdamage
   + current.stats.attackspeedoffset
   + current.stats.crit
   + current.stats.armor, 0);
  const avgName = reduceName / filterOnlyByName.length;
  return avgName;
};

// EJEMPLO DE COMO ORDENAR Y FILTRAR JUNTOS
// const convidadosFiltrados = convidados.sort((a, b) => ((a.nome > b.nome) ? 1 : -1)).filter(item => item.idade >= 18);
