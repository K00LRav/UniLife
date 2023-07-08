import { useState, createContext, useEffect } from "react";

export const FavoriteContext = createContext();


export default function FavoritesContextProvider(props) {
  //create global state
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favoritesList");
    if (storedFavs !== null) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);


  const addApartment = (item) => {
    console.log("add", item);
    let newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem("favoritesList", JSON.stringify(newFavorites));
  };

  const removeApartment = (item) => {
    let newFavorites = favorites?.filter((newFav) => newFav?.id !== item);
    setFavorites(newFavorites);
    localStorage.setItem("favoritesList", JSON.stringify(newFavorites));
    console.log(favorites);
  };


  const value = {
    favorites,
    addApartment,
    removeApartment,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

