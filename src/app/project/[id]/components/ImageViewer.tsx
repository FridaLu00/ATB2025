'use client';

import { useState, useEffect, useCallback } from "react";

interface ImageViewerProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function ImageViewer({ images, initialIndex = 0, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const currentImage = images[currentIndex];

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
          resetView();
          break;
        case "ArrowRight":
          setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
          resetView();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
        case "_":
          handleZoomOut();
          break;
        case "0":
          resetView();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images, onClose]);

  // 滚轮缩放
  useEffect(() => {
    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      wheelEvent.preventDefault();
      const delta = wheelEvent.deltaY > 0 ? -0.1 : 0.1;
      setScale((prev) => Math.max(0.5, Math.min(3, prev + delta)));
    };

    const container = document.querySelector(".image-viewer-content");
    if (container) {
      container.addEventListener("wheel", handleWheel as EventListener, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel as EventListener);
    }
  }, []);

  // 拖拽移动
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(3, prev + 0.25));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(0.5, prev - 0.25));
  }, []);

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    resetView();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    resetView();
  };

  // 点击图片切换下一张
  const handleImageClick = () => {
    if (!isDragging) {
      goToNext();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* 缩放控制 */}
      <div className="absolute top-6 left-6 flex flex-col gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 4v16M4 12h16M15.5 8.5l3.5 3.5-3.5 3.5" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 4v16M4 12h16M15.5 15.5l-3.5-3.5" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            resetView();
          }}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8M12 8v8" />
          </svg>
        </button>
      </div>

      {/* 导航按钮 */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* 图片内容 */}
      <div
        className="image-viewer-content relative w-full h-full flex items-center justify-center p-8 select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleImageClick}
      >
        <img
          src={currentImage}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-transform duration-200"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            cursor: scale > 1 ? "grab" : "pointer",
          }}
          draggable={false}
        />
      </div>

      {/* 图片索引 */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <span className="text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* 操作提示 */}
      <div className="absolute bottom-6 right-6 text-white/40 text-xs space-y-1">
        <p>滚轮缩放 | 拖拽移动</p>
        <p>点击切换 | ESC关闭</p>
      </div>
    </div>
  );
}