import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from "../config.js";

const db = getFirestore(app);
const dbRef = collection(db, "leaderboard");

class Leaderboard {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    toString() {
        return this.name + ", " + this.score;
    }
}

export const addLeaderboard = async(req, res) => {
    try {
        const docRef = await addDoc(dbRef, {
          name: req.body.name,
          score: req.body.score
        });
        console.log("Document written with ID: ", docRef.id);
        res.send("leaderboard successfully added!");
    } catch (e) {
        console.error("Error adding document: ", e);
        res.send(e);
    }
}

export const getLeaderboards = async(req, res) => {
    const querySnapshot = await getDocs(dbRef);

    let leaderboard = [];
    querySnapshot.forEach((doc) => {
        leaderboard.push({
            "id": doc.id,
            "data": doc.data()
        });     

        // const lb = new Leaderboard(doc.data().name, doc.data().score);
        // console.log(lb.toString());
    });

    res.send(leaderboard);
}

// module.exports = {getLeaderboard}