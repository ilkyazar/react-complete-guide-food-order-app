import classes from './AvailableMeals.module.css';
import { DUMMY_MEALS } from '../../lib/dummy-meals';

import Card from '../UI/Card';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
