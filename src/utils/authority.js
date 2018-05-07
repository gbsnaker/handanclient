// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return localStorage.getItem('antd-pro-authority') || 'admin';
  // return localStorage.getItem('token') || 'admin';
}

export function setAuthority(token, authority) {
  localStorage.setItem('token',token);
  console.log(token);
  return localStorage.setItem('antd-pro-authority', authority);
}
