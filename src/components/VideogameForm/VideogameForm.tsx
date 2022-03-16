import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addVideogameThunk } from "../../redux/thunks/videogamesThunk";
import Button from "../Button/Button";

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
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
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
        <label>
          <input type="checkbox" value="PS4" {...register("platforms")} /> PS4
        </label>
        <label>
          <input type="checkbox" value="XBOX" {...register("platforms")} /> XBOX
        </label>
        <label>
          <input type="checkbox" value="PS5" {...register("platforms")} /> PS5
        </label>
        <label>
          <input type="checkbox" value="PC" {...register("platforms")} /> PC
        </label>
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
  );
};

export default VideogameForm;
