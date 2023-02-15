import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/NewsGeneral";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
            <Route path="/" element={<News key="general" />} />
            <Route path="/sports" element={<NewsSports key="sports" />} />
            <Route path="/science" element={<NewsScience key="science" />} />
            <Route
              path="/entertainment"
              element={<NewsEntertainment key="entertainment" />}
            />
            <Route
              path="/technology"
              element={<NewsTechnology key="technology" />}
            />
            <Route path="/business" element={<NewsBusiness key="business" />} />
            <Route path="/health" element={<NewsHealth key="health" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            const name = new type(arguments);
          </Routes>
        </Router>
      </div>
    );
  }
}
