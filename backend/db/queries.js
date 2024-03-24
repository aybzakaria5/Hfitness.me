exports.queryListClient = {
    GET_ALL_CLIENTS: 'SELECT * FROM "Hfitness".client',
    GET_CLIENT_BY_ID: 'SELECT * FROM "Hfitness".client WHERE userId = $1',
    UPDATE_CLIENT : 'UPDATE "Hfitness".client SET Username = $1, email = $2, userpassword = $3, Age = $4, Height = $5, Weight = $6, Gender = $7, FitnessGoal = $8 WHERE userId= $9',
    DELETE_CLIENT: 'DELETE FROM client WHERE client_id = $1',
}
exports.queryListDiet = {
    GET_ALL_DIETS: 'SELECT * FROM diet',
    GET_DIET_BY_ID: 'SELECT * FROM diet WHERE diet_id = $1',
    CREATE_DIET: 'INSERT INTO diet (DietName, DietType, DietDescription) VALUES ($1, $2, $3)',
    UPDATE_DIET: 'UPDATE diet SET DietName = $1, DietType = $2, DietDescription = $3, updated_at = CURRENT_TIMESTAMP WHERE diet_id = $4',
    DELETE_DIET: 'DELETE FROM diet WHERE diet_id = $1',
}