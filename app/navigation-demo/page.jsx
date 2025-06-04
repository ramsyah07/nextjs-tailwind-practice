import SimpleNavbar from "@/components/SimpleNavbar";

export default function NavigationHome() {
    return (
        <div className="min-h-screen">
            <SimpleNavbar />
            <main  className="p-6">
                <h1 className="text-2x1 font-bold  mb-2">Home Page</h1>
                <p> Ini adalah halaman utama.</p>
            </main>
        </div>
    );
}