import Image from "next/image";
import { assets } from "../assets/assets";
import { useState } from "react";

export default function Home() {

  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        {/* -- Sidebar --*/}
        <div>
          <Image className="rotate-180" src={assets.menu_icon} alt="" width={30} height={30} />
          <Image className="opacity-70" src={assets.chat_icon} alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
