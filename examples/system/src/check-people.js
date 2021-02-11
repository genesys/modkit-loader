import people from './people.json';

export const listMen = () => {
  return people.filter(v => v.gender === 'men');
};

export const listWomen = () => {
  return people.filter(v => v.gender === 'women');
};
