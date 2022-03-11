import styled from "styled-components";
import Button from "../Button/Button";

export const FilterBarStyles = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: fit-content;

  & li {
  }
`;

const FilterBar = (): JSX.Element => {
  return (
    <>
      <FilterBarStyles>
        <li>
          <Button
            text="All"
            actionOnClick={() => console.log("h")}
            type="filter"
            key={"All"}
          ></Button>
        </li>
        <li>
          <Button
            text="PS4"
            actionOnClick={() => console.log("h")}
            type="filter"
            key={"PS4"}
          ></Button>
        </li>
        <li>
          <Button
            text="XBOX"
            actionOnClick={() => console.log("h")}
            type="filter"
            key={"XBOX"}
          ></Button>
        </li>
        <li>
          <Button
            text="PS5"
            actionOnClick={() => console.log("h")}
            type="filter"
            key={"PS5"}
          ></Button>
        </li>
        <li>
          <Button
            text="PC"
            actionOnClick={() => console.log("h")}
            type="filter"
            key={"PC"}
          ></Button>
        </li>
      </FilterBarStyles>
    </>
  );
};

export default FilterBar;
