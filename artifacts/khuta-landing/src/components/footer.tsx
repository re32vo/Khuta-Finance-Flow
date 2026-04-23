function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Khuta Finance</h3>
            <p className="text-gray-400">
              حلول مالية شاملة لمستقبلك المالي الأفضل
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-gray-400">
              <li>إدارة الاستثمارات</li>
              <li>التخطيط المالي</li>
              <li>القروض والتمويل</li>
              <li>التأمين</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-white">الخدمات</a></li>
              <li><a href="/pricing" className="hover:text-white">التسعير</a></li>
              <li><a href="/contact" className="hover:text-white">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📱 +966 50 123 4567</li>
              <li>📍 الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Khuta Finance. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
