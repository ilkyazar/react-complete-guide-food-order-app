import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Vegan Food, Delivered To You</h2>
      <p>
        Choose your favorite vegan meal from our broad selection of
        available ones and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients,
        just-in-time and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
