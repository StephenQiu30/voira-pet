import { pets } from "@/app/pets";
import { InstallGuide } from "@/components/install-guide";
import { SiteFaq } from "@/components/site-faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n/dictionary";
import { fill } from "@/i18n/format";
import { isLocale } from "@/i18n/locales";
import { repoUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  return (
    <main id="top" className="mx-auto w-full max-w-6xl px-4 md:px-8">
      <section className="flex max-w-3xl flex-col gap-4 py-12">
        <Badge variant="secondary" className="w-fit">
          {dictionary.home.badge}
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">Voira Pet</h1>
        <p className="text-lg">{dictionary.home.lead}</p>
        <p className="text-lg text-muted-foreground">{dictionary.home.intro}</p>
        <p className="text-muted-foreground">
          {dictionary.home.sourceBefore}
          <Button variant="link" className="h-auto px-1" asChild>
            <a href={repoUrl}>{dictionary.home.sourceLink}</a>
          </Button>
          {dictionary.home.sourceAfter}
        </p>
      </section>

      <InstallGuide copy={dictionary.install} profiles={dictionary.pets} />
      <SiteFaq copy={dictionary.faq} />

      <div id="pets" className="flex flex-col gap-16 py-8">
        {pets.map((pet) => {
          const profile = dictionary.pets[pet.id];
          return (
            <Card
              key={pet.id}
              id={pet.id}
              className="scroll-mt-24 bg-transparent py-0 shadow-none ring-0"
            >
              <CardContent className="grid items-end gap-6 md:grid-cols-[minmax(220px,380px)_1fr]">
                <img
                  src={`/pets/${pet.id}/master.png`}
                  alt={fill(dictionary.media.portraitAlt, {
                    name: profile.name,
                    epithet: profile.epithet,
                  })}
                  width={1024}
                  height={1536}
                  className="mx-auto w-full max-w-[380px]"
                />
                <div className="flex flex-col gap-4">
                  <CardHeader className="px-0">
                    <CardDescription>{pet.index}</CardDescription>
                    <CardTitle>
                      <h2 className="text-4xl font-medium tracking-tight">{profile.name}</h2>
                    </CardTitle>
                    <CardDescription className="text-base text-foreground">
                      {profile.epithet}
                    </CardDescription>
                  </CardHeader>
                  <p className="text-lg">{profile.tagline}</p>
                  <p className="text-muted-foreground">{profile.persona}</p>
                  <p className="text-muted-foreground">{profile.appearance}</p>
                  <div className="flex flex-wrap gap-2" aria-label={dictionary.media.traits}>
                    {profile.traits.map((trait) => (
                      <Badge key={trait} variant="secondary">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardContent className="grid gap-6 md:grid-cols-[280px_1fr]">
                <figure>
                  <img
                    src={`/pets/${pet.id}/preview.gif`}
                    alt={fill(dictionary.media.previewAlt, {
                      name: profile.name,
                      epithet: profile.epithet,
                    })}
                    width={384}
                    height={256}
                    className="w-full motion-reduce:hidden"
                  />
                  <img
                    src={`/pets/${pet.id}/master.png`}
                    alt=""
                    width={1024}
                    height={1536}
                    className="hidden w-full max-w-[220px] motion-reduce:block"
                  />
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {dictionary.media.previewCaption}
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={`/pets/${pet.id}/card.png`}
                    alt={fill(dictionary.media.cardAlt, {
                      name: profile.name,
                      epithet: profile.epithet,
                    })}
                    width={1536}
                    height={1024}
                    className="w-full"
                  />
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {dictionary.media.cardCaption}
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
