import { Request, Response } from "express";

import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  "registerSchool",
  RequestType.POST,
  (request: Request, response: Response) => {}
);
