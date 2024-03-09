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
        const { Username, email, password, Age, Height, Weight, Gender, FitnessGoal } = req.body;
        console.log("the inputs are " +  req.body);

        const vlues = [Username, email, password, Age, Height, Weight, Gender, FitnessGoal];
        const createClientQuery = queries.queryListClient.CREATE_CLIENT;
        await dbConnection.dbQuery(createClientQuery, vlues);
        return res.status(201).send({ message: "Client created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to create the client" });
    }
}