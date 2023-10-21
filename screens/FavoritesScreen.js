import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = () => {
    // const favoriteMealsCtx = useContext(FavoritesContext);

      const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

     const favoriteMeals = MEALS.filter(meal => favoriteMealIds.ids.includes(meal.id));

    if(favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have not added any meal to favorites..purrrhhh</Text>
        </View>
    };

  return (
   <MealsList items={favoriteMeals}/>
  )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer : {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})