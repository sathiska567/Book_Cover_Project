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
import PublicRoute from "./Components/PublicRoute/PublicRoute";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
// import Requests from "./Components/Requests/RequestsForm";
import UserWebSite from "./Components/UserWebSite/UserWebSite";
import Gallery from "./Components/UserWebSite/Gallery";
import OTP from "./Components/Login/EnterOTP.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
      </Routes>


      <Routes>
        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />
      </Routes>


      <Routes>
        <Route path="/forgetpassword" element={
          <PublicRoute>
            <ForgetPassword />
          </PublicRoute>


        } />
      </Routes>

      <Routes>
        <Route path="/createnewpassword" element={
          <PublicRoute>
            <CreateNewPassword />
          </PublicRoute>


        } />
      </Routes>

      <Routes>
        <Route path="/createEvent" element={
          <ProtectedRoute>
            <CreateEvent />
          </ProtectedRoute>

        } />
      </Routes>


      <Routes>
        <Route path="/uploads" element={
          <ProtectedRoute>
            <Uploads />
          </ProtectedRoute>
        } />
      </Routes>


      <Routes>
        <Route path="/requests" element={
          <ProtectedRoute>
            <RequestTable />
          </ProtectedRoute>


        } />
      </Routes>


      <Routes>
        <Route path="/comments" element={
          <ProtectedRoute>
            <CommentTable />
          </ProtectedRoute>
        } />
      </Routes>

      <Routes>
        <Route path="/user" element={<UserWebSite />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Routes>
        <Route path="/otp" element={<OTP />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
