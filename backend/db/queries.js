exports.queryListClient = {
    GET_ALL_CLIENTS: 'SELECT * FROM client',
    GET_CLIENT_BY_ID: 'SELECT * FROM client WHERE client_id = $1',
    CREATE_CLIENT: 'INSERT INTO client (Username, email, password, Age, Height, Weight, Gender, FitnessGoal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    UPDATE_CLIENT: 'UPDATE client SET Username = $1, email = $2, password = $3, Age = $4, Height = $5, Weight = $6, Gender = $7, FitnessGoal = $8, updated_at = CURRENT_TIMESTAMP WHERE userId = $9',
    DELETE_CLIENT: 'DELETE FROM client WHERE client_id = $1',
}
exports.queryListDiet = {
    GET_ALL_DIETS: 'SELECT * FROM diet',
    GET_DIET_BY_ID: 'SELECT * FROM diet WHERE diet_id = $1',
    CREATE_DIET: 'INSERT INTO diet (DietName, DietType, DietDescription) VALUES ($1, $2, $3)',
    UPDATE_DIET: 'UPDATE diet SET DietName = $1, DietType = $2, DietDescription = $3, updated_at = CURRENT_TIMESTAMP WHERE diet_id = $4',
    DELETE_DIET: 'DELETE FROM diet WHERE diet_id = $1',
}