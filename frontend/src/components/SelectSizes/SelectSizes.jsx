import React, { useState } from "react";
import "./SelectSizes.css";

const SelectSizes = ({ onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const toggleSize = (size) => {
    const newSize = selectedSize === size ? null : size;
    setSelectedSize(newSize);
    onSizeChange(newSize);
  };

  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <div
          key={size}
          className={`size-box ${selectedSize === size ? "selected" : ""}`}
          onClick={() => toggleSize(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default SelectSizes;
