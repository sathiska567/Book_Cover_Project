import React, { useState } from 'react'

export default function Sample() {
  const [file,setFile] = useState();

// handle the file upload
const handleUpload = async()=>{
  console.log(file);
}

  return (
    <div>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
        <button onClick={handleUpload}>upload</button>
    </div>
  )
}
