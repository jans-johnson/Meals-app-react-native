import {ReactElement, createContext, useState} from 'react';

type FavouritesContextType = {
    ids: string[];
    addFavourite: (id: string) => void;
    removeFavourite: (id: string) => void;
  };

  export const FavouritesContext = createContext<FavouritesContextType>({
    ids: [],
    addFavourite: (id: string) => {},
    removeFavourite: (id: string) => {},
  });


export default function FavouritesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const[favoriteMealId, setFavouriteIds] = useState<string[]>([])

    function addFavourite(id:string){
        setFavouriteIds((current)=>[...current,id])
        console.log()
    }

    function removeFavourite(id:string){
        setFavouriteIds((current)=>current.filter(mealId=> mealId!=id))
    }
    const value={
        ids: favoriteMealId,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    }
  return (
    <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
  );
}
