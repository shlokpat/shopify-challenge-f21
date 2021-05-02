import React from "react";
import styled from "styled-components";
import { SiAddthis } from "react-icons/si";
const MovieContainer = styled.div`
  color: black !important;
  background-color: white;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.35) 0px 0px 34px;
  }
  transition: 0.3s;
  font-weight: bold;
  font-family: "Fira Sans";
  text-align: center;
  margin: 10px auto 40px 0px;
  border-radius: 10px;
  float: left;
  width: 48%;
  min-height: 50px;
`;
const MovieResult = styled.h2`
  color: black !important;
  font-weight: bold;
  font-family: "Fira Sans";
  font-size: 20px;
  text-align: center;
  padding: 10px 0px 10px 0px;
`;
const MovieTitle = styled.div`
  color: black !important;
  font-weight: bold;
  text-align: left;
  margin: 0px auto 0px auto;
  width: 80%;
  padding: 5px 5px 5px 10px;
`;
const MovieCard = styled.div`
  color: black !important;
  background: white;
  display: flex;
  border: 3px solid lightgrey;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.35) 0px 0px 18px;
  }
  overflow-wrap: anywhere;
  transition: 0.3s;
  font-weight: bold;
  transition: 0.2s;
  text-align: center;
  margin: 10px auto 20px auto;
  border-radius: 5px;
  max-width: 60%;
  min-width: 50%;
  padding: 10px 10px 10px 0px;
`;
const H3 = styled.h3`
  font-size: 15px;
  font-weight: normal;
  color: grey;
`;

function MovieResults(props) {
  const addNomination = (movie) => {
    props.addNomination(movie);
  };
  return (
    <MovieContainer>
      <MovieResult> Movie results 🎥</MovieResult>
      {props.movies === "none" ? <H3>No results found</H3> : null}
      {props.movies.length === 0 && props.movies !== "none" ? (
        <H3>Nothing to show yet</H3>
      ) : null}
      {props.movies != null && props.movies !== "none"
        ? props.movies.map((movie) => {
            return (
              <MovieCard>
                <MovieTitle>
                  {movie.Title} ({movie.Year})
                </MovieTitle>
                <SiAddthis
                  size="1.5em"
                  cursor="pointer"
                  color={
                    props.isDuplicate(movie) === true || props.isListFull()
                      ? "grey"
                      : "#181818"
                  }
                  disabled={props.isDuplicate(movie) || props.isListFull()}
                  onClick={() => addNomination(movie)}
                />
              </MovieCard>
            );
          })
        : null}
    </MovieContainer>
  );
}

export default MovieResults;
