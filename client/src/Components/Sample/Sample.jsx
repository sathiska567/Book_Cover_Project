import React, { useState } from 'react'
import axios from "axios"

export default function Sample() {
  const [file,setFile] = useState();

// handle the file upload
const handleUpload = async (e) => {
  const file = e.target.files[0]; // Assuming you're handling the file input change event

  console.log(file);

  const formData = new FormData();
  formData.append("image", file);
  console.log([...formData]);

  try {
    const { data } = await axios.post("http://localhost:8080/api/v1/upload/upload-image", formData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div>
         <input type="file" name='image' id='image' onChange={handleUpload} />  {/* onChange={(e)=>setFile(e.target.files[0])} */}
        <button >upload</button>
    </div>
  )
}
