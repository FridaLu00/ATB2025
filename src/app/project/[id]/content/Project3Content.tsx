'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project3Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 使用项目3专属的图片 - 从项目数据中读取
  const displayImages = project.images && project.images.length > 0
    ? project.images
    : [];

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
            {/* 如果没有图片，显示背景装饰 */}
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
            {!project.heroImage && (
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
            )}
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
              陈璐璐、黄靖涵、林俊慧、彭佳文、李思诚、吴伊凡、谢洋岳、李苑琦
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
            <div className="text-lg md:text-xl leading-relaxed text-black/70">
              <p style={{ textIndent: "2em", marginBottom: "1.5em" }}>
                "云脉藏纹・猫守千年"是以云南彝族纹样、白族瓦猫与扎染为核心的线上数字艺术展，可延伸线下快闪，依托 TouchDesigner 粒子、3D 交互技术活化非遗。
              </p>
              <p style={{ textIndent: "2em", marginBottom: "1.5em" }}>
                展览以"守护"为主题，设溯源、幻境、共创、延续四大展区，呈现彝绣纹样寓意与瓦猫守护文化，用动态粒子让纹样焕新，支持观众为 3D 瓦猫 DIY 搭配纹样并保存。
              </p>
              <p style={{ textIndent: "2em" }}>
                项目面向 18-35 岁年轻群体，依托香港平台推动非遗数字出海，打造"读懂 — 创造 — 带走 — 传递"体验闭环，搭配文创与全渠道传播，兼顾文化传承、互动体验与商业价值，让千年民俗在数字时代新生。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - 4 张图片灵活布局 */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Gallery
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {/* Gallery Container - 4 张图片自适应布局 */}
          <div className="w-full px-4">
            {/* 2x2 网格布局 - 适合 4 张图片 */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-image-container relative cursor-pointer group aspect-[4/3]"
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
          </div>

          <p className="text-center mt-4 text-xs md:text-sm text-black/30">
            点击图片查看大图
          </p>
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
