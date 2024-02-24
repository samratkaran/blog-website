import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCuurentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return !loading ? (
    <div className="w-full flex flex-wrap bg-green-300">
      <div className="w-full ">
        <Header />
        <main>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi perferendis, corporis recusandae animi dolor commodi vel culpa aperiam nostrum dignissimos ut accusamus reiciendis, quasi iste assumenda molestiae fugit tenetur impedit!
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
