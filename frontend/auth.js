function isLoggedIn() {
    return !!localStorage.getItem("userEmail");
  }
  
  function getUser() {
    return localStorage.getItem("userEmail");
  }
  
  function requireLogin(url) {
    if (!isLoggedIn()) {
      localStorage.setItem("redirectAfterLogin", url);
      window.location.href = "login.html";
      return false;
    }
    return true;
  }
  
  function afterLoginRedirect() {
    const redirect = localStorage.getItem("redirectAfterLogin");
  
    if (redirect) {
      localStorage.removeItem("redirectAfterLogin");
      window.location.href = redirect;
    } else {
      window.location.href = "index.html";
    }
  }
  
  function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("redirectAfterLogin");
    window.location.href = "index.html";
  }