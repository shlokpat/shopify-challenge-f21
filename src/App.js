import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import MovieNominations from "./components/MovieNominations";
import Banner from "./components/Banner";

const Container = styled.div`
  max-width: 75%;
  min-width: 60%;
  position: relative;
  margin: auto;
`;
const Title = styled.h2`
  color: black !important;
  font-weight: bold;
  font-family: "Fira Sans";
  text-align: left;
  font-size: 45px;
`;

function App() {
  const [movies, setMovies] = useState(() => {
    return [];
  });
  const [nominations, setNomination] = useState(() => {
    return [];
  });

  useEffect(() => {
    let savedNoms = localStorage.getItem("nominations");
    if (savedNoms) {
      setNomination(JSON.parse(savedNoms));
    }
  }, []);
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("nominations", JSON.stringify(nominations));
  });
  const grabMovies = (movieData) => {
    if (movieData.Response === "True") {
      setMovies(movieData.Search);
    } else {
      setMovies("none");
    }
  };
  const addNomination = (movieData) => {
    let isFull = isListFull();
    let duplicate = isDuplicate(movieData);
    if (duplicate === false && isFull === false) {
      setNomination([...nominations, movieData]);
    }
  };
  const removeNomination = async (movieData) => {
    setNomination(nominations.filter((item) => item.Title !== movieData));
  };
  const isListFull = () => {
    let isFull = false;
    if (nominations.length >= 5) {
      isFull = true;
      window.scrollTo(0, 0);
    }
    return isFull;
  };
  const isDuplicate = (movieData) => {
    //let duplicate = false;
    for (var i = 0; i < nominations.length; i++) {
      if (nominations[i] === movieData) {
        console.log("is dup ran");
        return true;
      }
    }
    return false;
  };
  return (
    <Container>
      <Title>The Shoppies 🍿</Title>
      <SearchBar grabMovies={grabMovies} />
      <Banner isListFull={isListFull} />
      <SearchResults
        movies={movies}
        addNomination={addNomination}
        isDuplicate={isDuplicate}
        isListFull={isListFull}
      />
      <MovieNominations
        nominations={nominations}
        removeNomination={removeNomination}
        isListFull={isListFull}
      />
    </Container>
  );
}

export default App;
