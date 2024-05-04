import Search from "./Search";
import ChatListItem from "./ChatListItem";

export default function LeftSidebar() {
    return (
        <aisde className="col-span-1 bg-slate-900 flex flex-col gap-4 p-8 h-screen">
            <Search />
            <div className="flex-1 overflow-y-auto flex flex-col">
                {
                    Chats.map((chat) => (
                        <ChatListItem key={chat.id} to={chat.id} iconColor={chat.iconColor}>{chat.name}</ChatListItem>
                    ))
                }
            </div>
        </aisde>
    );
}

const Chats = [
    { id: "ccde397f-f34c-4602-bb1a-1", name: "Chat 1", iconColor: "bg-emerald-900/40", pinned: true },
    { id: "ccde397f-f34c-4602-bb1a-2", name: "Chat 2", iconColor: "bg-rose-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-3", name: "Chat 3", iconColor: "bg-amber-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-4", name: "Chat 4", iconColor: "bg-violet-900/40", pinned: true },
    { id: "ccde397f-f34c-4602-bb1a-5", name: "Chat 5", iconColor: "bg-emerald-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-6", name: "Chat 6", iconColor: "bg-emerald-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-7", name: "Chat 7", iconColor: "bg-violet-900/40", pinned: true },
    { id: "ccde397f-f34c-4602-bb1a-8", name: "Chat 8", iconColor: "bg-amber-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-9", name: "Chat 9", iconColor: "bg-emerald-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-10", name: "Chat 10", iconColor: "bg-rose-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-11", name: "Chat 11", iconColor: "bg-amber-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-12", name: "Chat 12", iconColor: "bg-emerald-900/40" },
    { id: "ccde397f-f34c-4602-bb1a-13", name: "Chat 13", iconColor: "bg-rose-900/40" },
];