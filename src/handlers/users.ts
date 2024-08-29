// src/handlers/users.ts
import { AppDataSource } from '../config/ormconfig';
import { User } from '../entities/User';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    const userRepository = AppDataSource.getRepository(User);

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
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create user' }),
    };
  }
};
