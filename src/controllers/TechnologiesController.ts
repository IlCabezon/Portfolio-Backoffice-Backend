import { Request, Response } from 'express';
import { ResponseType } from '../types';
import Technology from '../schemas/technologySchema';

async function getTechnologies(_: Request, res: Response<ResponseType>): Promise<void> {
  try {
    const techStack = await Technology.find();

    res.status(200).json({
      message: 'Data fetched succesfully',
      data: techStack
    });
  } catch (err) {
    res.status(400).json({
      message: 'Error occurred in get technologies.',
      err
    });
  }
}

async function createOneTechnolgy(req: Request, res: Response<ResponseType>): Promise<void | Response<ResponseType>> {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: 'Error: Name is required'
    });
  }
  try {
    await Technology.create({ name });

    res.status(200).json({
      message: 'Technology created succesfully.'
    });
  } catch (err) {
    res.status(400).json({
      message: 'Error occurred in create one technology.',
      err
    });
  }
}

async function createTechnologies(req: Request, res: Response<ResponseType>): Promise<void | Response<ResponseType>> {}

export { getTechnologies, createOneTechnolgy, createTechnologies };
