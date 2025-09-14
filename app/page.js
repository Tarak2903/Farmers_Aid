'use client'
import { useState } from "react";
export default function Home() {
  const [location, setlocation] = useState('')
  const hello=()=>{
    try{
        navigator.geolocation.getCurrentPosition()
    }
    catch(error){

    }
  }
  return (
   
   <div>
    fsdfsdfsf
   </div>
  );
}
