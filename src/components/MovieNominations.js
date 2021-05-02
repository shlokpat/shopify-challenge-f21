import React from "react";
import styled from "styled-components";
import { FaMinus } from "react-icons/fa";
const NominationContainer = styled.div`
  color: black !important;
  background-color: white;
  font-weight: bold;
  font-family: "Fira Sans";
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.35) 0px 0px 34px;
  }
  transition: 0.3s;
  margin: 10px 0px 40px auto;
  border-radius: 10px;
  text-align: center;
  float: right;
  width: 48%;
  border: 3px solid none;
`;
const NomResult = styled.h2`
  color: black !important;
  font-weight: bold;
  font-family: "Fira Sans";
  font-size: 20px;
  text-align: center;
  padding: 10px 0px 10px 0px;
`;
const MovieTitle = styled.div`
  color: white !important;
  font-weight: bold;
  text-align: center;
  margin: 0px 5px 0px 5px;
  width: 80%;
  padding: 5px 0px 0px 0px;
`;
const RemoveButton = styled.button`
  color: black !important;
  background-color: #181818;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  text-align: center;
  margin: 5px auto 0px auto;
  overflow-wrap: normal;
  min-width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  padding: 3px 0px 3px 0px;
`;
const MovieCard = styled.div`
  color: white !important;
  animation: pop-in 0.5s;
  display: flex;
  background: #50b83c;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 0px 15px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  margin: 10px auto 20px auto;
  max-width: 60%;
  min-width: 50%;
  overflow-wrap: anywhere;
  padding: 10px 10px 10px 10px;
`;
const MaxNotif = styled.div`
  color: red !important;
  margin: 40px auto 20px auto;
  font-weight: normal;
  font-size: 15px;
`;
const H3 = styled.h3`
  font-size: 15px;
  font-weight: normal;
  color: grey;
`;

function MovieResults(props) {
  const removeNomination = (movie) => {
    props.removeNomination(movie);
  };
  const saveNominations = () => {
    localStorage.setItem("nominations", JSON.stringify(props.nominations));
  };
  return (
    <NominationContainer>
      <NomResult>Your nominations 🏆</NomResult>
      {props.nominations.length === 0 ? <H3>Nominate some movies!</H3> : null}
      {props.nominations.map((movie) => {
        return (
          <MovieCard>
            <MovieTitle>
              {movie.Title} ({movie.Year})
            </MovieTitle>
            <RemoveButton>
              <FaMinus
                size="0.85rem"
                color="white"
                onClick={() => removeNomination(movie.Title)}
              />
            </RemoveButton>
          </MovieCard>
        );
      })}
      <div>
        {props.isListFull() === true ? (
          <MaxNotif> You can only have a maximum of 5 nominations</MaxNotif>
        ) : null}
        {props.isListFull() === true ? saveNominations() : null}
      </div>
    </NominationContainer>
  );
}

export default MovieResults;
