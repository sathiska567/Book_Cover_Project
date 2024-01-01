import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Uploads from "./Components/Uploads/Uploads";
<<<<<<< HEAD
import RequestsForm from "./Components/Requests/RequestsForm";
import RequestTable from "./Components/Requests/RequestTable";
import CommentTable from "./Components/Comments/CommentTable";
import CommentForm from "./Components/Comments/CommentForm";
=======
import Requests from "./Components/Requests/Requests";
import Comments from "./Components/Comments/Comments";
import Sample from "./Components/Sample/Sample";
>>>>>>> 0c2620d73bfb8b4e98fddba686394bc23b9012a1

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createEvent" element={<CreateEvent />} />
      </Routes>
      <Routes>
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
      <Routes>
        <Route path="/requests" element={<RequestTable />} />
      </Routes>
      <Routes>
        <Route path="/comments" element={<CommentTable />} />
      </Routes>
<<<<<<< HEAD
=======
      <Routes>
        <Route path="/sample" element={<Sample/>} />
      </Routes>

>>>>>>> 0c2620d73bfb8b4e98fddba686394bc23b9012a1
    </BrowserRouter>
  );
}

export default App;
