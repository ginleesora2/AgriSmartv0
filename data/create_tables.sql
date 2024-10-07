CREATE TABLE soil_moisture (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    value FLOAT NOT NULL
);

CREATE TABLE precipitation (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    value FLOAT NOT NULL
);

CREATE TABLE vegetation (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    value FLOAT NOT NULL
);
