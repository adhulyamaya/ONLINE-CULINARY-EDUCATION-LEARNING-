import React from 'react'
import { useState } from 'react';
import { VideoRoom } from '../videoclass/VideoRoom';
import VideoPlayer from '../videoclass/VideoPlayer';
import Hero from '../home/hero/Hero';
import Back from '../common/back/Back';



const Ordersucess = () => { 
  const [joined, setJoined] = useState(false);
  
  return (
<div>
  <Back/>
      <div className="App">
      <p>payment successfully completed</p>
      <h1>start online class</h1>

      {/* {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && <VideoRoom />} */}
    </div>
    

    </div>  )
}

export default Ordersucess
