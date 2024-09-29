import { getCookie } from "../utils/cookieUtil";

function isAuthinticated() {
  const token = getCookie("jwtToken");
  if (token) {
  }
  return false;
}

export { isAuthinticated };
