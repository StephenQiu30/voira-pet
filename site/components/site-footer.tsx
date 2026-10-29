import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 md:px-8">
      <p className="text-sm text-muted-foreground">
        角色名只用来区分这五位原创伙伴，不代表接入同名模型，也不是模型厂商的官方形象。
      </p>
      <div className="flex flex-col gap-1 text-sm">
        <p className="font-medium">StephenQiu30</p>
        <p className="text-muted-foreground">
          AI Application Engineer · RAG 与 AI Agent · 上海
        </p>
        <div className="flex flex-wrap gap-x-4">
          <Button variant="link" className="h-auto px-0" asChild>
            <a href="mailto:stephenqiu03@gmail.com">stephenqiu03@gmail.com</a>
          </Button>
          <Button variant="link" className="h-auto px-0" asChild>
            <a href="https://github.com/StephenQiu30">GitHub</a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
