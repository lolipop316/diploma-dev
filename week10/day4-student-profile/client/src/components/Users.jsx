import styles from "./Users.module.css";
import { useState,useEffect } from "react";

function Users() {
  //Initial state variable for student data
  const [userData,setUserData]=useState([])

  useEffect(() => {
    // Making an HTTP GET request using Fetch
    fetch("http://localhost:4000/api/user")
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setUserData(data);
      })

  }, [])//run the function once when mount the component

  return (
    // using array.map() display all the students from userData
    <div className={styles.container}>
      {userData.map((element,index,array) => {
        return (
          <div className={styles.card} key={element.student_id}>
            <img src={ element.profile_pic } alt="student" />
            <p>{ element.name  }</p>
          </div>
        )
      })}            
    </div>
  )
}

export default Users;
