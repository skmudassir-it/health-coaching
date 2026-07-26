export interface Service {
  slug: string;
  title: string;
  icon: string; // Font Awesome icon name
  description: string;
  shortDescription: string;
  features: string[];
  imageUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Weight Loss" | "Corporate" | "Fitness" | "Medical";
  summary: string;
  description: string;
  results: string[];
  clientName: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  imageUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  ctaText: string;
}

export const SERVICES: Service[] = [
  {
    slug: "nutrition-coaching",
    title: "Nutrition Coaching",
    icon: "utensils",
    imageUrl: "/images/services/nutrition-coaching.jpg",
    shortDescription: "Personalized meal plans and nutritional guidance to fuel your body right.",
    description:
      "Our nutrition coaching program provides customized meal plans tailored to your unique dietary needs, preferences, and health goals. Whether you're looking to lose weight, gain muscle, or simply eat healthier, our certified nutrition coaches will guide you every step of the way. We focus on sustainable habits, not fad diets, ensuring you develop a healthy relationship with food that lasts a lifetime.",
    features: [
      "Personalized meal planning based on your goals and preferences",
      "Macro and micronutrient tracking and education",
      "Grocery shopping guidance and meal prep strategies",
      "Eating out and social event navigation",
      "Supplement recommendations when appropriate",
      "Weekly check-ins and progress tracking",
    ],
  },
  {
    slug: "fitness-training",
    title: "Fitness Training",
    icon: "dumbbell",
    imageUrl: "/images/services/fitness-training.jpg",
    shortDescription: "Custom workout programs designed to build strength, endurance, and confidence.",
    description:
      "Our fitness training programs are designed for all levels — from beginners taking their first steps to athletes looking to break through plateaus. We create personalized workout plans that fit your lifestyle, equipment access, and fitness goals. Our trainers emphasize proper form, progressive overload, and injury prevention to help you build lasting strength and confidence.",
    features: [
      "Custom workout programs for home or gym",
      "One-on-one virtual training sessions",
      "Form correction and technique coaching",
      "Progressive programming with regular adjustments",
      "Mobility and flexibility work integration",
      "Performance tracking and goal setting",
    ],
  },
  {
    slug: "stress-management",
    title: "Stress Management",
    icon: "brain",
    imageUrl: "/images/services/stress-management.jpg",
    shortDescription: "Evidence-based techniques to reduce stress and build mental resilience.",
    description:
      "Chronic stress can undermine even the best health efforts. Our stress management program combines mindfulness, breathing techniques, and cognitive behavioral strategies to help you break the stress cycle. Learn to identify triggers, develop healthy coping mechanisms, and build the mental resilience needed to thrive in today's fast-paced world.",
    features: [
      "Mindfulness and meditation training",
      "Breathing techniques for immediate stress relief",
      "Cognitive reframing and thought pattern work",
      "Sleep hygiene and recovery optimization",
      "Time management and boundary-setting strategies",
      "Progress assessments and stress level tracking",
    ],
  },
  {
    slug: "sleep-optimization",
    title: "Sleep Optimization",
    icon: "moon",
    imageUrl: "/images/services/sleep-optimization.jpg",
    shortDescription: "Transform your sleep quality for better energy, mood, and overall health.",
    description:
      "Quality sleep is the foundation of good health. Our sleep optimization program helps you identify and address the factors disrupting your rest. From sleep environment adjustments to circadian rhythm resetting, we provide a comprehensive approach to improving your sleep quality. Wake up feeling refreshed and ready to tackle your day.",
    features: [
      "Sleep assessment and pattern analysis",
      "Sleep environment optimization recommendations",
      "Circadian rhythm alignment strategies",
      "Evening wind-down routine development",
      "Screen time and blue light management",
      "Progress tracking with subjective and objective measures",
    ],
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    icon: "scale-balanced",
    imageUrl: "/images/services/weight-management.jpg",
    shortDescription: "Sustainable weight management through science-backed nutrition and lifestyle changes.",
    description:
      "Our weight management program takes a holistic, non-restrictive approach to achieving and maintaining a healthy weight. We combine nutrition science, behavioral psychology, and lifestyle coaching to help you reach your goals without extreme dieting. Focus on building sustainable habits that lead to lasting results.",
    features: [
      "Comprehensive health and lifestyle assessment",
      "Personalized calorie and macro targets",
      "Behavioral change and habit formation coaching",
      "Emotional eating and trigger management",
      "Progress tracking beyond the scale",
      "Maintenance phase planning for long-term success",
    ],
  },
  {
    slug: "holistic-wellness",
    title: "Holistic Wellness",
    icon: "heart-pulse",
    imageUrl: "/images/services/holistic-wellness.jpg",
    shortDescription: "Integrative wellness coaching addressing mind, body, and spirit.",
    description:
      "True wellness goes beyond diet and exercise. Our holistic wellness program takes an integrative approach, addressing the interconnected aspects of your health — physical, mental, emotional, and spiritual. We help you create a balanced lifestyle that nourishes every part of your being.",
    features: [
      "Whole-person health assessment",
      "Mind-body connection practices",
      "Life balance and fulfillment coaching",
      "Energy management throughout your day",
      "Social connection and relationship health",
      "Personal growth and purpose exploration",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "sarahs-transformation",
    title: "Sarah's 50-Pound Transformation",
    category: "Weight Loss",
    summary: "How Sarah lost 50 pounds in 8 months and reclaimed her health.",
    imageUrl: "/images/projects/sarahs-transformation.jpg",
    description:
      "Sarah came to us feeling frustrated after years of yo-yo dieting. Through our integrated nutrition and fitness coaching, she not only lost 50 pounds but developed a sustainable relationship with food and exercise. Eight months later, she's maintained her weight loss and completed her first half-marathon.",
    results: [
      "Lost 50 pounds in 8 months",
      "Reduced body fat percentage from 38% to 24%",
      "Completed first half-marathon",
      "Eliminated pre-diabetes diagnosis",
      "Maintained weight loss for 6+ months",
    ],
    clientName: "Sarah M.",
  },
  {
    slug: "techcorp-wellness",
    title: "TechCorp Corporate Wellness Program",
    category: "Corporate",
    summary: "How we helped TechCorp reduce employee burnout by 40%.",
    imageUrl: "/images/projects/techcorp-wellness.jpg",
    description:
      "TechCorp was experiencing high employee turnover and burnout rates. We designed and implemented a comprehensive corporate wellness program including stress management workshops, nutrition seminars, and one-on-one coaching. Within six months, employee satisfaction scores improved dramatically.",
    results: [
      "40% reduction in reported burnout",
      "25% decrease in sick days",
      "Employee satisfaction improved by 35%",
      "92% program participation rate",
      "ROI of 3.2x on wellness investment",
    ],
    clientName: "TechCorp Inc.",
  },
  {
    slug: "marcus-fitness-journey",
    title: "Marcus's Fitness Comeback",
    category: "Fitness",
    summary: "From sedentary to strength: Marcus's journey to peak fitness at 45.",
    imageUrl: "/images/projects/marcus-fitness-journey.jpg",
    description:
      "At 45, Marcus had spent two decades at a desk job with minimal physical activity. He started with simple mobility work and graduated to strength training. Within a year, he was in the best shape of his life — stronger, more energetic, and pain-free for the first time in years.",
    results: [
      "Gained 12 pounds of lean muscle",
      "Deadlift increased from 95lbs to 315lbs",
      "Chronic back pain resolved",
      "Resting heart rate dropped from 78 to 58",
      "Energy levels and sleep quality dramatically improved",
    ],
    clientName: "Marcus J.",
  },
  {
    slug: "elena-medical-recovery",
    title: "Elena's Post-Surgery Recovery",
    category: "Medical",
    summary: "How nutrition and gentle movement accelerated Elena's recovery.",
    imageUrl: "/images/projects/elena-medical-recovery.jpg",
    description:
      "After major surgery, Elena struggled with fatigue and slow recovery. Our team created a specialized nutrition plan focused on healing foods and anti-inflammatory ingredients, paired with progressive gentle movement. She exceeded her surgeon's recovery timeline by three weeks.",
    results: [
      "Recovered 3 weeks ahead of medical projections",
      "Inflammation markers reduced by 60%",
      "Regained full mobility and strength",
      "Developed lifelong healthy eating habits",
      "Returned to work with more energy than before",
    ],
    clientName: "Elena R.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    role: "Weight Loss Client",
    quote:
      "Working with VitalEdge completely changed my relationship with food and exercise. I've tried every diet out there, but this is the first time I've actually kept the weight off. The coaches genuinely care and the accountability made all the difference.",
  },
  {
    id: "t2",
    name: "Marcus J.",
    role: "Fitness Client",
    quote:
      "At 45, I thought my best years were behind me. VitalEdge proved me wrong. The personalized training program was challenging but never overwhelming. I'm stronger now than I was in my 30s and my chronic back pain is gone.",
  },
  {
    id: "t3",
    name: "Jennifer L.",
    role: "Stress Management Client",
    quote:
      "I didn't realize how much stress was affecting my health until I started working with VitalEdge. The mindfulness techniques and lifestyle changes they taught me have been life-changing. I sleep better, I'm more present with my family, and I actually enjoy my work again.",
  },
  {
    id: "t4",
    name: "David K.",
    role: "Corporate Wellness Participant",
    quote:
      "Our company's wellness program with VitalEdge was the best investment we made all year. Employee morale is up, sick days are down, and people actually look forward to the wellness workshops. I personally lost 15 pounds through their nutrition coaching.",
  },
  {
    id: "t5",
    name: "Elena R.",
    role: "Medical Recovery Client",
    quote:
      "After my surgery, I felt hopeless about my recovery. The VitalEdge team created a nutrition and movement plan that was perfectly paced for my healing. I recovered faster than my doctors expected and feel healthier than I have in years.",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Dr. Amanda Reeves",
    role: "Founder & Head Coach",
    bio: "With over 15 years of experience in health and wellness, Dr. Reeves founded VitalEdge to bridge the gap between medical advice and practical, everyday health habits. She holds a PhD in Nutritional Science and is a certified health coach.",
    initials: "AR",
    imageUrl: "/images/team/amanda-reeves.jpg",
  },
  {
    id: "team-2",
    name: "James Chen",
    role: "Senior Nutrition Specialist",
    bio: "James is a registered dietitian and nutrition scientist who specializes in creating personalized meal plans that are both delicious and effective. He believes that healthy eating should never feel like deprivation.",
    initials: "JC",
    imageUrl: "/images/team/james-chen.jpg",
  },
  {
    id: "team-3",
    name: "Maria Rodriguez",
    role: "Fitness & Movement Coach",
    bio: "Maria is a certified personal trainer and yoga instructor with a passion for making fitness accessible to everyone. She designs programs that meet clients where they are and build confidence alongside strength.",
    initials: "MR",
    imageUrl: "/images/team/maria-rodriguez.jpg",
  },
  {
    id: "team-4",
    name: "Dr. Samuel Okafor",
    role: "Wellness & Mindset Counselor",
    bio: "Dr. Okafor is a licensed clinical psychologist who specializes in the mind-body connection. He helps clients overcome mental barriers, build resilience, and develop the mindset needed for lasting health transformation.",
    initials: "SO",
    imageUrl: "/images/team/samuel-okafor.jpg",
  },
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How is VitalEdge different from other health coaching services?",
    answer:
      "We take an integrative, whole-person approach to health coaching. Rather than focusing on just one aspect like diet or exercise, we address nutrition, fitness, stress, sleep, and mindset together. All our programs are personalized, evidence-based, and designed for sustainable, long-term results.",
  },
  {
    id: "faq-2",
    question: "Do I need to be in good shape to start?",
    answer:
      "Absolutely not! Our programs meet you exactly where you are. Whether you're a complete beginner or an experienced athlete, we tailor everything to your current fitness level and goals. The only requirement is a willingness to show up and do the work.",
  },
  {
    id: "faq-3",
    question: "How are coaching sessions conducted?",
    answer:
      "All coaching sessions are conducted virtually via video calls, making it convenient no matter where you are. We also provide support between sessions through our app, where you can message your coach, track progress, and access your personalized plans.",
  },
  {
    id: "faq-4",
    question: "How long does it take to see results?",
    answer:
      "Results vary based on your goals and starting point, but most clients report noticeable improvements in energy and well-being within the first 2-3 weeks. Significant physical changes typically become visible within 6-8 weeks of consistent effort. We focus on sustainable progress, not quick fixes.",
  },
  {
    id: "faq-5",
    question: "Can I switch programs if my goals change?",
    answer:
      "Yes! Life changes and so do goals. We regularly reassess your progress and adjust your program as needed. You can also upgrade or modify your plan at any time. Our flexible approach ensures you're always working toward what matters most to you.",
  },
  {
    id: "faq-6",
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 14-day satisfaction guarantee on all plans. If you're not satisfied with your coaching experience within the first two weeks, we'll provide a full refund, no questions asked. We're confident in our approach and want you to feel completely comfortable.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for those starting their health journey with guided support.",
    features: [
      "2 coaching sessions per month",
      "Personalized nutrition plan",
      "Basic workout program",
      "Email support between sessions",
      "Progress tracking dashboard",
      "Monthly progress review",
    ],
    featured: false,
    ctaText: "Get Started",
  },
  {
    id: "transformation",
    name: "Transformation",
    price: "$399",
    period: "/month",
    description: "Our most popular plan for those ready to fully transform their health.",
    features: [
      "4 coaching sessions per month",
      "Advanced nutrition & meal planning",
      "Custom fitness programming",
      "Stress management toolkit",
      "Priority chat support",
      "Weekly accountability check-ins",
      "Supplement protocol (if needed)",
      "Quarterly comprehensive assessment",
    ],
    featured: true,
    ctaText: "Start Transforming",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$699",
    period: "/month",
    description: "VIP-level support for those who want the ultimate coaching experience.",
    features: [
      "Unlimited coaching sessions",
      "Complete wellness concierge",
      "Daily check-ins and support",
      "Sleep optimization program",
      "Mindset & resilience coaching",
      "Pantry makeover & grocery tours",
      "Travel & dining-out strategies",
      "Family nutrition planning",
      "Quarterly lab work review",
      "24/7 direct coach access",
    ],
    featured: false,
    ctaText: "Go Premium",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
