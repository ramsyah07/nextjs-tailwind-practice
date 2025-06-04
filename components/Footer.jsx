import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-400">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
