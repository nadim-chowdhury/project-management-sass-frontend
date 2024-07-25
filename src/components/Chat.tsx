"use client";

import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../lib/firebase";
import Image from 'next/image'

const Chat = ({ projectId }:any) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");

  const messagesRef = db
    .collection("projects")
    .doc(projectId)
    .collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const sendMessage = async (e:any) => {
    e.preventDefault();

    if (!message.trim()) return;

    await messagesRef.add({
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });

    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="overflow-y-auto max-h-96">
          {messages &&
            messages.map((msg:any) => <ChatMessage key={msg.id} message={msg} />)}
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

const ChatMessage = ({ message }:any) => {
  const { text, uid, displayName, photoURL } = message;

  return (
    <div className="flex mb-2">
      <Image
        src={photoURL || "/avatar-placeholder.png"}
        alt="Profile"
        className="w-8 h-8 rounded-full mr-2"
        width={480}
        height={480}
      />
      <div>
        <p className="font-semibold">{displayName}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Chat;

import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your backend URL

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("getMessages");
    socket.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", { text: message, userId: "user_id_here" }); // Replace with actual user id
    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="overflow-y-auto max-h-96">
          {messages.map((msg) => (
            <div key={msg.id} className="flex mb-2">
              <div>
                <p className="font-semibold">{msg.userId}</p>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
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
