'use client';

import type { Project } from "@/lib/projects";

interface ProjectContentProps {
  project: Project;
}

export default function Project20Content({ project }: ProjectContentProps) {
  return (
    <div className="pb-40">
      {/* Hero Section */}
      <section className="pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Hero Banner - 静态展示，不支持点击放大 */}
          <div
            className="relative overflow-hidden rounded-xl h-[280px] md:h-[360px] lg:h-[420px] flex items-end pointer-events-none"
            style={{
              backgroundColor: project.bgColor,
              backgroundImage: `url(/20wooder/banner.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* 右上角编号 - 在 banner 内部 */}
            <div className="absolute top-0 right-10">
              <span
                className="text-[clamp(4rem,10vw,10rem)] font-bold leading-none select-none"
                style={{
                  color: "rgba(255,255,255,0.18)",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {String(project.id).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - 白色区域 */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Creators Section - 作者信息 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                Creators
              </span>
              <div className="h-[1px] flex-1 bg-black/10" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-black/70">
              赖颖文、蔡文轩、侯瀛、丛一涵
            </p>
          </div>

          {/* About Section - 介绍 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                About
              </span>
              <div className="h-[1px] flex-1 bg-black/10" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-black/70" style={{ textIndent: "2em" }}>
              wooder 由“wood（木）”与“er（人）”组成，在快节奏的城市中成为“木者”，放慢节奏和脚步， 或许也能一种获得“城市游牧”的状态。我们希望可以用手作的温度 ，传递对远行的向往与想象。我们希望用手工编织的温度，让每一件随身配饰，都成为日常里的微小风景。
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-black/70 mt-4" style={{ textIndent: "2em" }}>
              wooder 也是“我的”。我们将艺术、自由与情绪，编织进物件之中，赋予它们关于自我的意义。像树一样，不急着长大；像远行一样，始终保有出发的心情。
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-black/70 mt-4" style={{ textIndent: "2em" }}>
              wooder「山山海海」首发系列，共有四款产品，将沙粒、草浪与海面波纹揉进编织肌理，以手作传递慢行、远方与精神游牧的想象。
            </p>
          </div>
        </div>
      </section>

      {/* 底部空白区域 - 防止误触底部引导窗口 */}
      <section className="h-[100px]">
        {/* Empty space to prevent triggering the bottom navigation bar */}
      </section>
    </div>
  );
}