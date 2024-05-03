import { Link } from "react-router-dom";
import Search from "./Search";
import { useParams } from "react-router-dom";
import { classnames } from "tailwindcss-classnames";

export default function LeftSidebar() {
    return (
        <aisde className="col-span-1 bg-slate-900 flex flex-col gap-4 p-8">
            <Search />
            <ChatListItems to="ccde397f-f34c-4602-bb1a-c971be62a87f">Chat 1</ChatListItems>
            <ChatListItems to="ccde397f-f34c-4602-bb1a-asdadqwdqwdq" iconColor="bg-emerald-700">Chat 2</ChatListItems>
        </aisde>
    );
}

function ChatListItems({ to, iconColor="bg-sky-600", children }) {
    const { chatId } = useParams();
    const button = classnames('flex flex-row items-center gap-4 w-full p-2 rounded-2xl transition-all duration-200', {
        'hover:bg-slate-950': chatId !== to,
        'bg-slate-800 hover:bg-slate-950': chatId === to,
    })
    return (
        <Link to={`/${to}`} className={button}>
            <div className={`h-16 w-16 rounded-2xl ${iconColor}`}></div>
            <div className="flex-1 text-white">{children}</div>
        </Link >
    )
}