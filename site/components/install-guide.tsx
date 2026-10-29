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

const releaseUrl =
  "https://github.com/StephenQiu30/voira-pet/releases/tag/v0.5.0";

function Command({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center gap-2 rounded-lg bg-muted py-1 pr-1 pl-4">
      <pre className="min-w-0 flex-1 overflow-x-auto py-2 font-mono text-sm">
        <code>{command}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon"
        className="size-11 shrink-0"
        aria-label={copied ? "已复制" : "复制命令"}
        onClick={() => {
          navigator.clipboard
            .writeText(command)
            .then(() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => setCopied(false));
        }}
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
    </div>
  );
}

export function InstallGuide() {
  return (
    <section id="install" className="flex scroll-mt-24 flex-col gap-6 py-8">
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 className="text-3xl font-medium tracking-tight">如何安装</h2>
        <p className="text-muted-foreground">
          需要 Node.js 20 或更高版本。一条命令会把宠物素材装进桌面客户端的本地目录。装好后打开
          <strong className="font-medium text-foreground"> 设置 → Pets </strong>
          ，刷新并选择她。安装器不会切换当前正在使用的宠物，本地安装和网页端的 Pets
          云收藏也是分开的。
        </p>
      </div>

      <Tabs defaultValue="quick">
        <TabsList
          variant="line"
          className="h-auto group-data-horizontal/tabs:h-11"
        >
          <TabsTrigger value="quick" className="min-h-11 px-3">
            快速安装
          </TabsTrigger>
          <TabsTrigger value="choose" className="min-h-11 px-3">
            选择伙伴
          </TabsTrigger>
          <TabsTrigger value="zip" className="min-h-11 px-3">
            下载安装包
          </TabsTrigger>
        </TabsList>
        <TabsContent value="quick" className="flex flex-col gap-4 pt-4">
          <p>不带参数时，默认领养 DeepSeek。</p>
          <Command command="npx voira-pet" />
        </TabsContent>
        <TabsContent value="choose" className="flex flex-col gap-4 pt-4">
          <p>
            五位可以分别安装，也可以同时保留。重复安装相同素材时保持原样；如果目标里已有不同内容，安装会停下来，不会覆盖。
          </p>
          <ul className="flex flex-col gap-4">
            {pets.map((pet) => (
              <li key={pet.id} className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">
                  {pet.name} · {pet.epithet}
                </p>
                <Command command={`npx voira-pet install ${pet.id}`} />
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="zip" className="flex max-w-3xl flex-col gap-4 pt-4">
          <p>
            没有 Node.js 时，从 GitHub Release v0.5.0
            下载对应角色的独立 ZIP。解压后把完整文件夹放进客户端的 pets
            目录，保留其中的 pet.json 和 spritesheet.webp。同一
            Release 也提供 npm 安装包和 SHA-256 校验和。
          </p>
          <Button variant="link" className="h-auto w-fit px-0" asChild>
            <a href={releaseUrl}>打开 GitHub Release v0.5.0</a>
          </Button>
        </TabsContent>
      </Tabs>

      <Accordion type="single" collapsible>
        <AccordionItem value="path" className="border-0 not-last:border-b-0">
          <AccordionTrigger className="min-h-11">
            安装位置与更多命令
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>
              默认安装到 ~/.codex/pets/。如果设置了 CODEX_HOME，则使用它下面的
              pets/ 目录。每位角色保存在独立的 voira-角色名 文件夹中。
            </p>
            <Command command="npx voira-pet list" />
            <Command command='npx voira-pet install grok --dir "/你的/pets目录"' />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="github" className="border-0 not-last:border-b-0">
          <AccordionTrigger className="min-h-11">
            通过 GitHub 安装固定版本
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-muted-foreground">
            <p>
              下面的命令下载 0.5.0 安装包。把最后的 grok
              换成其他角色名即可。npm 12 需要 --allow-remote=root
              才会允许这次远程下载，它只作用于本次命令，不修改全局 npm 配置。
            </p>
            <Command command="npx --yes --allow-remote=root https://github.com/StephenQiu30/voira-pet/releases/download/v0.5.0/voira-pet-0.5.0.tgz install grok" />
            <Button variant="link" className="h-auto w-fit px-0" asChild>
              <a href="https://docs.npmjs.com/cli/v12/commands/npm-install/#allow-remote">
                npm 官方说明
              </a>
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-wrap gap-x-4">
        <Button variant="link" className="h-auto px-0" asChild>
          <a href="https://www.npmjs.com/package/voira-pet">npm 0.5.0</a>
        </Button>
        <Button variant="link" className="h-auto px-0" asChild>
          <a href={releaseUrl}>GitHub 下载</a>
        </Button>
        <Button variant="link" className="h-auto px-0" asChild>
          <a href="https://github.com/StephenQiu30/voira-pet/issues">
            问题反馈
          </a>
        </Button>
      </div>
    </section>
  );
}
