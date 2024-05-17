import { useEffect, useState } from "react";

const UserData = (props) => {

  const [user, setUser] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const fetchUserData = () => {
    fetch(`https://secret.url/user/${props.userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }


  useEffect(() => {
    let intervalId = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [props.userId])



  return (
    <div>
      <h1>User Data Component</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <p>Timer: {seconds} seconds</p>
    </div>
  );

}