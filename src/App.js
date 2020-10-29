import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css"
import Body from './components/Body';
import { auth } from './components/firebase';
import Login from './components/Login';
import Sidebar from './components/SIdebar';
import {login, logout, selectUser} from "./features/userSlice"

function App() {
  const dispatch = useDispatch()
  const user= useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName: authUser.displayName
          })
        )

      }
      else{
        dispatch(logout())

      }
    })

  },[dispatch])

  return (
    <div className="App">
      {
        user?(
          <>
          <Sidebar/>
          <Body/>
          </>

        ):
        (
            <Login/>
        )
      }
      
    </div>
  );
}

export default App;
