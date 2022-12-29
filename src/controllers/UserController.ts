import { Request, Response } from 'express'
import { ResponseType, ResponseRoutes } from '../types'
import User from '../schemas/userSchema';

export const getUsers = async (_: Request, res: Response<ResponseType>): ResponseRoutes => {
  try {
    const users = await User.find();

    return res.status(200).json({
      data: users,
      message: 'Users fetched successfully'
    })
  } catch (err) {
    return res.status(404).json({
      data: [],
      message: 'Error ocurred on UserController.getUser'
    });
  }
}