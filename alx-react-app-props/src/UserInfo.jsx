import { useContext } from "react"
import UserContext from "./components/UserContext";

function UserInfo() {
  return (
<div style={{ padding:"10px", fontSize: "18px" }}> 
  <h2>User Info</h2>

<p>Welcome, {userData.name}!</p>

</div>


  )
}

export default UserInfo;
