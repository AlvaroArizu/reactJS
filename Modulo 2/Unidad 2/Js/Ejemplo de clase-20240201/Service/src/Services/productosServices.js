export const getProductos = async () => {
  const data = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=iphone"
  ).then((response) => response.json());
  return data.results;
};
