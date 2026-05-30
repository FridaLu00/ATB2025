"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";
import BackgroundAnimations from "@/components/BackgroundAnimations";

export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Staggered layout: define different card sizes
  // Each entry: { id: projectId, colSpan, rowSpan }
  const staggeredLayout = projects.map((p, i) => {
    // Create a staggered pattern
    if (i % 5 === 0) return { id: p.id, colSpan: "col-span-2" as const, rowSpan: "row-span-2" as const, aspect: "aspect-[3/4]" as const };
    if (i % 5 === 4) return { id: p.id, colSpan: "col-span-2" as const, rowSpan: "row-span-1" as const, aspect: "aspect-[3/1.5]" as const };
    return { id: p.id, colSpan: "col-span-1" as const, rowSpan: "row-span-1" as const, aspect: "aspect-[3/4]" as const };
  });

  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Background Floating Animations (provides scroll height + floating images) */}
      <BackgroundAnimations menuOpen={menuOpen} />

      {/* Fixed foreground content */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-full flex flex-col items-center justify-center">
      {/* =========================================
         背景装饰 - 图片版本 (当前禁用)
         如需启用：取消此段注释，注释下方文字版本
         ========================================= 
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <Image
          src="/atb.png"
          alt="ATB"
          width={900}
          height={600}
          className="w-[clamp(400px,60vw,900px)] h-auto opacity-[0.5]"
          style={{ objectFit: 'contain' }}
          unoptimized
        />
      </div>
      */}

      {/* =========================================
         背景装饰 - 文字版本 (当前启用)
         如需切换到图片版本：注释此段，取消上方图片版本的注释
         ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[clamp(12rem,25vw,28rem)] font-bold text-black/[0.02] tracking-tighter leading-none"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          ATB
        </span>
      </div>
      

      {/* Color dots decoration */}
      <div className="absolute top-16 left-16 w-28 h-28 rounded-full bg-[#D7E294] opacity-30 blur-2xl" />
      <div className="absolute bottom-20 right-24 w-36 h-36 rounded-full bg-[#EAB8C2] opacity-30 blur-2xl" />
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-[#87ACDC] opacity-20 blur-xl" />
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full bg-[#E77C49] opacity-20 blur-xl" />

      {/* Center Card - slim navbar */}
      <div
        className={`relative max-w-lg w-[85%] mx-auto transition-all duration-700 ${
          isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-full px-6 md:px-8 py-3 md:py-4 bg-white/70 backdrop-blur-xl shadow-lg shadow-black/10 border border-white/50">
          <div className="flex items-center justify-between gap-4">
            {/* 折叠生境按钮 */}
            <button
              onClick={() => router.push('/about')}
              className="group relative flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-black text-white text-xs md:text-sm font-medium tracking-[0.15em] uppercase
                transition-all duration-300 hover:scale-105 active:scale-95
                shadow-[0_0_12px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.4)]"
            >
              <span className="relative z-10 flex flex-col gap-[3px]">
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
              </span>
              <span className="relative z-10">折叠生境</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D7E294] via-[#EAB8C2] to-[#87ACDC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            {/* ATB.STUDIO 居中 */}
            <div className="flex items-center">
              <h1
                className="text-base md:text-lg font-bold tracking-tight text-black"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                ATB.STUDIO
              </h1>
            </div>

            {/* Menu 按钮 */}
            <button
              onClick={openMenu}
              className="group relative flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-black text-white text-xs md:text-sm font-medium tracking-[0.15em] uppercase
                transition-all duration-300 hover:scale-105 active:scale-95
                shadow-[0_0_12px_2px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.4)]"
            >
              <span className="relative z-10">Menu</span>
              <span className="relative z-10 flex flex-col gap-[3px]">
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
                <span className="block w-3.5 h-[1.5px] bg-white" />
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D7E294] via-[#EAB8C2] to-[#87ACDC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom left 
      <div className="absolute bottom-8 left-8 text-xs text-black/20 tracking-wider font-mono">
        &copy; 2024 / 2025
      </div>*/}

      {/* Bottom right 
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-xs text-black/20 tracking-wider">
        <span className="w-6 h-[1px] bg-black/20" />
        <span className="font-mono text-[10px]">ATB</span>
      </div>*/}

      {/* ===== MAGAZINE-STYLE MENU OVERLAY ===== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
      </div>

      {/* Panel */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative w-[90%] max-w-2xl max-h-[88vh] rounded-2xl shadow-2xl shadow-black/25 border border-black/5
            transition-all duration-500 ease-out
            ${menuOpen ? "scale-100 translate-y-0" : "scale-90 translate-y-8"}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "linear-gradient(180deg, #fafafa 0%, #f0f0f0 30%, #e8e8e8 70%, #e0e0e0 100%)"
          }}
        >
          {/* ========== SCROLLABLE CONTENT ========== */}
          <div className="overflow-y-auto max-h-[88vh] rounded-2xl">
            <div className="p-0">
              {/* ---- HEADER ---- */}
              <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-black/5 px-5 md:px-7 py-4 flex items-center justify-between">
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  ATB.STUDIO
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-black/30 font-mono tracking-wider">
                    {projects.length} WORKS
                  </span>
                  <button
                    onClick={closeMenu}
                    className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 transition-colors flex items-center justify-center group"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:rotate-90 transition-transform duration-300">
                      <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ---- ALL WORKS SECTION ---- */}
              <div className="px-5 md:px-7 pb-4">
                {/* Category 1: Cultural Folding */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-[#E77C49]/60" />
                    <span className="text-[9px] tracking-[0.25em] uppercase text-black/50 font-medium">Cultural Folding</span>
                    <div className="flex-1 h-[1px] bg-black/8" />
                  </div>
                  {/* 第一行：项目1和项目7，右上角橙色色块 */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mb-2 md:mb-3 items-end">
                    {/* 左侧大卡片 - 项目1（高） */}
                    <button
                      className="relative aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/1`); }}
                    >
                      <img src="/suoluetu/1.png" alt="东方钿语" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col items-center">
                        <span className="text-white font-bold text-base md:text-lg text-center px-3 drop-shadow-md">东方钿语</span>
                        <div className="w-6 h-[2px] bg-white/50 mt-2 group-hover:w-8 transition-all" />
                      </div>
                    </button>
                    {/* 右侧：橙色色块 + 项目7 */}
                    <div className="flex flex-col gap-2 md:gap-3" style={{ height: '100%' }}>
                      {/* 橙色色块（文化折叠区主色，半透明） */}
                      <div className="bg-[#E77C49]/30 rounded-lg flex-1" />
                      {/* 项目7卡片 */}
                      <button
                        className="relative aspect-[3/2] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                        onClick={() => { closeMenu(); router.push(`/project/7`); }}
                      >
                        <img src="/suoluetu/7.png" alt="灵屿" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col items-center">
                          <span className="text-white font-bold text-base md:text-lg text-center px-3 drop-shadow-md">灵屿</span>
                          <div className="w-6 h-[2px] bg-white/50 mt-2 group-hover:w-8 transition-all" />
                        </div>
                      </button>
                    </div>
                  </div>
                  {/* 第二行：左侧垂直两个方块，右侧项目3大卡片 */}
                  <div className="flex gap-2 md:gap-3 mb-2 md:mb-3">
                    {/* 左侧垂直两个方块（上：项目2，下：项目5） */}
                    <div className="flex flex-col gap-2 md:gap-3 w-1/4">
                      <button
                        className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                        onClick={() => { closeMenu(); router.push(`/project/2`); }}
                      >
                        <img src="/suoluetu/2.png" alt="汴河序" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                          <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">汴河序</span>
                        </div>
                      </button>
                      <button
                        className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                        onClick={() => { closeMenu(); router.push(`/project/5`); }}
                      >
                        <img src="/suoluetu/5.png" alt="竹韵千年" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                          <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">竹韵千年</span>
                        </div>
                      </button>
                    </div>
                    {/* 右侧卡片 - 项目3 */}
                    <button
                      className="relative flex-1 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/3`); }}
                    >
                      <img src="/suoluetu/3.png" alt="云脉藏纹" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-3 flex flex-col items-center">
                        <span className="text-white font-bold text-sm md:text-base text-center px-2 drop-shadow-md">云脉藏纹</span>
                        <div className="w-4 h-[2px] bg-white/50 mt-2 group-hover:w-6 transition-all" />
                      </div>
                    </button>
                  </div>
                  {/* 第三行：项目4和6 */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <button
                      className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/4`); }}
                    >
                      <img src="/suoluetu/4.png" alt="朱翠" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                        <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">朱翠</span>
                      </div>
                    </button>
                    <button
                      className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/6`); }}
                    >
                      <img src="/suoluetu/6.png" alt="唐宫往事" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                        <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">唐宫往事</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Category 2: Sensory Symbiosis */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-[#87ACDC]/60" />
                    <span className="text-[9px] tracking-[0.25em] uppercase text-black/50 font-medium">Sensory Symbiosis</span>
                    <div className="flex-1 h-[1px] bg-black/8" />
                  </div>
                  {/* 第一行：项目8占一整行 */}
                  <div className="grid grid-cols-4 gap-2 md:gap-3 mb-2 md:mb-3">
                    <button
                      className="relative col-span-4 aspect-[4/1] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/8`); }}
                    >
                      <img src="/suoluetu/8.png" alt="Warm Weave" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-2 flex flex-col items-center">
                        <span className="text-white font-bold text-xs text-center px-2 drop-shadow-md">Warm Weave</span>
                      </div>
                    </button>
                  </div>
                  {/* 第二行：左侧项目9、10上下堆叠，右侧项目11占满 */}
                  <div className="flex gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="flex flex-col gap-2 md:gap-3 w-1/4">
                      <button
                        className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                        onClick={() => { closeMenu(); router.push(`/project/9`); }}
                      >
                        <img src="/suoluetu/9.png" alt="movestep" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                          <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">movestep</span>
                        </div>
                      </button>
                      <button
                        className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                        onClick={() => { closeMenu(); router.push(`/project/10`); }}
                      >
                        <img src="/suoluetu/10.png" alt="我的版画师" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                          <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">我的版画师</span>
                        </div>
                      </button>
                    </div>
                    <button
                      className="relative flex-1 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/11`); }}
                    >
                      <img src="/suoluetu/11.png" alt="AI智能衣橱" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-3 flex flex-col items-center">
                        <span className="text-white font-bold text-sm md:text-base text-center px-2 drop-shadow-md">AI智能衣橱</span>
                        <div className="w-4 h-[2px] bg-white/50 mt-2 group-hover:w-6 transition-all" />
                      </div>
                    </button>
                  </div>
                  {/* 第三行：项目12、13两个方块 + 项目14 */}
                  <div className="grid grid-cols-4 gap-2 md:gap-3">
                    {/* 左侧：项目12、13 + 蓝色色块 */}
                    <div className="flex flex-col gap-2 md:gap-3 col-span-2" style={{ height: '100%' }}>
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <button
                          className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                          onClick={() => { closeMenu(); router.push(`/project/12`); }}
                        >
                          <img src="/suoluetu/12.png" alt="花伴" className="absolute inset-0 w-full h-full object-cover" />
                          <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                            <span className="text-white font-bold text-xs text-center px-1 drop-shadow-md">花伴</span>
                          </div>
                        </button>
                        <button
                          className="relative aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                          onClick={() => { closeMenu(); router.push(`/project/13`); }}
                        >
                          <img src="/suoluetu/13.png" alt="瑞狮拜" className="absolute inset-0 w-full h-full object-cover" />
                          <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-2 flex flex-col items-center">
                            <span className="text-white font-bold text-xs text-center px-1 leading-tight drop-shadow-md">瑞狮拜</span>
                          </div>
                        </button>
                      </div>
                      {/* 蓝色色块（感官共生区主色，半透明） */}
                      <div className="bg-[#87ACDC]/30 rounded-lg flex-1" />
                    </div>
                    <button
                      className="relative col-span-2 aspect-[9/8] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/14`); }}
                    >
                      <img src="/suoluetu/14.png" alt="茧觉" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-3 flex flex-col items-center">
                        <span className="text-white font-bold text-sm text-center px-2 drop-shadow-md">茧觉</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Category 3: Vital Wonderland */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-[#EAB8C2]/60" />
                    <span className="text-[9px] tracking-[0.25em] uppercase text-black/50 font-medium">Vital Wonderland</span>
                    <div className="flex-1 h-[1px] bg-black/8" />
                  </div>
                  {/* 第一行：项目15 + 粉色色块 */}
                  <div className="flex gap-2 md:gap-3 mb-2 md:mb-3">
                    {/* 左侧：项目15大卡片 */}
                    <button
                      className="relative flex-1 aspect-[3/2] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/15`); }}
                    >
                      <img src="/suoluetu/15.png" alt="dream land" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 bg-black/50 rounded-md px-4 py-2">
                        <span className="text-white font-bold text-sm text-center drop-shadow-md">dream land</span>
                      </div>
                    </button>
                    {/* 右侧：粉色色块（生息幻境区主色，半透明） */}
                    <div className="bg-[#EAB8C2]/30 rounded-lg w-1/4" />
                  </div>
                  {/* 第二行：粉色色块 + 项目16 */}
                  <div className="flex gap-2 md:gap-3">
                    {/* 左侧：粉色色块（生息幻境区主色，半透明） */}
                    <div className="bg-[#EAB8C2]/30 rounded-lg flex-1" />
                    {/* 右侧：项目16 */}
                    <button
                      className="relative w-2/3 aspect-[8/3] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/16`); }}
                    >
                      <img src="/suoluetu/16.png" alt="生命循环" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 bg-black/50 rounded-md px-4 py-2">
                        <span className="text-white font-bold text-sm text-center drop-shadow-md">生命循环</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Category 4: Exotic Roaming */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-[#D7E294]/60" />
                    <span className="text-[9px] tracking-[0.25em] uppercase text-black/50 font-medium">Exotic Roaming</span>
                    <div className="flex-1 h-[1px] bg-black/8" />
                  </div>
                  {/* 第一行：项目17 + 项目18和色块 */}
                  <div className="flex gap-2 md:gap-3 mb-2 md:mb-3">
                    {/* 左侧：项目17大卡片 */}
                    <button
                      className="relative flex-1 aspect-[3/2] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/17`); }}
                    >
                      <img src="/suoluetu/17.png" alt="咸水谣 · 海上集" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col items-center">
                        <span className="text-white font-bold text-base md:text-lg text-center px-2 drop-shadow-md">咸水谣 · 海上集</span>
                        <div className="w-8 h-[2px] bg-white/50 mt-2 group-hover:w-10 transition-all" />
                      </div>
                    </button>
                    {/* 右侧：项目18 + 色块 */}
                    <div className="flex flex-col gap-2 md:gap-3 w-1/4">
                      <button
                        className="relative aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                        onClick={() => { closeMenu(); router.push(`/project/18`); }}
                      >
                        <img src="/suoluetu/18.png" alt="西湖入境" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent p-3 flex flex-col items-center">
                          <span className="text-white font-bold text-sm text-center px-1 drop-shadow-md">西湖入境</span>
                        </div>
                      </button>
                      {/* 绿色色块（域外漫游区主色，半透明） */}
                      <div className="bg-[#D7E294]/30 rounded-lg flex-1" />
                    </div>
                  </div>
                  {/* 第二行：项目19 */}
                  <div className="mb-2 md:mb-3">
                    <button
                      className="relative w-full aspect-[4/1] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex items-center justify-center group"
                      onClick={() => { closeMenu(); router.push(`/project/19`); }}
                    >
                      <img src="/suoluetu/19.png" alt="归青" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 bg-black/50 rounded-md px-4 py-2">
                        <span className="text-white font-bold text-sm text-center drop-shadow-md">归青</span>
                      </div>
                    </button>
                  </div>
                  {/* 第三行：色块 + 项目20 */}
                  <div className="flex gap-2 md:gap-3">
                    {/* 绿色色块（域外漫游区主色，半透明） */}
                    <div className="bg-[#D7E294]/30 rounded-lg flex-1" />
                    <button
                      className="relative w-1/2 aspect-[3/2] rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-end group"
                      onClick={() => { closeMenu(); router.push(`/project/20`); }}
                    >
                      <img src="/suoluetu/20.png" alt="Wooder" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="relative z-10 w-full bg-gradient-to-t from-black/50 to-transparent p-3 flex flex-col items-center">
                        <span className="text-white font-bold text-sm text-center px-2 drop-shadow-md">Wooder</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* ---- FOOTER ---- */}
              <div className="px-5 md:px-7 py-5 mt-3 border-t border-black/5">
                <div className="flex items-center justify-between text-[9px] text-black/20 tracking-wider">
                  <span>&copy; 2024 / 2025 ATB.STUDIO</span>
                  <span className="flex items-center gap-3">
                    <span className="hover:text-black/40 transition-colors cursor-pointer">Instagram</span>
                    <span className="hover:text-black/40 transition-colors cursor-pointer">Email</span>
                    <span className="hover:text-black/40 transition-colors cursor-pointer">Behance</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </main>
  );
}