import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import SongCard from "../Components/SongCard";
import Loading from "../pages/Loading";
import Error from "./Error";

const Spotify = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [infoTracks, setInfoTracks] = useState({
    tracks: [],
    orderMode: "p",
    quantity: 5,
  });
  const inputsQuantity = [{ value: 5 }, { value: 10 }, { value: 20 }];

  useEffect(() => {
    // const url = new URLSearchParams(window.location.search);
    const currentUrl = window.location.href;
    const queryString = currentUrl.split("#")[1]; // Prendi solo la parte dopo il "#"
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("access_token")) {
      setToken(urlParams.get("access_token"));
      localStorage.setItem("access_token", urlParams.get("access_token"));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setToken(localStorage.getItem("access_token"));
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    const fetchTopArtistsTracks = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=" +
            infoTracks.quantity,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        var data = response.data.items;
        if (data != null && !ignore) {
          data.sort(function (a, b) {
            return a.popularity - b.popularity;
          });
          setInfoTracks({
            ...infoTracks,
            tracks: data,
          });
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };
    if (token) {
      fetchTopArtistsTracks();
    }
    return () => {
      ignore = true;
    };
  }, [infoTracks.quantity, token]);

  const logoutFromSpotify = () => {
    setToken(null);
    setError(null);
    localStorage.removeItem("access_token");
    console.log(window.location);
    window.location.href = "";
  };

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  const handleOrder = (e) => {
    if (e.target.value == "p") {
      infoTracks.tracks.sort(function (a, b) {
        return a.popularity - b.popularity;
      });
    } else {
      infoTracks.tracks.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    setInfoTracks({ ...infoTracks, orderMode: e.target.value });
  };
  const handleQuantity = (e) => {
    setInfoTracks({ ...infoTracks, quantity: e.target.value });
  };
  console.log(error, token);
  return (
    <div className="flex justify-center flex-col gap-4">
      {token ? (
        <>
          {!error && (
            <>
              <div className="flex justify-center flex-wrap">
                <div
                  className={`dropdown dropdown-${
                    window.innerWidth < 468 ? "bottom" : "left"
                  }`}
                >
                  <div tabIndex={0} role="button" className="btn m-1">
                    Ordina
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <div className="join flex-col">
                      <input
                        className="join-item btn"
                        type="radio"
                        name="optionsOrder"
                        aria-label="Per popolarità"
                        onChange={handleOrder}
                        value={"p"}
                        checked={infoTracks.orderMode === "p"}
                      />
                      <input
                        className="join-item btn"
                        type="radio"
                        name="optionsOrder"
                        aria-label="Per Nome"
                        onChange={handleOrder}
                        value={"n"}
                        checked={infoTracks.orderMode === "n"}
                      />
                    </div>
                  </ul>
                </div>

                <div className="dropdown dropdown-right">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Quantità
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <div className="join flex-col">
                      {inputsQuantity.map((input) => (
                        <input
                          className="join-item btn"
                          type="radio"
                          name="optionsQuantity"
                          key={input.value}
                          aria-label={input.value}
                          onChange={handleQuantity}
                          value={input.value}
                          checked={input.value == infoTracks.quantity}
                        />
                      ))}
                    </div>
                  </ul>
                </div>
                <div>
                  <button className="btn" onClick={logoutFromSpotify}>
                    Logout from Spotify
                  </button>
                </div>
              </div>
              :
              <div className="flex justify-center flex-wrap gap-5">
                {infoTracks.tracks !== undefined ||
                infoTracks.tracks.length !== 0 ? (
                  infoTracks.tracks.map((track) => (
                    <SongCard {...track} key={track.id} />
                  ))
                ) : (
                  <h1>nessun dato</h1>
                )}
              </div>
            </>
          )}
          {error && (
            <div className="flex items-center justify-center w-full flex-col min-h-screen gap-2">
              <Error message={error} />
              {error.includes("401") && (
                <button className="btn" onClick={logoutFromSpotify}>
                  Logout from Spotify
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full">
          <a
            href={`https://accounts.spotify.com/authorize?client_id=${
              import.meta.env.VITE_CLIENT_ID
            }&client_secret=${
              import.meta.env.VITE_CLIENT_SECRET
            }&response_type=token&redirect_uri=${
              import.meta.env.VITE_REDIRECT_URI
            }&scope=${import.meta.env.VITE_SCOPE}&show_dialog=true`}
            className="btn btn-link text-2xl"
          >
            Authorize to get the songs
          </a>
        </div>
      )}
    </div>
  );
};

export default Spotify;
