export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hamza Aryan Sapnil",
    jobTitle: "Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript. Building modern, scalable web applications with expertise in Express.js, PostgreSQL, Prisma, and AI integration.",
    url: "https://nextjs-portfolio-delta-three.vercel.app",
    image: "https://nextjs-portfolio-delta-three.vercel.app/profile.png",
    email: "hamzaswapnil@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tangail",
      addressRegion: "Dhaka",
      addressCountry: "Bangladesh",
    },
    sameAs: [
      "https://www.linkedin.com/in/hamzaaryansapnil/",
      "https://github.com/HamzaAryanSapnil",
    ],
    knowsAbout: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "REST API",
      "AI Integration",
      "OpenRouter SDK",
      "n8n Automation",
      "Web Development",
      "Full-Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Gopalpur Government College",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hamza Aryan Sapnil - Portfolio",
    url: "https://nextjs-portfolio-delta-three.vercel.app",
    description:
      "Portfolio website of Hamza Aryan Sapnil, a Full-Stack MERN Developer specializing in Next.js, React.js, and TypeScript.",
    author: {
      "@type": "Person",
      name: "Hamza Aryan Sapnil",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Full-Stack Web Development Services",
    provider: {
      "@type": "Person",
      name: "Hamza Aryan Sapnil",
    },
    description:
      "Full-Stack MERN Development services including Next.js, React.js, TypeScript, Express.js, PostgreSQL, and AI integration.",
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "AI Integration",
      "API Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}

