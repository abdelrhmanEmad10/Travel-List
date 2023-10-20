import { useState } from "react";
import "../index.css";
import  Logo  from "./Logo";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onUpdateItem={handleToggleItems}
        onDeleteItem={handleDeleteItems}
        onClearList={handleClearList}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
  }
//   const [pill, setPill] = useState(0);
//   const [servicePerc, setServicePerc] = useState(0);
//   const [friendServicePerc, setFriendServicePerc] = useState(0);
//   function handleBothService() {
//     return (+servicePerc + +friendServicePerc) / 2;
//   }
//   function handleReset() {
//     setPill(0);
//     setServicePerc(0);
//     setFriendServicePerc(0);
//   }
//   return (
//     <div>
//       <InputPill pill={pill} setPill={setPill} />
//       <InputService
//         servicePerc={servicePerc}
//         pill={pill}
//         handleService={setServicePerc}
//       >
//         How did you like your service?
//       </InputService>
//       <InputService
//         servicePerc={friendServicePerc}
//         pill={pill}
//         handleService={setFriendServicePerc}
//       >
//         How did you like your service?
//       </InputService>
//       <Result
//         pill={pill}
//         handleReset={handleReset}
//         handleBothService={handleBothService}
//       />
//     </div>
//   );
// }

// // function InputPill({ pill, setPill }) {
// //   return (
// //     <div>
// //       <span>How much was your bill?</span>
// //       <input
// //         type="number"
// //         value={pill}
// //         onChange={(e) => {
// //           setPill(e.target.value);
// //         }}
// //       />
// //     </div>
// //   );
// // }
// // function InputService({ pill, handleService, children }) {
// //   return (
// //     <div>
// //       {children}
// //       {pill ? (
// //         <select
// //           onChange={(e) => {
// //             handleService(e.target.value);
// //           }}
// //         >
// //           <option value={0}>dissatified(0%)</option>
// //           <option value={5}>it was okay(5%)</option>
// //           <option value={10}>it was good(10%)</option>
// //           <option value={20}>Absoulutly amazing!(20%)</option>
// //         </select>
// //       ) : (
// //         <select disabled
// //           onChange={(e) => {
// //             handleService(e.target.value);
// //           }}
// //         >
// //           <option value={0}>dissatified(0%)</option>
// //           <option value={5}>it was okay(5%)</option>
// //           <option value={10}>it was good(10%)</option>
// //           <option value={20}>Absoulutly amazing!(20%)</option>
// //         </select>
// //       )}
// //     </div>
// //   );
// // }
// // function Result({ pill, handleBothService, handleReset }) {
// //   if (pill)
// //     return (
// //       <>
// //         <h1>
// //           you pay ${+pill + +pill * (+handleBothService() / 100)} (${+pill} + $
// //           {+pill * (+handleBothService() / 100)})
// //         </h1>
// //         <button onClick={handleReset}>Reset</button>
// //       </>
// //     );
// // }
