import React from 'react';
import { Link, useParams } from "react-router-dom";
import { classnames } from "tailwindcss-classnames";
import { TiPin } from "react-icons/ti";

export default function ChatListItem({ to, iconColor = "bg-sky-600", children, pinned }) {
    const { chatId } = useParams();
    const button = classnames('flex flex-row items-center gap-4 w-full p-2 rounded-2xl transition-all duration-200', {
        'hover:bg-slate-950': chatId !== to,
        'bg-slate-800 hover:bg-slate-950': chatId === to,
    })
    return (
        <Link to={`/${to}`} className={button}>
            <div className={`h-20 w-20 min-w-20 rounded-3xl ${iconColor}`}></div>
            <div>
                <p className="flex-1 text-white">{children}</p>
                <p className="text-gray-400 text-sm line-clamp-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, rem!</p>
            </div>
            <div className='h-20 w-10 min-w-10 flex flex-col items-center justify-center gap-2'>
                <p className="text-gray-400 text-sm">12:00</p>
                {pinned && <TiPin className="text-gray-400 text-xl" />}
            </div>
        </Link >
    )
}