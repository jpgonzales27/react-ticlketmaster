import { forwardRef, useImperativeHandle, useState } from "react";

export const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (event) => {
    console.log("Change: ", event.target.value);
    setSearch(event.target.value);
  };

  const hanldeInputKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("key: ", event.key);
      onSearch(search);
    }
  };

  useImperativeHandle(ref, () => {
    search;
  });

  return (
    <div
      ref={ref}
      style={{
        marginBottom: "20px",
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: 1, display: "flex" }}>
        <p
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Mi boletera
        </p>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <input
          type="text"
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={hanldeInputKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
