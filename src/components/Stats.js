export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start by adding items in your list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Have a safe travel ✈️</em>
      ) : (
        <em>
          you have {numItems} items on your list, you already packed{" "}
          {numItemsPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
