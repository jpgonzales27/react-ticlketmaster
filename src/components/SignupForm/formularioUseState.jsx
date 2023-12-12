import { useState } from "react";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const handleClearClick = () => {
    console.log("clear");
    setName("");
    setAge("");
    setAddress("");
    setZipcode("");
    setPhone("");
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Submit: ", {
      name,
      age,
      address,
      zipcode,
      phone,
    });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Name <input value={name} onChange={(event) => setName(event.target.value)} required />
      </label>
      <br />
      <label>
        Age <input value={age} onChange={(event) => setAge(event.target.value)} required />
      </label>
      <br />
      <label>
        Address <input value={address} onChange={(event) => setAddress(event.target.value)} required />
      </label>
      <br />
      <label>
        ZipCode <input value={zipcode} onChange={(event) => setZipcode(event.target.value)} required />
      </label>
      <br />
      <label>
        Phone <input value={phone} onChange={(event) => setPhone(event.target.value)} required />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
