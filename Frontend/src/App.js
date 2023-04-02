import HomePage from "./Components/HomePage";
import {Routes,Route} from 'react-router-dom';
import Successpage from "./Components/Successpage";
import Home from "./Components/Home";
import LogInPage from "./Components/LogInPage";
import AddTaskPage from "./Components/AddTaskPage";
function App() {
  return (
<>
<Home/>


<Routes>
<Route   path="/Signin" element={<HomePage/>}  />
<Route   path="/Signincomplete" element={< Successpage/>}  />
<Route   path="/Addtask" element={< LogInPage/>}  />
<Route   path="/AddTaskPage" element={< AddTaskPage/>}  />

</Routes>

</>
  );
}

export default App;
