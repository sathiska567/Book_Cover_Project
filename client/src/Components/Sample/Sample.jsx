import React, { useState } from 'react'
import axios from "axios"

export default function Sample() {
  const [file,setFile] = useState();

// handle the file upload
const handleUpload = async()=>{


}

  return (
    <div>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
        <button onClick={handleUpload}>upload</button>
    </div>
  )
}
