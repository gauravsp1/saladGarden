import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Feature from "./Feature";
import Info from "./Info";
import detail from "../InfoDetails";
import ImageDetail from "../MenuImagesDetails";
import MenuImages from "./MenuIamges";
import Location from "./Location";
import Customer from "./Customer";
import Contact from "./Contact";
import Footer from "./Footer";
import Plan from "./Plan";
import "./Home.css";
import SectionHeader from "./SectionHeader";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <Feature />
      <section>
        <div className="InfoContainer">
          {detail.map((item) => {
            return (
              <Info
                key={item.key}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </section>
      <section>
        <div id="menu" className="MenuImagesContainer">
          {ImageDetail.map((item) => {
            return (
              <MenuImages
                key={item.key}
                source={item.source}
                name={item.name}
              />
            );
          })}
        </div>
      </section>
      <SectionHeader heading="OUR CURRENT LOCATIONS">
        <Location />
      </SectionHeader>
      <Customer />
      {/* <Plan /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default Home;
