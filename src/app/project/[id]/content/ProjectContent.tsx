'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 如果没有图片，使用默认的占位图片
  const displayImages = project.images && project.images.length > 0
    ? project.images
    : ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg"];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowViewer(true);
  };

  return (
    <div className="pb-40">
      {/* Hero Section - 固定宽高比 16:9 */}
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
              {project.authors}
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
            <p className="text-lg md:text-xl leading-relaxed text-black/70">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - 图片画廊 */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Gallery
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {/* Gallery Container - 响应式容器 */}
          <div className="w-full max-w-6xl mx-auto">
            {/* 图片网格 - 点击可放大 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-image-container relative cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-6 text-xs md:text-sm text-black/30">
            点击图片查看大图 | 支持缩放和拖拽
          </p>
        </div>
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