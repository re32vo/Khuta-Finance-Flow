import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              حلول مالية شاملة
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              مستقبلك المالي
              <span className="text-blue-600 block">في أيدٍ أمينة</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              نقدم خدمات مالية متكاملة لمساعدتك في تحقيق أهدافك المالية.
              من الاستثمار إلى التخطيط المالي، نحن هنا لدعمك في كل خطوة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/services">استكشف خدماتنا</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  زر متجرنا
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تختار Khuta Finance؟
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نقدم خدمات مالية احترافية مع التركيز على رضا عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <CardTitle>استثمارات آمنة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  استثمارات متنوعة مع إدارة مخاطر محترفة لضمان عوائد مستقرة
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle>تخطيط مالي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  خطط مالية مخصصة تساعدك في تحقيق أهدافك المالية على المدى الطويل
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <CardTitle>قروض وتمويل</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  حلول تمويل مرنة تناسب احتياجاتك مع شروط ميسرة
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notification System Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نظام الإشعارات
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نظام إشعارات متقدم لإبقائك على اطلاع دائم بجميع الأحداث والتحديثات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <CardTitle>إشعارات النجاح</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  إشعارات فورية عند إتمام العمليات بنجاح، مثل إكمال الدفع أو تحديث البيانات
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <CardTitle>إشعارات التحذير</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  تنبيهات مهمة حول المخاطر أو الأخطاء التي تحتاج إلى انتباهك الفوري
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">ℹ️</span>
                </div>
                <CardTitle>إشعارات المعلومات</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  معلومات عامة وتحديثات حول الخدمات والعروض الجديدة
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔔</span>
                </div>
                <CardTitle>إشعارات مخصصة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  إشعارات شخصية بناءً على تفضيلاتك وسلوكك في استخدام المنصة
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            ابدأ رحلتك المالية اليوم
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            انضم إلى آلاف العملاء الذين يثقون بخدماتنا
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://your-store.com" target="_blank" rel="noopener noreferrer">
              اشترك الآن
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;