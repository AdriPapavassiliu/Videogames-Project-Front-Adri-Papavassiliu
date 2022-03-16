import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addVideogameThunk } from "../../redux/thunks/videogamesThunk";
import Button from "../Button/Button";

const VideogameFormStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 65px;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & h2 {
      color: #157a6e;
      margin-bottom: 5px;
    }

    & div {
      width: 316px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;

      & label {
        margin-bottom: 10px;
      }

      & input {
        height: 30px;
      }
    }

    & .form--platforms {
      & label {
        display: flex;
        align-items: center;
        margin: 0;
        width: fit-content;

        & input {
          border-radius: 50%;
          height: fit-content;
        }
      }

      & div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
      }

      & .PS4 {
        margin-top: 5px;
      }
    }
  }
`;

interface IFormInput {
  name: string;
  genre: string;
  platforms: string[];
  year: string;
  description: string;
  image: string;
}

const VideogameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      genre: "",
      platforms: [],
      year: "",
      description: "",
      image: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.image) {
      data.image = data.image[0];
    }
    dispatch(addVideogameThunk(data));
    navigate("/");
  };
  const watchRequiredFields = watch([
    "name",
    "genre",
    "platforms",
    "year",
    "description",
    "image",
  ]);

  const isInvalid =
    watchRequiredFields[0] === "" ||
    watchRequiredFields[1] === "" ||
    watchRequiredFields[3] === "" ||
    watchRequiredFields[4] === "" ||
    watchRequiredFields[5] === "";

  return (
    <VideogameFormStyle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <h2>Create Videogame</h2>
        <div className="form--name">
          <label>Name</label>
          <input
            type="text"
            placeholder="Videogame name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form--genre">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Shooter, RPG, Action"
            {...register("genre", { required: true })}
          />
        </div>

        <div className="form--platforms">
          Platforms
          <div>
            <label className="PS4">
              PS4
              <input type="checkbox" value="PS4" {...register("platforms")} />
            </label>
            <label>
              XBOX
              <input type="checkbox" value="XBOX" {...register("platforms")} />
            </label>
            <label>
              PS5
              <input type="checkbox" value="PS5" {...register("platforms")} />
            </label>
            <label>
              PC
              <input type="checkbox" value="PC" {...register("platforms")} />
            </label>
          </div>
        </div>

        <div className="form--year">
          <label>Year</label>
          <input
            type="number"
            placeholder="1999"
            {...register("year", { required: true })}
          />
        </div>

        <div className="form--description">
          <label>Description</label>
          <textarea
            rows={6}
            placeholder="A free-to-play strategic battle royale game ..."
            {...register("description", { required: true })}
          />
        </div>

        <div className="form--image">
          <label>Image</label>
          <input type="file" {...register("image", { required: true })} />
        </div>

        {!isInvalid ? (
          <Button
            type="form"
            text="Create Videogame"
            actionOnClick={() => {}}
          ></Button>
        ) : (
          <></>
        )}
      </form>
    </VideogameFormStyle>
  );
};

export default VideogameForm;