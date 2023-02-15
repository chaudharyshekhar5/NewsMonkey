import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/NewsGeneral";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsBusiness from "./components/NewsBusiness";
import NewsTechnology from "./components/NewsTechnology";
import NewsSports from "./components/NewsSports";
import NewsScience from "./components/NewsScience";
import NewsEntertainment from "./components/NewsEntertainment";
import NewsHealth from "./components/NewsHealth";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" />} />
            <Route
              exact
              path="/sports"
              element={
                <NewsSports key="sports" country="in" category="sports" />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <NewsScience
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <NewsEntertainment
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <NewsTechnology
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsBusiness
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsHealth
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
