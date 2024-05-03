import { useParams } from "react-router-dom";

export default function Chat() {
    const { chatId } = useParams();
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 bg-gray-200">Sidebar</div>
            <div className="col-span-2 bg-gray-100">
                <div>Chat ID: {chatId}</div>
            </div>
            <div className="col-span-1 bg-gray-200">Chat</div>
        </div>
    );
}