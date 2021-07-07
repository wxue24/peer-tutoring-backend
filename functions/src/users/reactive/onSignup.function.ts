import * as functions from "firebase-functions";
import { db } from "../../utils/admin.js";

exports.onSignup = functions.firestore
  .document("students/{student}")
  .onUpdate((snap, context) => {
    const prev_sessions = snap.before.get("upcoming_sessions");
    const updated_sessions = snap.after.get("upcoming_sessions");

    const data = snap.after.data();
    console.log(data);
  });
