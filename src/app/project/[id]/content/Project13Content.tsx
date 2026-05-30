'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project13Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = ["/13ruishibai/ZB.jpg"];

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
              backgroundImage: `url(/13ruishibai/banner.png)`,
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
              施永康、陈姗姗、涂婧琦、唐上楣、于欣廷
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
              传统醒狮里，每一头狮子都有自己的身份——刘备狮黄面长须，关羽狮红面凤眼，张飞狮黑面短须。狮头不只是道具，更是角色、是性格、是故事。但在今天，市面上的醒狮逐渐变成了统一的五彩斑斓和可爱造型，失去了专属的文化意义——它们成了只有漂亮皮囊的装饰品。与此同时，许多醒狮爱好者在家中没有合适的空间进行训练与指导，学习的门槛依然很高。我们想改变这一点。「瑞狮拜」用 AI 智能体和摄像头动捕技术，让每个人在家里、在浏览器里就能拥有一头有灵魂的醒狮，用身体去演绎它的喜怒哀乐。
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
              <source src="https://pub-6dcb6ed488d54018b91f8924fb08b74f.r2.dev/video/13.mp4" type="video/mp4" />
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