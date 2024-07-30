import Image from "next/image";

const ChatMessage = ({ message }) => {
  const { text, displayName, photoURL } = message;

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

export default ChatMessage;
