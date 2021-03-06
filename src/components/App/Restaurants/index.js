import React, { useState, useMemo } from 'react';
import RestaurantsNavigation from './RestaurantsNavigation';
import Restaurant from './Restaurant';

export default function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find(
        restaurant => restaurant.id === activeRestaurantId
      ),
    [props.restaurants, activeRestaurantId]
  );

  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}
