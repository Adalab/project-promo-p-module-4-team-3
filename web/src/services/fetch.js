const dataApi = (data) => {
  // la función retorna un fetch
  return fetch("http://localhost:4000/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export default dataApi;
