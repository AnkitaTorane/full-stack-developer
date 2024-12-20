import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="form-container">
            <div className="form-container2">
                <h1>College Admission Form</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Modible No.
                            </th>
                            <th>
                                Email.ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                01
                            </td>
                            <td>
                                Ankita Torane
                            </td>
                            <td>
                                9766427198
                            </td>
                            <td>
                                ankita@gmail.com
                            </td>

                        </tr>
                        <tr>
                            <td>
                                01
                            </td>
                            <td>
                                Ankita Torane
                            </td>
                            <td>
                                9766427198
                            </td>
                            <td>
                                ankita@gmail.com
                            </td>

                        </tr>
                        <tr>
                            <td>
                                01
                            </td>
                            <td>
                                Ankita Torane
                            </td>
                            <td>
                                9766427198
                            </td>
                            <td>
                                ankita@gmail.com
                            </td>

                        </tr>
                        <tr>
                            <td>
                                01
                            </td>
                            <td>
                                Ankita Torane
                            </td>
                            <td>
                                9766427198
                            </td>
                            <td>
                                ankita@gmail.com
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="table-container">
            <div className="table-container2">
                <h1>Student List</h1>
                <input type="text" placeholder="Enter Your Name" />

                <input type="password" placeholder="password" />

                <input type="email" placeholder="Enter email" />

                <input type="mobile No" placeholder="No" />

                <br/>
                <button>Submit</button>
            </div>

        </div>
    </div>
  );
}

export default App;
