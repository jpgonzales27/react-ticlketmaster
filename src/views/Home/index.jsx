import { Navbar } from "../../components/Navbar";
import { Events } from "../../components/Events";
import { useRef, useState } from "react";
// import { SignupForm } from "./components/SignupForm";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  const handleNavbarSearch = (search) => {
    console.log("Searching :", search);
    console.log("containerRef :", containerRef.current);
    setSearchTerm(search);
  };

  return (
    <div>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
      {/* <SignupForm /> */}
    </div>
  );
};
