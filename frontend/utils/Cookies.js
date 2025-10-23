import Cookies from "js-cookie";

export const SetCookie = (key, value, days = 1) => {
  const cookie = Cookies.get(key);

  if (cookie) {
    Cookies.remove(key);
    console.log("Cookie removed");
  }

  Cookies.set(key, value, { expires: days, path: "/" });
};

export const getCookie = (key) => {
  const CD = Cookies.get(key);
  return CD
};

export const deleteCookie = (key) => {
  Cookies.remove(key, { path: "/" });
};
