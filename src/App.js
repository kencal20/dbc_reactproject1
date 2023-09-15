import './App.css';

// import Profile from './Components/Profile';
import Item from './Components/List/item';




function App() {

  let todos = [
    {
      todo: "Cloths Arranging",
      status: true
    },

    {
      todo: "Eating Lunch",
      status: false
    },

    {
      todo: "Clean Room",
      status: false
    },

    {
      todo: "Painting garage",
      status: true
    },

    {
      todo: "Beauty Sleep",
      status: true
    }
  ]

  let element = todos.map((todoItem) => {
    return <Item todo={todoItem.todo}
    status={todoItem.status} />
  }
  )


  return (
    <div className="App">
      {/* <Profile /> */}
      <h2>Todo list</h2>
      <Item
        todo="Shopping for clothes"
        status={true}
      />
      <Item
        todo="Wash your clothes"
        status={false}
      />

      <Item
        todo="Going on dinner Date"
        status={false}
      />
      {
        element
      }
    </div>


  );
}

export default App;
