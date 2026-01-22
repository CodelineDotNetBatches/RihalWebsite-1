// app/components/home/FAQ/FaqData.ts

export type FAQItemType = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: FAQItemType[] = [
  {
    id: "faq-1",
    question: "What are Rihal's areas of expertise in software development?",
    answer:
      "We develop a wide range of software solutions including custom web applications, mobile apps (iOS and Android), cloud-native applications, enterprise software systems, APIs and microservices, and data analytics platforms. Our expertise spans across various industries and technology stacks to meet diverse business requirements.",
  },
  {
    id: "faq-2",
    question: "What industries does rihal specialize in for its software development?",
    answer:
      "We work across multiple industries and adapt our solutions to each domain’s needs, including enterprise, public sector, and fast-growing digital businesses.",
  },
  {
    id: "faq-3",
    question: "How can I get in touch with rihal for a consultation?",
    answer:
      "You can reach out through our contact channels to book a consultation, and our team will respond with next steps.",
  },
  { 
    id: "faq-4",
    question: "What is the typical timeline for software development projects at rihal?",
    answer:
      "Timelines vary by scope. We usually start with discovery, then design, implementation, testing, and release—each phase estimated based on requirements.",
  },
];
