import "./App.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();
  return (
    <div class="center">
      <h1>Counter : {counter}</h1><br/>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>*********************</p>
      <UserForm />
    </div>
  );
}

export default App;
