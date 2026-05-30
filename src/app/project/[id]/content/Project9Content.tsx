'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project9Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = ["/9movestep/ZB.png"];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowViewer(true);
  };

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
              backgroundImage: project.heroImage ? `url(${project.heroImage})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!project.heroImage && (
              <div className="absolute inset-0 opacity-15">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 30%, ${project.accentColor} 0%, transparent 40%),
                      radial-gradient(circle at 80% 70%, ${project.accentColor} 0%, transparent 40%),
                      repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 31px)
                    `,
                  }}
                />
              </div>
            )}

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

            {/* 标题区域 - 当没有图片时显示 */}
            <div className="relative z-10 p-8 md:p-14 w-full">
              <div className="max-w-4xl">
                <div
                  className="w-16 h-1 rounded-full mb-6"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* 大标题 */}
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
                  style={{
                    color: project.color,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {project.title}
                </h1>

                {/* 副标题 */}
                <h2
                  className="mt-4 text-lg md:text-xl tracking-wide"
                  style={{ color: `${project.color}99` }}
                >
                  {project.subtitle}
                </h2>
              </div>
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
              贲鎏楠、陈越、贾志杰、彭雅靖、秦瑾、佟抒展、吴晨颖、谢雯珺、祝缤晏
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
              MoveStep是一款融合AI、视觉设计与康复医学的居家辅助康复系统，聚焦脚踝等高频损伤场景，解决家庭康复“不敢练、乱练习、难坚持”的痛点。系统依托计算机视觉实现肢体动作实时捕捉与精准量化评估，结合斯金纳强化理论、心流理论打造游戏化训练模式，搭配语音鼓励、视觉特效等互动反馈，降低康复枯燥感。
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-black/70 mt-4" style={{ textIndent: "2em" }}>
              产品核心服务骨科术后、运动损伤康复人群，兼顾慢性疼痛矫正与科学健身用户，提供个性化康复课程、进度追踪与疼痛记录功能。调研显示超48%用户愿意使用，42%可接受订阅付费，市场需求明确。
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-black/70 mt-4" style={{ textIndent: "2em" }}>
              团队以“精准守护，每一步都算数”为理念，将技术理性与人文关怀结合，构建安全、有趣、可持续的居家康复闭环，未来将拓展AI康复魔镜、智能监测绑带等硬件，打造全场景康复解决方案。
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - 图片展示 */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Gallery
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {/* Gallery Container - 单张图片居中显示 */}
          <div className="w-full px-4">
            {displayImages.length === 1 ? (
              <div className="flex justify-center">
                <div
                  className="gallery-image-container relative cursor-pointer group aspect-[4/3] max-w-2xl w-full"
                  onClick={() => handleImageClick(0)}
                >
                  <img
                    src={displayImages[0]}
                    alt={`${project.title} - 1`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {displayImages.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-image-container relative cursor-pointer group aspect-[3/4]"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-center mt-4 text-xs md:text-sm text-black/30">
            点击图片查看大图
          </p>
        </div>
      </section>

      {/* ========== Video Section - 视频播放器（竖排两个视频）========== */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {/* 视频标题 */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Video
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {/* 竖排两个视频 */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* 第一个视频 */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <video
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              >
                <source src="https://pub-6dcb6ed488d54018b91f8924fb08b74f.r2.dev/video/9.1.mp4" type="video/mp4" />
              </video>
            </div>

            {/* 第二个视频 */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <video
                className="w-full h-full object-contain"
                controls
                preload="metadata"
              >
                <source src="/9movestep/SP2.MP4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 底部空白区域 - 防止误触底部引导窗口 */}
      <section className="h-[100px]">
        {/* Empty space to prevent triggering the bottom navigation bar */}
      </section>

      {/* 图片查看器弹窗 */}
      {showViewer && (
        <ImageViewer
          images={displayImages}
          initialIndex={selectedImageIndex}
          onClose={() => setShowViewer(false)}
        />
      )}
    </div>
  );
}