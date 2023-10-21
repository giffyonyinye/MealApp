import { useContext, useLayoutEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import {FavoritesContext } from '../store/context/favorites-context'
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/context/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const mealId = route.params.mealId;
  const dispatch = useDispatch();
  
  // function handleFavoriteButton() {
  //  if(MealIsFavorite) {
  //   favoriteMealsCtx.removeFavorite(mealId);
  //  } else {
  //   favoriteMealsCtx.addFavorite(mealId);
  //  }
  // }; 

  function handleFavoriteButton() {
   if(MealIsFavorite) {
    dispatch(removeFavorite({id: mealId}));
   } else {
    dispatch(addFavorite({id: mealId}));
   }
  };

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const MealIsFavorite = favoriteMealsCtx.ids.includes(mealId) 

   useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={MealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPress={handleFavoriteButton}
          />
        );
      },
    });
  }, [navigation, handleFavoriteButton]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
