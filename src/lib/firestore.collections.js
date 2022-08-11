import { collection } from "firebase/firestore";
import { db } from "./init-firebase";

export const managerCollectionRef= collection(db, 'Managers');