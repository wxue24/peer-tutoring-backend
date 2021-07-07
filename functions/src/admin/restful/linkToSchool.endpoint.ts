import { Request, Response } from "express";

import { Endpoint, RequestType } from "firebase-backend";

export default new Endpoint(
  "linkToSchool",
  RequestType.POST,
  (request: Request, response: Response) => {}
);
