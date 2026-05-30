'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project18Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = ["/18xihu/ZB.jpg"];

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
              backgroundImage: `url(/18xihu/banner.png)`,
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
              刘雨畅、汤可迪、張雅玲、林晓棋、刘思嘉、许崟滢、周昱豪、康渲妮
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
              我们选取与“西湖”相关的四大传统故事，拆解提炼各故事核心场景、情感基调与叙事脉络。VR开发实现交互,测试主流VR设备的适配性，参考江南美学风格定义视觉基调,设计符合VR第一人称视角的空间尺度,规划用户的移动路径和视线引导。以第一人称视角进入西湖场景，能够沉浸式体验古风空间，四大IP数字化传承,将传统故事以现代科技方式呈现,文化价值与娱乐体验完美融合。
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
              <source src="https://pub-6dcb6ed488d54018b91f8924fb08b74f.r2.dev/video/18.mp4" type="video/mp4" />
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