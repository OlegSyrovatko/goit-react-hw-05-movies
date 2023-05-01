import { Routes, Route } from 'react-router-dom';
import StyledLink from './App.styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
