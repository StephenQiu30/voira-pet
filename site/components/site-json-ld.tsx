import {
  authorEmail,
  authorUrl,
  faqs,
  npmUrl,
  releaseUrl,
  repoUrl,
  siteDescription,
  siteUrl,
} from "@/lib/site";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Voira Pet",
      url: `${siteUrl}/`,
      description: siteDescription,
      inLanguage: "zh-CN",
      publisher: { "@id": `${authorUrl}#person` },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${repoUrl}#source`,
      name: "voira-pet",
      description: siteDescription,
      codeRepository: repoUrl,
      url: npmUrl,
      programmingLanguage: "JavaScript",
      runtimePlatform: "Node.js 20+",
      version: "0.5.0",
      author: { "@id": `${authorUrl}#person` },
      sameAs: [repoUrl, npmUrl, releaseUrl, `${siteUrl}/`],
    },
    {
      "@type": "Person",
      "@id": `${authorUrl}#person`,
      name: "StephenQiu30",
      email: authorEmail,
      url: authorUrl,
      jobTitle: "AI Application Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shanghai",
        addressCountry: "CN",
      },
      sameAs: [authorUrl],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      url: `${siteUrl}/#faq`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
