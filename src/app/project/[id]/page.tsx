"use client";

export const runtime = 'edge';

import { useEffect, useState, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { projects, type Project } from "@/lib/projects";

// 导入内容组件 - 通用组件
import ProjectContent from "./content/ProjectContent";

// 导入专属内容组件（根据需要添加）
import Project1Content from "./content/Project1Content";
import Project2Content from "./content/Project2Content";
import Project3Content from "./content/Project3Content";
import Project4Content from "./content/Project4Content";
import Project5Content from "./content/Project5Content";
import Project6Content from "./content/Project6Content";
import Project7Content from "./content/Project7Content";
import Project8Content from "./content/Project8Content";
import Project9Content from "./content/Project9Content";
import Project10Content from "./content/Project10Content";
import Project11Content from "./content/Project11Content";
import Project12Content from "./content/Project12Content";
import Project13Content from "./content/Project13Content";
import Project14Content from "./content/Project14Content";
import Project15Content from "./content/Project15Content";
import Project16Content from "./content/Project16Content";
import Project17Content from "./content/Project17Content";
import Project18Content from "./content/Project18Content";
import Project19Content from "./content/Project19Content";
import Project20Content from "./content/Project20Content";

// 作品分类分组
const projectCategories = {
  "Cultural Folding": [1, 2, 3, 4, 5, 6, 7],
  "Sensory Symbiosis": [8, 9, 10, 11, 12, 13, 14],
  "Vital Wonderland": [15, 16],
  "Exotic Roaming": [17, 18, 19, 20],
};

const getCategoryById = (id: number): string => {
  for (const [category, ids] of Object.entries(projectCategories)) {
    if (ids.includes(id)) {
      return category;
    }
  }
  return "Cultural Folding";
};

const getProjectsInCategory = (id: number): typeof projects => {
  const category = getCategoryById(id);
  const projectIds = projectCategories[category as keyof typeof projectCategories];
  return projects.filter(p => projectIds.includes(p.id));
};

const getProjectIndexInCategory = (projectId: number): number => {
  const category = getCategoryById(projectId);
  const projectIds = projectCategories[category as keyof typeof projectCategories];
  const sortedIds = [...projectIds].sort((a, b) => a - b);
  return sortedIds.indexOf(projectId) + 1;
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [isReady, setIsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRelatedProjects, setShowRelatedProjects] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // 控制导航栏显示

  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      router.push("/menu");
      return;
    }
    setIsReady(true);
  }, [project, router]);

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

  // Scroll listener for showing Related Projects bar and Navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show Related Projects when scrolled to bottom
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setShowRelatedProjects(true);
        setShowNavbar(true); // 底部时显示导航栏
      } else if (scrollPosition < 100) {
        // 顶部时显示导航栏
        setShowRelatedProjects(false);
        setShowNavbar(true);
      } else {
        // 中间区域隐藏导航栏
        setShowRelatedProjects(false);
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return null;
  }

  const relatedProjects = getProjectsInCategory(project.id).filter(p => p.id !== project.id);
  const categoryName = getCategoryById(project.id);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // 根据项目 ID 选择对应的内容组件
  const contentComponents: Record<number, React.ComponentType<{ project: Project }>> = {
    1: Project1Content,
    2: Project2Content,
    3: Project3Content,
    4: Project4Content,
    5: Project5Content,
    6: Project6Content,
    7: Project7Content,
    8: Project8Content,
    9: Project9Content,
    10: Project10Content,
    11: Project11Content,
    12: Project12Content,
    13: Project13Content,
    14: Project14Content,
    15: Project15Content,
    16: Project16Content,
    17: Project17Content,
    18: Project18Content,
    19: Project19Content,
    20: Project20Content,
    // 在这里添加更多专属组件
  };

  const ContentComponent = contentComponents[projectId] || ProjectContent;

  // 分类颜色映射
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "Cultural Folding": { bg: "#E77C49", text: "#ffffff" },
    "Sensory Symbiosis": { bg: "#87ACDC", text: "#ffffff" },
    "Vital Wonderland": { bg: "#EAB8C2", text: "#1a1a1a" },
    "Exotic Roaming": { bg: "#D7E294", text: "#1a1a1a" },
  };

  const categoryColor = categoryColors[categoryName] || categoryColors["Cultural Folding"];

  return (
    <main className="min-h-screen bg-white">
      {/* Top Navigation Header - Fixed */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
          isReady && showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{ backgroundColor: `${categoryColor.bg}40` }} // 40 = ~25% opacity
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.location.href = '/'}
              className="text-xs tracking-[0.3em] uppercase font-medium transition-colors"
              style={{ 
                fontFamily: "'Georgia', serif",
                color: "#333333"
              }}
            >
              ATB.STUDIO
            </button>
            <div className="flex items-center gap-4">
              <span 
                className="text-[10px] font-mono"
                style={{ color: "#666666" }}
              >
                {String(project.id).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
              </span>
              <button
                onClick={openMenu}
                className="px-4 py-2 text-xs tracking-[0.15em] uppercase rounded-full transition-colors flex items-center gap-2 bg-black/80 hover:bg-black text-white"
              >
                <span>Menu</span>
                <span className="flex flex-col gap-[2px]">
                  <span className="block w-3 h-[1px] bg-white" />
                  <span className="block w-3 h-[1px] bg-white" />
                  <span className="block w-3 h-[1px] bg-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div 
          className="h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" 
        />
      </header>

      {/* ========== 滚动到底部时显示的相关项目引导窗口 ========== */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 h-40 transition-all duration-500 ${
          showRelatedProjects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
        }`}
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-full flex flex-col justify-center">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-[9px] tracking-[0.3em] uppercase text-black/40">{categoryName}</span>
              <div className="w-8 h-[1px] bg-black/20" />
              <span className="text-[9px] font-mono text-black/30">{relatedProjects.length} more</span>
            </div>
            {/* Next Area Button - 跳转到下一个展区 */}
            <button
              onClick={() => {
                const nextAreaProjects: Record<string, number> = {
                  "Cultural Folding": 8,      // 文化折叠 -> 感官共生第一个 (Warm Weave)
                  "Sensory Symbiosis": 15,   // 感官共生 -> 生机幻境第一个
                  "Vital Wonderland": 17,    // 生机幻境 -> 异域漫游第一个
                  "Exotic Roaming": 1,       // 异域漫游 -> 文化折叠第一个
                };
                const nextProjectId = nextAreaProjects[categoryName] || 1;
                router.push(`/project/${nextProjectId}`);
              }}
              className="text-[9px] tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors"
            >
              Next Area
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {relatedProjects.map((related) => (
              <button
                key={related.id}
                onClick={() => router.push(`/project/${related.id}`)}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden group"
              >
                <div className="relative w-full h-full">
                  <img
                    src={`/suoluetu/${related.id}.png`}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 left-1 bg-black/50 rounded-md px-1.5 py-0.5">
                    <span className="text-white font-mono text-[10px] font-bold">
                      {String(getProjectIndexInCategory(related.id)).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 菜单弹窗覆盖层 ========== */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
        
        {/* 菜单内容区域 */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative w-full max-h-[88vh] rounded-t-3xl shadow-2xl shadow-black/25 border-t border-black/5 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #fafafa 0%, #f0f0f0 30%, #e8e8e8 70%, #e0e0e0 100%)" }}
          >
            <div className="overflow-y-auto max-h-[88vh]">
              <div className="p-0">
                {/* Menu Header */}
                <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-black/5 px-5 md:px-7 py-4 flex items-center justify-between">
                  <button
                    onClick={() => { closeMenu(); router.push('/'); }}
                    className="text-sm font-bold tracking-tight hover:text-black/70 transition-colors"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    ATB.STUDIO
                  </button>
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

                {/* Category-separated Works Grid */}
                <div className="px-5 md:px-7 py-4 space-y-6">
                  {/* Category 1: Cultural Folding */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-[1px] bg-[#E77C49]/50" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Cultural Folding</span>
                      <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {projects.filter(p => [1,2,3,4,5,6,7].includes(p.id)).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                          className={`relative aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        >
                          <img
                            src={`/suoluetu/${p.id}.png`}
                            alt={p.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                            <span className="text-[9px] font-bold text-center px-1 leading-tight text-white">
                              {p.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Sensory Symbiosis */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-[1px] bg-[#87ACDC]/50" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Sensory Symbiosis</span>
                      <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {projects.filter(p => [8,9,10,11,12,13,14].includes(p.id)).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                          className={`relative aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        >
                          <img
                            src={`/suoluetu/${p.id}.png`}
                            alt={p.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                            <span className="text-[9px] font-bold text-center px-1 leading-tight text-white">
                              {p.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category 3: Vital Wonderland */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-[1px] bg-[#EAB8C2]/50" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Vital Wonderland</span>
                      <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {projects.filter(p => [15,16].includes(p.id)).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                          className={`relative aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        >
                          <img
                            src={`/suoluetu/${p.id}.png`}
                            alt={p.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                            <span className="text-[9px] font-bold text-center px-1 leading-tight text-white">
                              {p.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category 4: Exotic Roaming */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-8 h-[1px] bg-[#D7E294]/50" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">Exotic Roaming</span>
                      <div className="flex-1 h-[1px] bg-black/10" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {projects.filter(p => [17,18,19,20].includes(p.id)).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => { closeMenu(); router.push(`/project/${p.id}`); }}
                          className={`relative aspect-square rounded-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden ${p.id === project.id ? "ring-2 ring-black/30" : ""}`}
                        >
                          <img
                            src={`/suoluetu/${p.id}.png`}
                            alt={p.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                            <span className="text-[9px] font-bold text-center px-1 leading-tight text-white">
                              {p.title}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="px-5 md:px-7 py-5 border-t border-black/5">
                  <div className="flex items-center justify-between text-[9px] text-black/20">
                    <span>&copy; 2024 ATB.STUDIO</span>
                    <div className="flex gap-4">
                      <span className="hover:text-black/40 cursor-pointer">Instagram</span>
                      <span className="hover:text-black/40 cursor-pointer">Email</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 项目内容区域 ========== */}
      {/* 内容组件动态加载，底部预留 160px (40rem) 空间给固定区域 */}
      <ContentComponent project={project} />
    </main>
  );
}