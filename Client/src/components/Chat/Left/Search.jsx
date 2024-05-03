import { FiSearch } from 'react-icons/fi';

export default function Search() {
    return (
        <div className="w-full flex items-center justify-center gap-4 bg-slate-700 rounded-2xl px-4">
            <FiSearch className="text-slate-200 text-2xl" />
            <input placeholder="Search room or smth..."
                className='bg-transparent text-slate-200 w-full py-4 focus:outline-none' />
        </div>
    );
}