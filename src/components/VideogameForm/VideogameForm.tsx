import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
import { Videogame } from "../../interfaces/Videogame";
import { VideogameDetailInterface } from "../../pages/VideogameDetailPage/VideogameDetailPage";

export const VideogameFormStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 65px;
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & .disabled {
      background-color: #c9c6c5;
      cursor: default;
    }

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

interface VideogameFormProps {
  thunk: (videogame: Videogame, id?: string) => void;
  videogame?: VideogameDetailInterface;
}

toast.configure();
const VideogameForm = ({
  thunk,
  videogame,
}: VideogameFormProps): JSX.Element => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const blankFields = (videogame as VideogameDetailInterface) ?? {
    videogame: {
      name: "",
      genre: "",
      platforms: [],
      year: "",
      description: "",
      image: "",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IFormInput>({
    defaultValues: blankFields.videogame,
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data.image && videogame?.videogame.image !== data.image) {
      data.image = data.image[0];
    }
    id ? dispatch(thunk(data, id)) : dispatch(thunk(data));
    navigate("/");
  };

  return (
    <VideogameFormStyle>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>{id ? "Edit Videogame" : "Create Videogame"}</h2>
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
          disabled={!isDirty || !isValid}
          type="form"
          text={id ? "Edit Videogame" : "Create Videogame"}
          actionOnClick={() => {
            toast.success(id ? "Videogame updated" : "Videogame created", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 500,
              theme: "dark",
              hideProgressBar: true,
            });
          }}
          className={!isValid ? "disabled" : ""}
        ></Button>
      </form>
    </VideogameFormStyle>
  );
};

export default VideogameForm;
