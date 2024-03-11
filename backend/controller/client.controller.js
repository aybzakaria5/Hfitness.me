const queries = require('../db/queries');
const dbConnection = require('../db/connection');

exports.getAllClients = async (req, res) => {
    try {
        const clientsQuery = queries.queryListClient.GET_ALL_CLIENTS;
        const result = dbConnection.dbQuery(clientsQuery);
        console.log(`the clients are ${result.rows}`);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to get all the clients" });
    }
}

exports.createClient = async (req, res) => {

    try {
        // const { Username, email, password, Age, Height, Weight, Gender, FitnessGoal } = req.body;
        const Username = req.body.Username;
        const email = req.body.email;
        // const password = req.body.password;
        const Age = req.body.Age;
        const Height = req.body.Height;
        const Weight = req.body.Weight;
        const Gender = req.body.Gender;
        const FitnessGoal = req.body.FitnessGoal;

        console.log("the input for Age and height and weight and fitnessgoal and gender " + Age + " " + Height + " " + Weight + " " + FitnessGoal + " " + Gender);

        const vlues = [Username, email, Age, Height, Weight, Gender, FitnessGoal];
        const createClientQuery = queries.queryListClient.CREATE_CLIENT;
        await dbConnection.dbQuery(createClientQuery, vlues);
        return res.status(201).send({ message: "Client created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to create the client" });
        console.log("the error for usename " + Username);
    }
}