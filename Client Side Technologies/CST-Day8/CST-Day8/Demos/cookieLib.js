function getCookie (CookieName) {
  throw new Error()
}

function setCookie (CookieName, CookieValue, expireDate) {
  //session
  document.cookie = CookieName + '=' + CookieValue
  //persistent
  document.cookie = CookieName + '=' + CookieValue + ';expires=' + expireDate
  //
  //
  //
}
