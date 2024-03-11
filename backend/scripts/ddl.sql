

CREATE SCHEMA IF NOT EXISTS Hfitness
    AUTHORIZATION postgres;


CREATE TABLE Hfitness.client (
    userId SERIAL PRIMARY KEY,
    Username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    userpassword TEXT NOT NULL,
    Age INTEGER,
    Height DECIMAL(5,2),
    Weight DECIMAL(5,2),
    Gender VARCHAR(10),
    FitnessGoal VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Hfitness.DietPlan(
    PlanId SERIAL PRIMARY KEY,
    clientId INTEGER REFERENCES client(userId) ON DELETE CASCADE,
    Title VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Hfitness.ExericePrgm (
    ProgramId SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES client(userId) ON DELETE CASCADE,
    Title VARCHAR(100) NOT NULL,
    Duration INTERVAL,
    Price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

