import instance from "../Config/axios";
export const getProductos = async () => {
  const { data } = await instance.get("/sites/MLA/search?q=iphone");
  console.log(
    "🚀 ~ file: productosServices.js:4 ~ getProductos ~ response:",
    data
  );
  return data.results;
};
export const create = async (data) => {
  return await fetch("https://api.mercadolibre.com/sites/MLA/search?q=iphone", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
