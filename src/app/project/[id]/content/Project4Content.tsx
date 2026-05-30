'use client';

import { useState, useCallback } from "react";
import type { Project } from "@/lib/projects";
import ImageViewer from "../components/ImageViewer";

interface ProjectContentProps {
  project: Project;
}

export default function Project4Content({ project }: ProjectContentProps) {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false);

  // 全屏播放功能
  const openFullscreenVideo = useCallback(() => {
    setShowFullscreenVideo(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeFullscreenVideo = useCallback(() => {
    setShowFullscreenVideo(false);
    document.body.style.overflow = '';
  }, []);

  // 使用项目4专属的图片 - 暂无可展示图片，使用占位图
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
              丛一涵、唐上楣、胡钰玺、谢玉华、廖欢、易忞婧、姚梓欣、卓开新
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
                本展览装置以"朱翠"为题，
              </p>
              <p style={{ textIndent: "2em", marginBottom: "1.5em" }}>
                第一部分为南宋背景的互动视频:绍兴五年，郁林民居中，柳师傅一家温馨制翠，笑语盈盈--殊不知所有温情镜头皆是一只翠鸟的临终视角。直至溺毙取羽的瞬间反转，揭开幕布后堆叠如山的带血羽翼，直指"以命换美"的残酷真相。
              </p>
              <p style={{ textIndent: "2em", marginBottom: "1.5em" }}>
                第二部分为触摸体验区:展陈现代仿翠羽毛--孔雀、鹦鹉等可持续替代材料。观众可亲手抚触其丝绒质感与结构色辉光，对比传统翠羽的致密温软，在触觉中感知技艺传承与生态保护的当代平衡。
              </p>
              <p style={{ textIndent: "2em" }}>
                第三部分为二创画作:基于王依雅《繁空录》的拼贴再创。以孔雀覆羽、鹦鹉体羽按传统点翠逻辑逐片嵌压，使平面工笔化身为半浮雕翠饰，移步间蓝绿辉光流转。作品以替代材料延续非遗之美，将生态伦理内化为创作基因，让点翠从杀戮记忆走向可再生、可触摸的当代艺术新生。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - 仅在有图片时显示 */}
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
      )}

      {/* ========== Video Section - 互动视频嵌入区域 ========== */}
      <section className="pt-8 md:pt-8 pb-12 md:pb-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {/* 视频标题 */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-black/30">
              Video
            </span>
            <div className="h-[1px] flex-1 bg-black/10" />
          </div>

          {/* 嵌入互动视频页面 */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe
              src="https://diancui.space-z.ai/"
              className="w-full h-full"
              title="朱翠互动视频体验"
              allowFullScreen
              frameBorder="0"
            />
            
            {/* 全屏按钮 */}
            <button
              onClick={openFullscreenVideo}
              className="absolute bottom-4 right-4 w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="全屏播放"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
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

      {/* 全屏视频弹窗 */}
      {showFullscreenVideo && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* 关闭按钮 */}
          <button
            onClick={closeFullscreenVideo}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
            aria-label="关闭全屏"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* 全屏视频 */}
          <div className="w-full h-full">
            <iframe
              src="https://diancui.space-z.ai/"
              className="w-full h-full"
              title="朱翠互动视频体验"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
