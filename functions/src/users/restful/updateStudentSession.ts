import { Request, Response } from "express";
import { Endpoint, RequestType } from "firebase-backend";
import { db } from "../../utils/admin";
import firebase from "firebase";

type UpdateType = "add" | "remove" | "update";
type Subject = {
  code: string;
  num: number;
};
type Session = {
  sessionId: string;
  student_subjects: Subject[];
  signed_up_times: {
    start: firebase.firestore.Timestamp;
    end: firebase.firestore.Timestamp;
  };
};

export default new Endpoint(
  "updateStudentSession",
  RequestType.POST,
  (request: Request, response: Response) => {
    const type: UpdateType = request.body["type"];
    const studentId: string = request.params.uid; //TODO change how we retrieve uid
    const past_session: Session = request.body["past_session"];
    const updated_session: Session = request.body["updated_session"];
    const upcoming_sessions: string[] = request.body["upcoming_sessions"];

    // Get session information from database
    const past_session_snapshot: any = db.doc(`sessions/${past_session.sessionId}`).get()
    const updated_session_snapshot: any = db.doc(`sessions/${updated_session.sessionId}`).get()

    switch (type) {
      case "add":
        db.doc(`students/${studentId}`).update({
          upcoming_sessions: upcoming_sessions.push(updated_session.sessionId),
        }).then(() => {
            updated_session_snapshot.student_subjects.forEach(subject => {
                if (condition) {
                    
                }
            });

            db.doc(`sessions/${updated_session.sessionId}`).update({
                students: past_session_snapshot.students.push(studentId),
                student_subjects: [
                    ...updated_session_snapshot.student_subjects,
                    {
                        code: "111",
                        num: 1
                    }
                ],
                signed_up_times
            })
        });
        break;
      case "remove":
        break;
      case "remove":
        break;
      default:
        break;
    }
    return response.status(201).send({});
  }
);
