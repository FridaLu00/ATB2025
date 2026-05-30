'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project5Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 使用项目5专属的图片 - 从项目数据中读取
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
              张宸瑄、陆奕佟、梁睿、陈溢森、张语轩、刘嘉铭、吴梓豪、杨茂森
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
                「竹韵千年」竹文化线上数字文化展，是面向大众打造的轻量化竹文化科普传播平台。竹文化在中华文脉中底蕴深厚，却因资料零散、传播形式单一，难以被大众系统感知，本项目以线上数字展为载体，为传统文化的活化传播提供了可落地的实践样本。
              </p>
              <p style={{ textIndent: "2em" }}>
                以历史脉络为经，生活美学为纬，我们从竹的生态本源、千年历史、日常应用、艺术意象与传统工艺五个维度搭建完整内容体系，依托轻量化交互、沉浸式视听与强叙事设计，让用户在流畅浏览中触摸竹的生长脉络、品读人文风骨，感受竹与东方生活美学的深度联结，让千年竹韵以鲜活方式触达大众，唤醒对东方美学的认同与热爱。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - 根据图片数量灵活调整布局 */}
      {displayImages.length > 0 && (
        <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                Gallery
              </span>
              <div className="h-[1px] flex-1 bg-black/10" />
            </div>

            {/* Gallery Container - 根据图片数量自动调整布局 */}
            <div className="w-full px-4">
              <div className={`grid gap-3 md:gap-6 ${
                displayImages.length === 1 ? 'grid-cols-1' :
                displayImages.length === 2 ? 'grid-cols-2' :
                displayImages.length === 4 ? 'grid-cols-2' :
                'grid-cols-3'
              }`}>
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
            </div>

            <p className="text-center mt-4 text-xs md:text-sm text-black/30">
              点击图片查看大图
            </p>
          </div>
        </section>
      )}

      {/* ========== Video Section - 视频播放器 ========== */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {/* 视频标题 */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Video
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {/* 视频播放器 - 使用浏览器默认控件 */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
            <video
              className="w-full h-full object-contain"
              controls
              preload="metadata"
            >
              <source src="https://pub-6dcb6ed488d54018b91f8924fb08b74f.r2.dev/video/5.mp4" type="video/mp4" />
              <source src="/5bamboo/SP.webm" type="video/webm" />
              <source src="/5bamboo/SP.ogv" type="video/ogg" />
              <p className="text-white p-4">您的浏览器不支持视频播放，请尝试使用其他浏览器或下载视频文件。</p>
            </video>
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
