import { useContext } from "react";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";
import UserProgressContext from "../Store/UserProgressContext"; // Import UserProgressContext

const requestConfig = {};

const Menu = () => {
  
  const userProgressCtx = useContext(UserProgressContext); 
  const {
    data: availableMeals,
    isLoading,
    error,
  } = useHttp(`${userProgressCtx.server}/meals`, requestConfig, []);

  if (isLoading) {
    return <p className="center">No meals available at this point.</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Menu;
