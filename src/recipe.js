import React from 'react';
import styles from './recipe.module.css';


const Recipe = ({ title, calories, image, carbs, cholestorol, monounsaturated, polyunsaturated, saturated, totalfat, transfat, fiber, potassium, sodium, protein, sugars, vitaminE, vitaminA, vitaminB12, vitaminB6, vitaminC, vitaminD, vitaminK }) => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.image}>
                <h1>{title}</h1>
                <img src={image} alt="" />
            </div>

            <div className={styles.desc}>
                <p>Calories: {calories}Kcal</p>
                <p>Carbohydrates: {carbs} g</p>
                <p>Cholestorol: {cholestorol} mg</p>
                <p>Monounsaturated Fats: {monounsaturated} g</p>
                <p>Polyunsaturated Fats: {polyunsaturated} g</p>
                <p>Saturated Fats: {saturated} g</p>
                <p>Total Fat: {totalfat} g</p>
                <p>Fiber: {fiber} g</p>
                <p>Potassium: {potassium} mg</p>

            </div>

            <div className={styles.vita}>
                <p>Sodium: {sodium} mg</p>
                <p>Protein: {protein} g</p>
                <p>Sugars: {sugars} g</p>
                <p>Vitamin E: {vitaminE} mg</p>
                <p>Vitamin A: {vitaminA} ug</p>
                <p>Vitamin B12: {vitaminB12} ug</p>
                <p>Vitamin B6: {vitaminB6} mg</p>
                <p>Vitamin C: {vitaminC} mg</p>
                <p>Vitamin D: {vitaminD} ug</p>
                <p>Vitamin K: {vitaminK} ug</p>
            </div>
        </div>
    );
}

export default Recipe;