import { Link } from "wouter";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
                Khuta Finance
              </h1>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              الرئيسية
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              مميزاتنا
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              كيف نعمل
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
              باقات السيولة
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              الأسئلة الشائعة
            </Link>
          </nav>
          <div className="flex items-center">
            <Button asChild>
            <a href="https://your-store.com" target="_blank" rel="noopener noreferrer">
              متجرنا
            </a>
          </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;