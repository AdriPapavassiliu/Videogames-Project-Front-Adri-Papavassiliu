import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  loadVideogamesThunk,
  updateVideogameThunk,
} from "../../redux/thunks/videogamesThunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import { VideogameFormStyle } from "../VideogameForm/VideogameForm";
import { RootState } from "../../redux/store";
import { Videogame } from "../../interfaces/Videogame";

interface IFormInput {
  name: string;
  genre: string;
  platforms: string[];
  year: string;
  description: string;
  image: string;
}

toast.configure();
const VideogameForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { videogameId } = useParams();
  const videogames = useSelector((state: RootState) => state.videogamesReducer);
  React.useEffect(() => {
    dispatch(loadVideogamesThunk);
  }, [dispatch]);

  const videogameToUpdate = videogames.find(
    (videogame: Videogame) => videogame.id === videogameId
  );
  const { register, watch, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: (videogameToUpdate as Videogame).name,
      genre: (videogameToUpdate as Videogame).genre,
      platforms: (videogameToUpdate as Videogame).platforms,
      year: (videogameToUpdate as Videogame).year,
      description: (videogameToUpdate as Videogame).description,
      image: (videogameToUpdate as Videogame).image,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.image) {
      data.image = data.image[0];
    }
    dispatch(updateVideogameThunk(data, videogameId));
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
    watchRequiredFields[0].length > 30 ||
    watchRequiredFields[1] === "" ||
    watchRequiredFields[3] === "" ||
    watchRequiredFields[3].length !== 4 ||
    parseInt(watchRequiredFields[3]) < 1980 ||
    parseInt(watchRequiredFields[3]) > 2025 ||
    watchRequiredFields[4].length < 3 ||
    watchRequiredFields[4].length > 300 ||
    watchRequiredFields[5] === "";

  return (
    <VideogameFormStyle>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Create Videogame</h2>
        <div className="form--name">
          <label>Name</label>
          <input
            type="text"
            placeholder="Videogame name"
            {...register("name", { required: true, maxLength: 30 })}
          />
        </div>
        <div className="form--genre">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Shooter, RPG, Action"
            {...register("genre", { required: true, maxLength: 40 })}
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
            <label>
              Switch
              <input
                type="checkbox"
                value="Switch"
                {...register("platforms")}
              />
            </label>
          </div>
        </div>

        <div className="form--year">
          <label>Year</label>
          <input
            type="number"
            placeholder="1999"
            {...register("year", {
              required: true,
              min: 1980,
              max: 2025,
              maxLength: 4,
              minLength: 4,
            })}
          />
        </div>

        <div className="form--description">
          <label>Description</label>
          <textarea
            rows={6}
            placeholder="A free-to-play strategic battle royale game ..."
            {...register("description", {
              required: true,
              minLength: 3,
              maxLength: 300,
            })}
          />
        </div>

        <div className="form--image">
          <label>Image</label>
          <input type="file" {...register("image", { required: true })} />
        </div>

        <Button
          disabled={isInvalid}
          type="form"
          text="Create Videogame"
          actionOnClick={() => {
            toast.success("Videogame created", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 500,
              theme: "dark",
              hideProgressBar: true,
            });
          }}
          className={isInvalid ? "disabled" : ""}
        ></Button>
      </form>
    </VideogameFormStyle>
  );
};

export default VideogameForm;
