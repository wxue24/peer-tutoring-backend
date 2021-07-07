import { Request, Response } from "express";

import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  "updateTutorSession",
  RequestType.POST,
  (request: Request, response: Response) => {
    // const subjects = request.body["subjects"];
    // const grad_date = request.body["grad_date"];
    // const first_name = request.body["first_name"];
    // const last_name = request.body["last_name"];
    // const email = request.body["email"];
    // const password = request.body["password"];
    // const createdAt = new Date();
    const first_name = request.body["first_name"];

    return response.status(201).send({
      user: {
        first_name,
      },
    });
  }
);
