import { useParams } from "react-router-dom";
import { LeftSidebar, ChatWindow, RightSidebar } from "@/components/Chat";

export default function Chat() {
    const { chatId } = useParams();
    return (
        <div className="grid grid-cols-4 flex-1 dark:bg-slate-950 bg-slate-950">
            <LeftSidebar />
            <ChatWindow />
            <RightSidebar />
        </div>
    );
}