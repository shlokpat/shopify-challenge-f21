import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
const SearchContainer = styled.div`
  color: black !important;
  font-weight: bold;
  text-align: left;
  margin: auto 0px auto 0px;
  width: 50%;
  border: 3px solid none;
  padding: 0px 0px 20px 0px;
  font-family: "Fira Sans";
`;
const Search = styled.input`
  min-width: 75%;
  font-size: 18px;
  border: 2px solid grey;
  padding: 15px 0px 15px 10px;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.35) 0px 0px 18px;
  }
  transition: 0.3s;
  height: 2.5em;
  border-radius: 4px;
  outline: none;
  background-color: white;
`;

function SearchBar(props) {
  const [movie, setMovieName] = useState(() => {
    return "";
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=c8a5475d";
    await axios
      .get(url, { params: { s: movie } })
      .then((response) => {
        props.grabMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChange = (e) => {
    setMovieName(e.target.value);
  };
  return (
    <SearchContainer>
      <form onSubmit={handleClick}>
        <Search
          type="text"
          placeholder="Search for a movie..."
          onChange={onChange}
        />
      </form>
    </SearchContainer>
  );
}

export default SearchBar;
