function List({ items, handleToggleItems, handleDeleteItems }) {
  // console.log("items in List", items);
  // const updated = items.map((item) => {
  //   console.log(item.bought);
  // });
  // console.log("items in list", items);
  console.log(items);

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.bought}
              onChange={() => handleToggleItems(item.id)}
            />
            <span
              className={item.bought ? "line-through checked" : "line-through"}
            >
              {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItems(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
