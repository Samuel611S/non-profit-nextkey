import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/app/content/site";

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {howItWorks.intro}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.steps.map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-nextkey-light-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-nextkey-purple">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-nextkey-purple mb-4">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

