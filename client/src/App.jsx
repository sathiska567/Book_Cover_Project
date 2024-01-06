import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Uploads from "./Components/Uploads/Uploads";
import RequestTable from "./Components/Requests/RequestTable";
import CommentTable from "./Components/Comments/CommentTable";
// import CommentsForm from "./Components/Comments/CommentForm";
import Signup from "./Components/Login/Signup";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/Login/ForgotPassword";
import CreateNewPassword from "./Components/Login/CreateNewPassword";
// import Requests from "./Components/Requests/RequestsForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>

      <Routes>
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
      </Routes>

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
    </BrowserRouter>
  );
}

export default App;
