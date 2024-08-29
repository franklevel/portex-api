"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// src/handlers/users.ts
const ormconfig_1 = require("../config/ormconfig");
const User_1 = require("../entities/User");
const handler = async (event) => {
    try {
        if (!ormconfig_1.AppDataSource.isInitialized) {
            await ormconfig_1.AppDataSource.initialize();
        }
        const userRepository = ormconfig_1.AppDataSource.getRepository(User_1.User);
        const newUser = userRepository.create({
            username: 'john_doe',
            email: 'john@example.com',
            password: 'hashed_password',
        });
        await userRepository.save(newUser);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'User created successfully', user: newUser }),
        };
    }
    catch (error) {
        console.error('Error creating user:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to create user' }),
        };
    }
};
exports.handler = handler;
