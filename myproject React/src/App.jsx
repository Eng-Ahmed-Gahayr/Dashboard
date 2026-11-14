import React from "react";
import Header from "./Header";
import Products from "./products";

function App() {
  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh", paddingBottom: "50px" }}>
      {/*Header */}
      <Header />

      <div
        style={{ display: "flex", flexWrap: "wrap",justifyContent: "center",gap: "24px",maxWidth: "1000px",margin: "30px auto",padding: "0 20px",
        }}
      >
        {/* row 1*/}
        <Products title="Wireless Headphones" category="AUDIO" price="$45" availability="In Stock" imageBg="#dbeafe"
        />
        <Products title="Mechanical Keyboard" category="ACCESSORIES" price="$62" availability="In Stock" imageBg="#f3e8ff"
        />
        <Products title="Wireless Mouse" category="ACCESSORIES" price="$24" availability="Out of Stock" imageBg="#dcfce7"
        />

        {/*Rpw 2*/}
        <Products title="Smart Watch" category="WEARABLES" price="$75" availability="In Stock" imageBg="#fef3c7"
        />
        <Products title="Bluetooth Speaker" category="AUDIO" price="$39" availability="Out of Stock" imageBg="#ccfbf1"
        />
        <Products title="Laptop Stand" category="ACCESSORIES" price="$29" availability="In Stock" imageBg="#ffe4e6"
        />
      </div>
    </div>
  );
}

export default App;