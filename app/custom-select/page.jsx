//File: app/custom-select/page.jsx

import CustomSelect from "@/components/CustomSelect";

export default function CustomSelectPage() {
    return( 
        <div className="max-wd-md  mx-auto p-6">
            <h1 className="text-xl font-bold mb-4"> Custom Select</h1>
            <CustomSelect />
        </div>
    );
}