
import './App.css';

function App() {
  return (
    <div class="container">
      <h1 class="hedding">Input Form</h1>
      <form>
        <div class="sub-container">
          <div class="search-contain">

            <label htmlFor='seach'>Search:</label>
            <input type="search" class="searchBar" id="gsearch" name="search" />
            <input type="submit" /><br />
            <br />
          </div>
          <label for="currentdatetime" >Date:</label>
          <input type="datetime-local" id="currentdatetime" class="currentTime"name="currentdatetime" /><br />
          <br />
          <br />
          <label htmlFor='firstname'>Enter full Name:</label>
          <input type='text' placeholder='Enter Full Name' class="name-box" name='firstname' /> <br />

          <label htmlFor='email'>Email:</label>
          <input type='email' placeholder='Enter last Name' class="name-box" name='lastname' /><br />

          <label htmlFor='password'>Create Password:</label>
          <input type='password' placeholder='Enter Password' class="name-box" name='password' /><br />

          <label for="birthdaydateofbirth">Date of Birth:</label>
          <input type="date" id="dateofbirth" class="name-box" name="dateofbirth" /><br />


          <label htmlFor='gender'>Gender:</label><br />
          <input type="radio" id="male" class="radio-box" name="gender" value="male" />
          <label for="male">Male</label>
          <input type="radio" id="emale" class="radio-box" name="gender" value="emale" />
          <label for="female">Female</label><br />


          <label htmlFor='qualification'>Select Your Qualification:</label><br />
          <input type="checkbox" id="bcs" name="qualification" value="bcs" />
          <label for="bcs"> Bcs</label><br />
          <input type="checkbox" id="b.comit" name="qualification" value="b.comit" />
          <label for="b.comit">B.com IT</label><br />
          <input type="checkbox" id="b.tech" name="qualification" value="b.tech" />
          <label for="b.tech">B.Tech</label><br />
          <input type="checkbox" id="bca" name="qualification" value="bca" />
          <label for="bca">BCA</label><br />
          <br />
          <br />

          <label for="myfile">Upload Photo:</label>
          <div class="profile-photo">
          <input type="file" id="myfile" class="name-box" multiple/>
          </div><br/><br/>
          

          <label for="vol">Select your completed form Range</label>
          <input type="range" id="vol" name="vol" min="0" max="50" />
          
          <br />
          <br />

          <input type="checkbox" id="box" name="checkbox" value="box" />
          <label for="bca">I have agree all the the terms and condition</label><br />
          <br />
          <br />

          <input type="button" class="btn-reset"value="reset" /><br />
          <br />
          
          <input type="button" class="btn-btn" value="submit" /> 
          
        </div>

      </form>

    </div>
  );
}

export default App;
