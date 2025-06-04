import SimpleNavbar from "@/components/SimpleNavbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <SimpleNavbar />
            <main className="p-6">
                <h1 className="text-2x1 font-bold mb-2">About Page</h1>
                <p>Halaman ini menjelaskan tentang aplikasi. </p>
            </main>
        </div>
    );
}