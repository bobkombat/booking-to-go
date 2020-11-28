import React, { useEffect } from "react";
import { fetchDetail } from "../store/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((store) => store.movieReducer.movieDetail);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, [dispatch, id]);

  function goBack() {
    history.goBack();
  }

  if (!movieDetail.Ratings) {
    return (
      <div className="bg-pink w-screen h-screen font-header font-bold overflow-auto">
        <div class="w-10/12 sm:w-11/12 py-10 sm:py-4 mx-auto">
          <div
            onClick={goBack}
            className="sm:text-xl sm:mb-4 sm:border-b-2 w-full border-b-4 mb-4 cursor-pointer transition ease-out duration-200 transform hover:-translate-y-1 border-gray-900 text-3xl"
          >
            &lt; Back
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-pink w-screen h-screen font-header font-bold overflow-auto">
      <div class="w-10/12 sm:w-11/12 py-10 sm:py-4 mx-auto">
        <div
          onClick={goBack}
          className="sm:text-xl sm:mb-4 sm:border-b-2 w-full border-b-4 mb-4 cursor-pointer transition ease-out duration-200 transform hover:-translate-y-1 border-gray-900 text-3xl"
        >
          &lt; Back
        </div>
        <div className="flex flex-wrap pb-4 border-gray-900 border-b-4">
          <img
            src={movieDetail.Poster}
            class="w-3/12 sm:w-full xl:w-3/12 lg:w-full lg:mb-3"
            alt={movieDetail.Title}
          />
          <div className="mx-4 lg:mx-0">
            <h1 className="text-4xl xl:text-4xl">
              {movieDetail.Title} ({movieDetail.Year})
            </h1>
            <h4 className="text-2xl">
              {movieDetail.Released} | {movieDetail.Runtime} | {movieDetail.Rated} |{" "}
              {movieDetail.Language} | {movieDetail.Country}
            </h4>
            <h4 className="font-medium text-xl">{movieDetail.Genre}</h4>
            <br />
            <h4 className="text-2xl xl:text-lg">
              Director: <span className="font-medium">{movieDetail.Director}</span>
            </h4>
            <h4 className="text-2xl xl:text-lg">
              Writer: <span className="font-medium">{movieDetail.Writer}</span>
            </h4>
            <h4 className="text-2xl xl:text-lg">
              Actors: <span className="font-medium">{movieDetail.Actors}</span>
            </h4>
            <br />
            <h1 className="text-3xl xl:text-xl">Ratings</h1>
            <h4 className="text-2xl xl:text-lg">
              {movieDetail.Ratings.map((data) => (
                <>
                  {data.Source}: <span className="font-medium">{data.Value}</span>
                  <br />
                </>
              ))}
              Metascore: <span className="font-medium">{movieDetail.Metascore}</span>
            </h4>
          </div>
        </div>
        <div>
          <h1 className="text-4xl mt-2 lg:text-2xl">Plot</h1>
          <h5 className="text-xl font-medium lg:text-lg">{movieDetail.Plot}</h5>
        </div>
      </div>
    </div>
  );
}
