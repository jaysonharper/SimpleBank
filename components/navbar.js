function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" title="Home Page" href="#">
          Harper Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                title="Create New Account"
                href="#/CreateAccount/"
              >
                Create Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="Deposit Money" href="#/deposit/">
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="Withdraw Money" href="#/withdraw/">
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" title="All User Data" href="#/alldata/">
                AllData
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
