import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "أساسي",
      price: "299",
      period: "ريال/شهر",
      description: "مثالي للأفراد الذين يبدأون رحلتهم المالية",
      features: [
        "استشارة شهرية",
        "تحليل محفظة بسيط",
        "تقارير أساسية"
      ],
      popular: false
    },
    {
      name: "احترافي",
      price: "599",
      period: "ريال/شهر",
      description: "للأفراد والعائلات الذين يريدون إدارة شاملة",
      features: [
        "استشارات أسبوعية",
        "إدارة محفظة استثمارية",
        "تحليل مفصل للمخاطر",
        "تخطيط مالي شامل",
        "دعم هاتفي"
      ],
      popular: true
    },
    {
      name: "مؤسسي",
      price: "999",
      period: "ريال/شهر",
      description: "للشركات والمستثمرين المحترفين",
      features: [
        "مدير استثمار مخصص",
        "إدارة محافظ متعددة",
        "تقارير يومية",
        "تحليلات متقدمة",
        "دعم 24/7",
        "اجتماعات شهرية"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">خططنا</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            اختر الخطة المناسبة لك
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خطط مرنة تناسب جميع الاحتياجات المالية مع ضمان الجودة والاحترافية
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500">الأكثر شعبية</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a href="https://your-store.com" target="_blank" rel="noopener noreferrer">
                    اشترك الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">هل يمكنني تغيير الخطة في أي وقت؟</h3>
              <p className="text-gray-600">نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت دون رسوم إضافية.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">ما هي طرق الدفع المتاحة؟</h3>
              <p className="text-gray-600">نقبل جميع البطاقات الائتمانية والتحويلات البنكية والمحافظ الإلكترونية.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">هل هناك فترة تجريبية؟</h3>
              <p className="text-gray-600">نعم، نقدم استشارة مجانية لمدة أسبوع لتجربة خدماتنا.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">كيف أحصل على الدعم؟</h3>
              <p className="text-gray-600">متوفر لك الدعم عبر الهاتف والدردشة المباشرة.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
