function setCookie(name, value, time, path) {
  let expires = "";
  if (time) {
    const date = new Date();
    date.setTime(date.getTime() + time);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=" + path;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export { setCookie, getCookie };
