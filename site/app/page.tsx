import { pets } from "./pets";
import { InstallGuide } from "@/components/install-guide";
import { SiteFaq } from "@/components/site-faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { repoUrl } from "@/lib/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main id="top" className="mx-auto w-full max-w-6xl px-4 md:px-8">
      <section className="flex max-w-3xl flex-col gap-4 py-12">
        <Badge variant="secondary" className="w-fit">
          ChatGPT Work 宠物
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
          Voira Pet
        </h1>
        <p className="text-lg">五位 Q 版伙伴</p>
        <p className="text-lg text-muted-foreground">
          温柔的鲸鱼娘，安静的龙裔，温暖的向日葵，好奇的猫耳少女，还有笑里藏着小机灵的星冠少女。
        </p>
        <p className="text-muted-foreground">
          Voira Pet 是 ChatGPT Work 的 Q 版宠物安装器。运行 npx
          voira-pet 即可安装，源代码在
          <Button variant="link" className="h-auto px-1" asChild>
            <a href={repoUrl}>GitHub 仓库 StephenQiu30/voira-pet</a>
          </Button>
          。
        </p>
      </section>

      <InstallGuide />
      <SiteFaq />

      <div id="pets" className="flex flex-col gap-16 py-8">
        {pets.map((pet) => (
          <Card
            key={pet.id}
            id={pet.id}
            className="scroll-mt-24 bg-transparent py-0 shadow-none ring-0"
          >
            <CardContent className="grid items-end gap-6 md:grid-cols-[minmax(220px,380px)_1fr]">
              <img
                src={`/pets/${pet.id}/master.png`}
                alt={`${pet.name} · ${pet.epithet}透明立绘`}
                width={1024}
                height={1536}
                className="mx-auto w-full max-w-[380px]"
              />
              <div className="flex flex-col gap-4">
                <CardHeader className="px-0">
                  <CardDescription>{pet.index}</CardDescription>
                  <CardTitle>
                    <h2 className="text-4xl font-medium tracking-tight">
                      {pet.name}
                    </h2>
                  </CardTitle>
                  <CardDescription className="text-base text-foreground">
                    {pet.epithet}
                  </CardDescription>
                </CardHeader>
                <p className="text-lg">{pet.tagline}</p>
                <p className="text-muted-foreground">{pet.persona}</p>
                <p className="text-muted-foreground">{pet.appearance}</p>
                <div className="flex flex-wrap gap-2" aria-label="性格">
                  {pet.traits.map((trait) => (
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
                  alt={`${pet.epithet}的动画预览`}
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
                  动画预览
                </figcaption>
              </figure>
              <figure>
                <img
                  src={`/pets/${pet.id}/card.png`}
                  alt={`${pet.name} · ${pet.epithet}设定卡，含表情、动作与服饰细节`}
                  width={1536}
                  height={1024}
                  className="w-full"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  设定卡
                </figcaption>
              </figure>
            </CardContent>
          </Card>
        ))}
      </div>

    </main>
  );
}
