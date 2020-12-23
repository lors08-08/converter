import React, { useEffect } from "react";
import Loader from "./components/Loader";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import { BrowserRouter as Router } from "react-router-dom";
import { loadMyRates } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.application.loadingMyRates);

  useEffect(() => {
    dispatch(loadMyRates());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className={styles}>
        <NavBar />
        <Body />
      </div>
    </Router>
  );
}

export default App;
