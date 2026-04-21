import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Services() {
  const services = [
    {
      title: "إدارة الاستثمارات",
      description: "إدارة محافظ استثمارية متنوعة مع تحليل المخاطر وتحقيق عوائد مستدامة",
      features: ["تحليل السوق", "إدارة المخاطر", "تقارير شهرية", "استشارات مخصصة"],
      icon: "📈"
    },
    {
      title: "التخطيط المالي",
      description: "خطط مالية شاملة للأفراد والعائلات والشركات",
      features: ["تقييم الوضع المالي", "تحديد الأهداف", "خطة تنفيذية", "متابعة دورية"],
      icon: "📋"
    },
    {
      title: "القروض والتمويل",
      description: "حلول تمويل متنوعة تناسب جميع الاحتياجات",
      features: ["قروض شخصية", "تمويل عقاري", "قروض تجارية", "شروط مرنة"],
      icon: "🏦"
    },
    {
      title: "التأمين الشامل",
      description: "تغطية تأمينية شاملة للحماية المالية",
      features: ["تأمين صحي", "تأمين سيارات", "تأمين ممتلكات", "تأمين أعمال"],
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">خدماتنا</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            خدمات مالية متكاملة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المالية المصممة لتلبية احتياجاتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <a href="https://your-store.com" target="_blank" rel="noopener noreferrer">
                    احصل على الخدمة
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            هل تحتاج استشارة مجانية؟
          </h2>
          <p className="text-gray-600 mb-6">
            فريقنا من الخبراء جاهز لمساعدتك في اختيار الخدمة المناسبة
          </p>
          <Button size="lg" asChild>
            <a href="/contact">تواصل معنا</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;