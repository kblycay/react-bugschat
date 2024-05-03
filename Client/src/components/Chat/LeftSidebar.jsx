import { FiSearch } from 'react-icons/fi';
export default function LeftSidebar() {
    return (
        <aisde className="col-span-1 bg-slate-800/10 flex flex-col gap-4 p-8">
            <div className="w-full flex items-center justify-center gap-4 bg-slate-700 rounded-2xl px-4">
                <FiSearch className="text-slate-200 text-2xl" />
                <input placeholder="Search room or smth..."
                    className='bg-transparent text-slate-200 w-full py-4 focus:outline-none' />
            </div>
        </aisde>
    );
}