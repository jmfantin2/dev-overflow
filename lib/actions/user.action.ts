'use server';

import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from './shared.types';
import { revalidatePath } from 'next/cache';
import Question from '@/database/question.model';

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updatedData, path } = params;
    await User.findOneAndUpdate(
      { clerkId }, // * find one
      updatedData, // * & update
      { new: true } // * creates new instance of a user in the database
    );
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// !!FLAG, differs from original
export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error('User not found');
    }
    // Delete everything related to the user
    // Questions, answers, comments, etc

    // get user question ids
    // eslint-disable-next-line no-unused-vars
    /* const userQuestionIds = await Question.find({ author: clerkId })
      .select('_id')
      .distinct('_id'); */

    // delete user questions
    await Question.deleteMany({ author: clerkId });

    // TODO: delete user answers, comments, etc

    const deletedUser = await User.findByIdAndDelete(clerkId);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
