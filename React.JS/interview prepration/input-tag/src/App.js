
import './App.css';

function App() {
  return (
   <div>
    <h1>Using Input tag and Create form...!</h1>
    <form>
      <label htmlFor='firstname'>First Name</label>
      <input type='text' placeholder='Enter First Name'name='firstname'/>

      <label htmlFor='lastname'>Last Name</label>
      <input type='text' placeholder='Enter last Name'name='lastname'/>

      <label htmlFor='email'>Email</label>
      <input type='text' placeholder='Enter last Name'name='lastname'/>

    </form>

   </div>
  );
}

export default App;
