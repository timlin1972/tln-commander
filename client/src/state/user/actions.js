export const SET_USER = 'SET_USER';

export const INIT_USER = {
  login: false,
  id: null,
  username: null,
  role: null,
  language: 'en',
  logoutTimeout: null,
};

export function setUser(user) {
  // L.changeLanguage(user.language);

  return {
    type: SET_USER,
    user,
  };
}

export function logoutUser() {
  localStorage.clear();
  return (setUser(INIT_USER));
}
