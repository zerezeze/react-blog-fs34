
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from './pages/Home.jsx';
import PostPage from "./pages/PostPage.jsx";
import AuthorPage from "./pages/AuthorPage.jsx";
import Exemplos from './pages/Exemplos.jsx';
import Search from './pages/Search.jsx';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/:postSlug" element={<PostPage />} />
      <Route path="/author/:username" element={<AuthorPage />} />
      <Route path="/exemplos" element={<Exemplos />} />
    </>
  )
);

export default routes;