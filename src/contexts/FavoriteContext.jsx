import { useState, createContext, useEffect } from "react";

export const FavoriteContext = createContext();


export default function FavoriteContextProvider({children}) {
  //create global state
    const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavs = localStorage.getItem("favoritesList");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);


  const addApartment = (itemToAdd) => {
    console.log('added', itemToAdd)
    const newFavorites = [...favorites, itemToAdd];

    setFavorites(newFavorites);
    localStorage.setItem("favoritesList", JSON.stringify(newFavorites));
  };

  const removeApartment = (itemToRemove) => {
    console.log('remove', itemToRemove)
    let newFavorites = favorites?.filter((item) => item?._id !== itemToRemove);

    setFavorites(newFavorites);
    localStorage.setItem("favoritesList", JSON.stringify(newFavorites));
    console.log();
  };

  // const v

  return (
    <FavoriteContext.Provider value={{favorites, addApartment, removeApartment}}>
      {children}
    </FavoriteContext.Provider>
  );

}

