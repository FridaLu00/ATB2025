'use client';

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project7Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

            {!project.heroImage && (
              <div className="relative z-10 p-8 md:p-14 w-full">
                <div className="max-w-4xl">
                  <div
                    className="w-16 h-1 rounded-full mb-6"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight"
                    style={{
                      color: project.color,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    {project.title}
                  </h1>
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

      {/* Content Section */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Creators Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                Creators
              </span>
              <div className="h-[1px] flex-1 bg-black/10" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-black/70">
              施永康、陆奕佟、陈姗姗、涂婧琦、刘雨畅、曹原、陈廷坤
            </p>
          </div>

          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                About
              </span>
              <div className="h-[1px] flex-1 bg-black/10" />
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-black/70">
              <p style={{ textIndent: "2em", marginBottom: "1.5em" }}>
                “灵屿”是以《山海经》世界观为源头的当代文创产品系统，主张把传统神兽从图案装饰转译为真实可用的生活动作。首款产品“乘黄·寿”聚焦睡前手机使用场景，将乘黄“长寿、守护”的意象转化为床头手机托与睡眠养成入口。
              </p>
              <p style={{ textIndent: "2em", marginBottom: "1.5em" }}>
                用户睡前把手机放入带山海浮雕的底座，通过 NFC 或二维码进入 H5 守夜页，完成“托付手机、乘黄守夜、清晨归来”的轻量仪式。
              </p>
              <p style={{ textIndent: "2em" }}>
                产品不做医疗监测或强制锁机，而是用实体器物、低干扰交互和山海叙事，帮助用户温和放下屏幕。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {displayImages.length > 0 && (
        <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-black/30">
                Gallery
              </span>
              <div className="h-[1px] flex-1 bg-black/10" />
            </div>

            <div className="w-full px-4">
              {/* 单张图片使用居中布局，限制最大宽度 */}
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
                <div className={`grid gap-3 md:gap-6 ${
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
              )}
            </div>

            <p className="text-center mt-4 text-xs md:text-sm text-black/30">
              点击图片查看大图
            </p>
          </div>
        </section>
      )}

      {/* Video Section */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Video
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
            <video
              className="w-full h-full object-contain"
              controls
              preload="metadata"
            >
              <source src="https://pub-6dcb6ed488d54018b91f8924fb08b74f.r2.dev/video/7.mp4" type="video/mp4" />
              <source src="/7lingyu/SP.webm" type="video/webm" />
              <source src="/7lingyu/SP.ogv" type="video/ogg" />
              <p className="text-white p-4">您的浏览器不支持视频播放，请尝试使用其他浏览器或下载视频文件。</p>
            </video>
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <section className="h-[100px]">
      </section>

      {/* Image Viewer */}
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
