export const setAtividadesLocalStorage = (atividades) =>{
    localStorage.setItem('atividades', JSON.stringify(atividades));
}
export const getAtividadesLocalStorage = () => {
  const json = localStorage.getItem("atividades");
  if (!json) return null;
  const atividades = JSON.parse(json);
  return atividades ?? null;
};

export const setReservasLocalStorage = (reservas) =>{
  localStorage.setItem('reservas', JSON.stringify(reservas));
}
export const getReservasLocalStorage = () => {
const json = localStorage.getItem("reservas");
if (!json) return null;
const reservas = JSON.parse(json);
return reservas ?? null;
};