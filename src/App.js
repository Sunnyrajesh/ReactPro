import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App(){
  const notify = () => toast("Hello @Amruta Parwatikar !😁 Happy To See You. Happy Coding #Frndu");

  return (
    <div>
      <button  class = "btn" onClick={notify}>Click Here!</button>
      <ToastContainer />
    </div>
  );
}
export default App;
