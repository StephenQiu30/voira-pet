import type { Dictionary } from "@/i18n/dictionary";
import { localePath, type Locale } from "@/i18n/locales";
import { authorEmail, authorUrl, npmUrl, releaseUrl, repoUrl, siteUrl } from "@/lib/site";

export function SiteJsonLd({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pageUrl = `${siteUrl}${localePath(locale)}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        name: "Voira Pet",
        url: pageUrl,
        description: dictionary.meta.description,
        inLanguage: locale,
        publisher: { "@id": `${authorUrl}#person` },
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${repoUrl}#source`,
        name: "voira-pet",
        description: dictionary.meta.description,
        codeRepository: repoUrl,
        url: npmUrl,
        programmingLanguage: "JavaScript",
        runtimePlatform: "Node.js 20+",
        version: "0.5.0",
        author: { "@id": `${authorUrl}#person` },
        sameAs: [repoUrl, npmUrl, releaseUrl, pageUrl],
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
        "@id": `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        inLanguage: locale,
        isPartOf: { "@id": `${pageUrl}#website` },
        mainEntity: dictionary.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
