import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
    Dish: String,
    Ingredients: String,
})

var recipeData = mongoose.model("Owner", recipeSchema);

export default recipeData;
