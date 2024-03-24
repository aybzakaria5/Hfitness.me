const queries = require('../db/queries');
const dbConnection = require('../db/connection');

exports.getAllClients = async (req, res) => {
    try {
        const clientsQuery = queries.queryListClient.GET_ALL_CLIENTS;
        const result = await dbConnection.dbQuery(clientsQuery);
        console.log(`the clients are ${result.rows}`);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to get all the clients" });
    }
}

exports.createClient = async (req, res) => {

    try {
        const { Username, email, userpassword, Age, Height, Weight, Gender, FitnessGoal } = req.body;
        // const Username = req.body.Username;
        // const email = req.body.email;
        // const userpassword = req.body.userpassword;
        // const Age = req.body.Age;
        // const Height = req.body.Height;
        // const Weight = req.body.Weight;
        // const Gender = req.body.Gender;
        // const FitnessGoal = req.body.FitnessGoal;

        console.log("the input for Age and height and weight and fitnessgoal and gender " + Age + " " + Height + " " + Weight + " " + FitnessGoal + " " + Gender + "" + userpassword);

        const vlues = [Username, email, userpassword, Age, Height, Weight, Gender, FitnessGoal];
        const createClientQuery = queries.queryListClient.CREATE_CLIENT;
        await dbConnection.dbQuery(createClientQuery, vlues);
        return res.status(201).send({ message: "Client created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to create the client" });
        console.log("the error for usename " + Username);
    }
}
exports.getClientById = async (req, res) => {
    try {
        const id = req.params.id;
        const getClientQuery = queries.queryListClient.GET_CLIENT_BY_ID;
        const result = await dbConnection.dbQuery(getClientQuery, [id]);
        return res.status(200).send(JSON.stringify(result.rows));
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to get the client" });
    }
}

exports.updateClient = async (req, res) => {
    try {
        const id = req.params.id;
        const { Username, email, userpassword, Age, Height, Weight, Gender, Fitnessgoal } = req.body;

        // Fetch the existing client data
        const getClientQuery = queries.queryListClient.GET_CLIENT_BY_ID;
        const clientResult = await dbConnection.dbQuery(getClientQuery, [id]);
        const existingClientData = clientResult.rows[0];

        // Update only the provided fields, if available
        const updatedClientData = {
            Username: Username || existingClientData.username,
            email: email || existingClientData.email,
            userpassword: userpassword || existingClientData.userpassword,
            Age: Age || existingClientData.age,
            Height: Height || existingClientData.height,
            Weight: Weight || existingClientData.weight,
            Gender: Gender || existingClientData.gender,
            Fitnessgoal: Fitnessgoal || existingClientData.fitnessgoal
        };

        // Execute the update query
        const updateClientQuery = queries.queryListClient.UPDATE_CLIENT;
        const values = [
            updatedClientData.Username,
            updatedClientData.email,
            updatedClientData.userpassword,
            updatedClientData.Age,
            updatedClientData.Height,
            updatedClientData.Weight,
            updatedClientData.Gender,
            updatedClientData.Fitnessgoal,
            id
        ];

        await dbConnection.dbQuery(updateClientQuery, values);

        return res.status(200).send({ message: "Client updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Failed to update the client" });
    }
}
