import {
  getTasksService,
  addTaskService,
  deleteTaskService,
} from "../services/taskService";
import { Request, Response } from "express";

export const getTasks = async (request: Request, response: Response) => {
  try {
    response.send(await getTasksService());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createTask = async (request: Request, response: Response) => {
  try {
    const result = await addTaskService(request);
    response.status(201).send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

export const deleteTask = async (request: Request, response: Response) => {
  try {
    const result = await deleteTaskService(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
