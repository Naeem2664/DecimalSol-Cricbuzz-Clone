import React from "react";
const Header = ({
  live_Matches_id,
  upcoming_Matches_id,
  onNavigation,
}) => {
  const [activeComponent, setActiveComponent] = React.useState(live_Matches_id);
  const handleNavigation = (e, component) => {
    e.preventDefault();
    setActiveComponent(component);
    onNavigation(component);
  };
  const isActive = (component) => {
    return component === activeComponent
      ? { color: "black", fontSize: "1rem", transition: "0.2s ease-in-out", }
      : { color: "gray" };
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ms-5" href="#">
          Cricbuzz-Clone
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item active">
              <a
                className="nav-link"
                href={live_Matches_id}
                onClick={(e) => handleNavigation(e, live_Matches_id)}
                style={isActive(live_Matches_id)}
              >
                Live Matches
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={upcoming_Matches_id}
                onClick={(e) => handleNavigation(e, upcoming_Matches_id)}
                style={isActive(upcoming_Matches_id)}
              >
                Upcoming Matches
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
