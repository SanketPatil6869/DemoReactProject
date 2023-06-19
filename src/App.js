import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Scorecard } from './Scorecard';
import { RegistrationForm } from './RegistrationForm';
import { Register } from './Register';
import { UserList } from './UserList';

function App() {
  return (
    <div>
      <h1>Hello world..</h1>
      <Home name="Sanket" age="23"></Home>
      {/* <RegistrationForm></RegistrationForm> */}
      <Register></Register>
      <UserList></UserList>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
