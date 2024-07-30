"use client";

import { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// import { auth, db } from "../lib/firebase";
import Image from "next/image";
import ChatMessage from "./ChatMessage";

const Chat = ({ projectId }) => {
  // const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  // const messagesRef = db
  //   .collection("projects")
  //   .doc(projectId)
  //   .collection("messages");
  // const query = messagesRef.orderBy("createdAt").limit(25);
  // const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // await messagesRef.add({
    //   text: message,
    // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // uid: user.uid,
    // displayName: user.displayName,
    // photoURL: user.photoURL,
    // });

    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="overflow-y-auto max-h-96">
          {/* {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)} */}
        </div>
        <form onSubmit={sendMessage} className="mt-4 flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 rounded-md outline-none focus:ring focus:ring-blue-400"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
