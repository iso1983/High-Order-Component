import logo from './logo.svg';
import './App.css';
import HOC from './HOC';
import ClientData from './ClientData';

function App() {
  // Wrap ClientData compoent around HOC component passing a url.remember inside HOC(High order compoent) we use the url that we pass and fetch data from API and update the ClientData component with the data we get from API
  const UpdatedComponent= HOC(ClientData,"https://catfact.ninja/fact")
  return (
    <div className="App">
      {/* Now the ClientData component has new data from API and plus the age property we append to it.You may be asking why do we append a random property from here to UpdatedComponent?This is to demonstrate that we can have additional properties that we want to append to a component rather than only using the properties of a component */}
      <UpdatedComponent age="99"/>
    </div>
  );
}

export default App;