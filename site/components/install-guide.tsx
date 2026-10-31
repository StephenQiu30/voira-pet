"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { pets } from "@/app/pets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Dictionary } from "@/i18n/dictionary";
import { npmUrl, releaseUrl } from "@/lib/site";

const githubInstall =
  "npx --yes --allow-remote=root https://github.com/StephenQiu30/voira-pet/releases/download/v0.5.0/voira-pet-0.5.0.tgz install grok";

function Command({
  command,
  copy,
  copied,
}: {
  command: string;
  copy: string;
  copied: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex items-center gap-2 rounded-lg bg-muted py-1 pr-1 pl-4">
      <pre className="min-w-0 flex-1 overflow-x-auto py-2 font-mono text-sm">
        <code>{command}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon"
        className="size-11 shrink-0"
        aria-label={done ? copied : copy}
        onClick={() => {
          navigator.clipboard
            .writeText(command)
            .then(() => {
              setDone(true);
              window.setTimeout(() => setDone(false), 2000);
            })
            .catch(() => setDone(false));
        }}
      >
        {done ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
    </div>
  );
}

export function InstallGuide({
  copy,
  profiles,
}: {
  copy: Dictionary["install"];
  profiles: Dictionary["pets"];
}) {
  return (
    <section id="install" className="flex scroll-mt-24 flex-col gap-6 py-8">
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 className="text-3xl font-medium tracking-tight">{copy.title}</h2>
        <p className="text-muted-foreground">
          {copy.introBefore}
          <strong className="font-medium text-foreground">{copy.settings}</strong>
          {copy.introAfter}
        </p>
      </div>

      <Tabs defaultValue="quick">
        <TabsList variant="line" className="h-auto group-data-horizontal/tabs:h-11">
          <TabsTrigger value="quick" className="min-h-11 px-3">
            {copy.quick}
          </TabsTrigger>
          <TabsTrigger value="choose" className="min-h-11 px-3">
            {copy.choose}
          </TabsTrigger>
          <TabsTrigger value="zip" className="min-h-11 px-3">
            {copy.zip}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="quick" className="flex flex-col gap-4 pt-4">
          <p>{copy.quickBody}</p>
          <Command command="npx voira-pet" copy={copy.copy} copied={copy.copied} />
        </TabsContent>
        <TabsContent value="choose" className="flex flex-col gap-4 pt-4">
          <p>{copy.chooseBody}</p>
          <ul className="flex flex-col gap-4">
            {pets.map((pet) => {
              const profile = profiles[pet.id];
              return (
                <li key={pet.id} className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">
                    {profile.name} · {profile.epithet}
                  </p>
                  <Command
                    command={`npx voira-pet install ${pet.id}`}
                    copy={copy.copy}
                    copied={copy.copied}
                  />
                </li>
              );
            })}
          </ul>
        </TabsContent>
        <TabsContent value="zip" className="flex max-w-3xl flex-col gap-4 pt-4">
          <p>{copy.zipBody}</p>
          <Button variant="link" className="h-auto w-fit px-0" asChild>
            <a href={releaseUrl}>{copy.releaseLink}</a>
          </Button>
        </TabsContent>
      </Tabs>

      <Accordion type="single" collapsible>
        <AccordionItem value="path" className="border-0 not-last:border-b-0">
          <AccordionTrigger className="min-h-11">{copy.pathTitle}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>{copy.pathBody}</p>
            <Command command="npx voira-pet list" copy={copy.copy} copied={copy.copied} />
            <Command command={copy.customDir} copy={copy.copy} copied={copy.copied} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="github" className="border-0 not-last:border-b-0">
          <AccordionTrigger className="min-h-11">{copy.githubTitle}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>{copy.githubBody}</p>
            <Command command={githubInstall} copy={copy.copy} copied={copy.copied} />
            <Button variant="link" className="h-auto w-fit px-0" asChild>
              <a href="https://docs.npmjs.com/cli/v12/commands/npm-install/#allow-remote">
                {copy.npmDocs}
              </a>
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-wrap gap-x-4">
        <Button variant="link" className="h-auto px-0" asChild>
          <a href={npmUrl}>{copy.npm}</a>
        </Button>
        <Button variant="link" className="h-auto px-0" asChild>
          <a href={releaseUrl}>{copy.download}</a>
        </Button>
        <Button variant="link" className="h-auto px-0" asChild>
          <a href="https://github.com/StephenQiu30/voira-pet/issues">{copy.issues}</a>
        </Button>
      </div>
    </section>
  );
}
