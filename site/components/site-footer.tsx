import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/dictionary";
import { authorEmail, authorUrl } from "@/lib/site";

export function SiteFooter({ copy }: { copy: Dictionary["footer"] }) {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 md:px-8">
      <p className="text-sm text-muted-foreground">{copy.disclaimer}</p>
      <div className="flex flex-col gap-1 text-sm">
        <p className="font-medium">StephenQiu30</p>
        <p className="text-muted-foreground">{copy.role}</p>
        <div className="flex flex-wrap gap-x-4">
          <Button variant="link" className="h-auto px-0" asChild>
            <a href={`mailto:${authorEmail}`}>{authorEmail}</a>
          </Button>
          <Button variant="link" className="h-auto px-0" asChild>
            <a href={authorUrl}>GitHub</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
