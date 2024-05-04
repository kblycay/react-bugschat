import { useParams } from "react-router-dom";

export default function Center() {
    const { chatId } = useParams();
    return (
        <main className="col-span-2 bg-slate-900 rounded-r-3xl">
            <div>Chat ID: {chatId}</div>
        </main>
    );
}