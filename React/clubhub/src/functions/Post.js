import { firestore } from '../firebase';
import * as fs from "firebase/firestore";

const initializePost = async (author, club, date, text, title) => {
    try {
        const postsRef = fs.collection(firestore, "forumPosts");
        await fs.addDoc(postsRef, {
            author: author,
            club: club,
            comments: [],
            date: date,
            likes: 0,
            text: text,
            title: title
        })
    } catch (error) {
        console.error("Unexpected error in initializePost: ", error);
    }
}

export { initializePost };