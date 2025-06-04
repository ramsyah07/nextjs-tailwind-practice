// File: components/TimeLine.jsx

export default function TimeLine({ items}) {
    return (
        <div className="border-1-2 border-blue-500 pl-4 space-y-6">
            {items.map((item, index) => (
                <div key={index} className="relative">
                    <div className="absolute left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-500">{item.title}</h3>
                        <time className="text-sm text-gray-500">{item.time}</time>
                        <p className="text-gray-7000 mt-1 text-sm">{item.description}</p>
                    </div>
                    </div>
            ))}
        </div>
    );
}