import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { currentFocus } from "@/app/content/site";

export function CurrentFocus() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-6">
            Our Current Focus
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're building step by step, with an emphasis on the communities most impacted by housing inequities.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {currentFocus.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-nextkey-gold" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

