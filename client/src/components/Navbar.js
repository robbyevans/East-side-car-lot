function Nav({ onLogout }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
      return (
        <header>
          <button onClick={handleLogout}>Logout</button>
        </header>
      );
    }
    

        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="vg">
        <img
        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
        className="me-2"
        height="20"
        alt="MDB Logo"
        loading="lazy"
         />
        <small>MDBootstrap</small>
    </a>
    </div>
    </nav>

        

  
  export default Nav