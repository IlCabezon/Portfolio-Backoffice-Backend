import { Request, Response } from "express";
import { ResponseType, ResponseRoutes } from "../types";
import User from '../schemas/userSchema'
import { PhotoCache } from '../schemas/cacheSchemas'
import { v4 } from 'uuid'
import Post from '../schemas/postSchema'

export const fetchPosts = async (_: Request, res: Response<ResponseType>): ResponseRoutes => {
  const users = await User.find({});
  const photos = await PhotoCache.find({});

  for (let { alt, originalWidth, originalHeight, avg_color, src } of photos) {
    const randomIndex = getRandomIndex();

    const { login, picture } = users[randomIndex]
  
    const formattedPost: any = {
      uuid: v4(),
      _user: {
        uuid: login.uuid,
        username: login.username,
        picture
      },
      description: alt,
      photo: {
        originalWidth,
        originalHeight,
        avg_color,
        alt,
        src: src.medium
      },
      uploadDate: new Date(),
      likes: {
        amount: 0,
        users: []
      }
    }
    await Post.create(formattedPost)
  }

  return res.send({
    message: 'success',
    data: users
  })
}

function getRandomIndex(min = 0, max = 171) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}