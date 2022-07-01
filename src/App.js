import logo from './logo.svg';
import './App.css';
import HoomeContainer from './container/HomeContainer'

import Users from './Users';

function App() {
  return (
    <div className="App">
      <Users  data={{name:"manish Gautam"}}/>
      <HoomeContainer/>
    </div>
  );
}

export default App;
