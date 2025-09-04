import { redirect } from 'next/navigation';

// Define the survey URLs mapping
const surveyUrls: Record<string, string> = {
  'tenant': 'https://docs.google.com/forms/d/e/1FAIpQLSfJ4nxf8yXx0scYTC43_F2p-Ub7q-YQHH6EM9eV_UIO7LYoFg/viewform',
  'landlord': 'https://docs.google.com/forms/d/e/1FAIpQLSeDkvgaqeuQ84HM2jIAuptU5r22KHHt1yfexrrd5thUErGwMQ/viewform',
  'case-manager': 'https://docs.google.com/forms/d/e/1FAIpQLSdheiypc4uDYN7CpSQfq53XRc9T5fSYj3xHdzDoFIvfLZEDmQ/viewform'
};

interface SurveyPageProps {
  params: {
    name: string;
  };
}

export default function SurveyPage({ params }: SurveyPageProps) {
  const { name } = params;
  
  // Check if the survey name exists in our mapping
  if (name in surveyUrls) {
    // Redirect to the Google Form
    redirect(surveyUrls[name]);
  }
  
  // If survey name doesn't exist, redirect to main surveys page
  redirect('/surveys');
}
