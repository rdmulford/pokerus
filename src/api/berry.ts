import {BerryClient, Berries} from 'pokenode-ts';

// getBerry returns berry info
// TODO currently just prints stuff to console
export const getBerry = async (berry: Berries) => {
  const api = new BerryClient({
    cacheOptions: {maxAge: 5000, exclude: {query: false}},
  });
  await api
    .getBerryById(berry)
    .then(data => console.log(data))
    .catch(error => console.error(error));
};
