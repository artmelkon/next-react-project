import ExpenseItem from "./Expense/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, title: "Toilet Paper", amount: 44.77, date: new Date(2021, 2, 2) },
    { id: 2, title: "Car Insurance", amount: 294.77, date: new Date(2021, 2, 18) },
    { id:3, title: "Coffee", amount: 26.95, date: new Date(2021, 3, 22) },
    { id:4, title: "Detergent", amount: 51.69, date: new Date(2021, 4, 18) },
  ];
  return (
    <div className="App">
      <h3>This React Start page</h3>
      {
        expenses.map(item => {
          return <ExpenseItem key={item.id} {...item}/>
        })
      }
    </div>
  );
}

export default App;
