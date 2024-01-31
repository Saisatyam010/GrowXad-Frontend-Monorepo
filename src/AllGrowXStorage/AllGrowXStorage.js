export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key) => {
  const storedItem = localStorage.getItem(key);
  return storedItem ? JSON.parse(storedItem) : null;
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const login = (username, password) => {
  const userData = { username, email: `${username}@example.com` };
  setLocalStorageItem('user', userData);
  return userData;
};

export function getToken(){
  if(localStorage.getItem("user")){
      return JSON.parse(localStorage.getItem("user")).token
  }
}

export const logout = () => {
  removeLocalStorageItem('user');
};