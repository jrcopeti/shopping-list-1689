import { useState } from "react";

function Form({ handleAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const descriptionTrimmed = description.trim();
    if (!descriptionTrimmed) {
      alert("Please, enter an item");
      return;
    }

    const newItem = {
      quantity,
      description,
      bought: false,
      id: crypto.randomUUID(),
    };

    handleAddItem(newItem);
    setQuantity(1);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
