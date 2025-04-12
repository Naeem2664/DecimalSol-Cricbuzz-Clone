import React from "react";
import Header from "../layout/Header";
import Live_Matches from "./Live_Matches";
import Upcoming_Matches from "./Upcoming_Matches";
import Footer from "../layout/Footer";
const Home = () => {
  const live_Matches_id = "live_Matches";
  const upcoming_Matches_id = "upcoming_Matches";
  const [activecomponent, setActiveComponent] = React.useState(live_Matches_id);
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      
      <Header
        onNavigation={handleComponentChange}
        live_Matches_id={live_Matches_id}
        upcoming_Matches_id={upcoming_Matches_id}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mt-5">Cricbuzz Clone</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center mt-5">Welcome to Cricbuzz Clone</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-center mt-5">
              This is a clone of the Cricbuzz website, where you can find live
              scores, upcoming matches, and series information.
            </p>
          </div>
        </div>
      </div>
      {activecomponent === live_Matches_id && <Live_Matches />}
      {activecomponent === upcoming_Matches_id && <Upcoming_Matches />}
      <Footer />
    </>
  );
};

export default Home;
