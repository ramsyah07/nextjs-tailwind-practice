"use client";
import { useState } from "react";

export default function UploadPage(){
    const [dragOver, setDragOver] = useState(false);

        const handleDrop = (e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files[0];
            alert('File "${file.name}" di-drop!');
        };

        return (
            <div 
            onDrop ={handleDrop}
            onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
            }}
            onDragLeave={()=> setDragOver(false)}
            className={`min-h-[300px] border-4 border-dashed rounded p-6 flex items-center justify-center ${
            dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            >
                <p className="text-gray-600">Drop File Disini</p>
            </div>
        );
}
