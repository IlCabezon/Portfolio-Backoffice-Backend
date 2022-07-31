import { Request, Response } from 'express'
import { ResponseType, ResponseRoutes } from '../types'
import Technology from '../schemas/technologySchema'

async function getTechnologies(_: Request, res: Response<ResponseType>): ResponseRoutes {
  try {
    const techStack = await Technology.find()

    return res.status(200).json({
      message: 'Data fetched succesfully',
      data: techStack
    })
  } catch (err) {
    return res.status(400).json({
      message: 'Error occurred in get technologies.',
      err
    })
  }
}

async function createOneTechnolgy(req: Request, res: Response<ResponseType>): Promise<void> {
  const { name } = req.body

  if (name === undefined) {
    res.status(400).json({
      message: 'Error: Name is required'
    })
  }
  try {
    await Technology.create({ name })

    res.status(200).json({
      message: 'Technology created succesfully.'
    })
  } catch (err) {
    res.status(400).json({
      message: 'Error occurred in create one technology.',
      err
    })
  }
}

// async function createTechnologies(_: Request, __: Response<ResponseType>): Promise<void | Response<ResponseType>> {}

export { getTechnologies, createOneTechnolgy }
