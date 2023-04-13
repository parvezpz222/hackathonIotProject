import { useState } from "react";
import Login from "./Login";
import MainPage from "./MainPage";
export default function LandingPage({ arrayOfMessages, data }) {
  const [loggedIn, setLogin] = useState(false);

  return (
    <div className="container">
<h3> chassis</h3>
      {loggedIn && (
        <div>
          <button className="Logoutbutton" onClick={() => setLogin(false)}>Logout</button>
          <MainPage data={data} arrayOfMessages={arrayOfMessages} />
        </div>
      )}
      {!loggedIn && (
        <Login
          handleLogin={(e) => {
            setLogin(e);
          }}
          isLoggedin={loggedIn}
        />
      )}
    </div>
  );
}
