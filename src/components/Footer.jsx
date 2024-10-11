function Footer({ items }) {
  const totalItems = items.length;

  const totalQuantity = items.reduce(
    (sum, item) => sum + Number(item.quantity),
    0
  );

  const itemsBought = items
    .filter((item) => item.bought)
    .reduce((sum, item) => sum + Number(item.quantity), 0);

  const percentage = (itemsBought / totalQuantity) * 100;

  console.log("total quantity", totalQuantity);
  console.log("total items", totalItems);
  return (
    <footer className="status">
      <p className="total">Total Items: {totalQuantity} </p>
      <p className="total">Items Purchased: {itemsBought} </p>
      <p className="items">
        {percentage === 100 ? (
          <strong>Shopping Completed!</strong>
        ) : (
          `Shopping progress: ${Math.round(percentage)}%`
        )}
      </p>
    </footer>
  );
}

export default Footer;
