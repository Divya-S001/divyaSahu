// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchStudentsRequest } from './redux/action';
// import { addtoCart } from './redux/action';
// import {useDispatch} from 'react-redux'

function App() {
const dispatch = useDispatch();
const {students, loading,error} = useSelector((state)=> state.students)

  return (
    <div className="App">
  <h2>Student List</h2>
<button onClick={()=> dispatch(fetchStudentsRequest())}>Fetch Students Data</button>
{loading && <p>Loading...</p>}
{error && <p>Error: {error}</p>}
<ul>  
  {students.map((students)=>(
    <li key={students.id}> {students.name}-{students.email}</li>
  
  ))}
  
  </ul>

    </div>
  );
}

export default App;
