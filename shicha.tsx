"use client";

export default function LandingPage() {
  return (
    // ============================================
    // 页面主容器：白色背景，禁止选中文字
    // 使用固定宽高比容器（16:9），确保元素相对位置不变
    // ============================================
    <main className="relative w-screen h-screen bg-white overflow-hidden select-none flex items-center justify-center">

      {/* ============================================ */}
      {/* 响应式画布容器：保持 16:9 比例 */}
      {/* 使用 vw 单位确保元素大小随视口缩放 */}
      {/* ============================================ */}
      <div 
        className="relative" 
        style={{
          width: '100vw',
          height: '56.25vw', // 100 * (9/16) = 56.25，保持16:9比例
          maxHeight: '100vh',
          maxWidth: '177.78vh', // 100 * (16/9) = 177.78
        }}
      >
        
        
        
        
        {/* ============================================ */}
        {/* 左侧文字区域 */}
        {/* ============================================ */}

        {/* ---------- 虚实共生 ---------- */}
        {/* 【位置】左上角标签文字 */}
        {/* 【修改位置】调整 top（上下）和 left（左右）的百分比 */}
        {/* 【修改大小】调整 text-[9px] 中的数字 */}
        <span
          className="absolute top-[6.5%] left-[3.5%] text-[#D8A8C0] font-semibold tracking-[0.15em]"
          style={{ fontSize: '1.2vw' }}
        >
          虚实共生
        </span>

        {/* ---------- 折 - 图片 ---------- */}
        {/* 【位置】左侧大标题 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[156px] 中的数字（宽度，高度自动按比例缩放） */}
        <div
          className="absolute top-[13%] left-[5.8%]"
          style={{ width: '10vw' }}
        >
          <img
            src="/zhe.png"           // 图片路径（放在 public 文件夹下）
            alt="折"                // 图片描述
            className="w-full h-auto"  // 宽度填满容器，高度自动保持比例
          />
        </div>

        {/* ---------- 多维交融 ---------- */}
        {/* 【位置】"折"字右下方的标签 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        <span
          className="absolute top-[30%] left-[20%] text-[#A8C898] font-semibold tracking-[0.15em]"
          style={{ fontSize: '1.2vw' }}
        >
          多维交融
        </span>

        {/* ---------- 疊 - 图片 ---------- */}
        {/* 【位置】左侧中部的"叠"字图片 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[208px] 中的数字（宽度，高度自动按比例缩放） */}
        <div
          className="absolute top-[27.8%] left-[13.9%]"
          style={{ width: '13.5vw' }}
        >
          <img
            src="/die.png"           // 图片路径（放在 public 文件夹下）
            alt="疊"                // 图片描述
            className="w-full h-auto"  // 宽度填满容器，高度自动保持比例
          />
        </div>

        {/* ---------- 折叠无界 ---------- */}
        {/* 【位置】"叠"字下方的标签 */}
        <span
          className="absolute top-[54%] left-[5%] text-[#E89858] font-semibold tracking-[0.15em]"
          style={{ fontSize: '1.2vw' }}
        >
          折叠无界
        </span>

        {/* ---------- 生境 ---------- */}
        {/* 【位置】左下角大标题 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 text-[143px] 中的数字 */}
        <span
          className="absolute top-[59%] left-[5.6%] font-black text-black leading-none tracking-[0em]"
          style={{ 
            fontFamily: "'Arial Black', 'SimHei', 'Helvetica Neue', sans-serif",
            fontSize: '9vw'
          }}
        >
          生境
        </span>

        {/* ---------- 重塑艺境 ---------- */}
        {/* 【位置】"生境"右下方的标签 */}
        <span
          className="absolute top-[80%] left-[23%] text-[#7898B8] font-semibold tracking-[0.15em]"
          style={{ fontSize: '1.2vw' }}
        >
          重塑艺境
        </span>

        {/* ============================================ */}
        {/* 右上角英文标题区域 */}
        {/* ============================================ */}

        {/* ---------- The Boundless Interactive Perception Field ---------- */}
        {/* 【位置】右上角英文标题 */}
        <span
          className="absolute top-[3.25%] right-[2%] text-black font-semibold tracking-wide text-right"
          style={{ fontSize: '1vw' }}
        >
          The Boundless Interactive Perception Field
        </span>

        {/* ---------- 元境无界的交互感知场 ---------- */}
        {/* 【位置】英文标题下方 */}
        <span
          className="absolute top-[5.8%] right-[2%] text-black font-semibold tracking-wide text-right"
          style={{ fontSize: '1vw' }}
        >
          元境无界的交互感知场
        </span>

        {/* ============================================ */}
        {/* 中间标题区域 */}
        {/* ============================================ */}

        {/* ---------- ATB 2025级毕业展览 ---------- */}
        {/* 【位置】中间偏上 */}
        <span
          className="absolute top-[9.8%] left-[34.6%] text-black font-semibold tracking-wider"
          style={{ fontSize: '1.6vw' }}
        >
          ATB 2025级毕业展览
        </span>

        {/* ---------- FOLD ---------- */}
        {/* 【位置】中间大标题 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 text-[130px] 中的数字 */}
        <span
          className="absolute top-[13%] left-[33.97%] font-black text-black leading-none tracking-tighter"
          style={{ 
            fontFamily: "'Arial Black', 'SimHei', 'Helvetica Neue', sans-serif",
            fontSize: '8.5vw'
          }}
        >
          FOLD
        </span>

        {/* ============================================ */}
        {/* 右侧色块区域（z-index 控制层叠顺序） */}
        {/* ============================================ */}

        {/* ---------- 粉色色块 ---------- */}
        {/* 【位置】右侧第一个色块（最底层） */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[325px] 中的数字（宽度，高度自动按比例缩放） */}
        {/* 【层级】z-10 表示在最底层 */}
        <div
          className="absolute top-[35%] left-[33%] z-10"
          style={{ width: '18.5vw' }}
        >
          <img
            src="/pink.png"         // 图片路径
            alt="粉色色块"          // 图片描述
            className="w-full h-auto object-contain"  // 宽度填满容器，保持比例
          />
        </div>

        {/* ---------- 绿色色块 ---------- */}
        {/* 【位置】右侧第二个色块 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[292px] 中的数字 */}
        {/* 【层级】z-30 表示在粉色色块之上 */}
        <div
          className="absolute top-[33%] left-[52%] z-30"
          style={{ width: '17vw' }}
        >
          <img
            src="/green.png"
            alt="绿色色块"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ---------- 橙色色块 ---------- */}
        {/* 【位置】右侧第三个色块 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[390px] 中的数字 */}
        {/* 【层级】z-40 表示在绿色色块之上 */}
        <div
          className="absolute top-[48%] left-[68%] z-40"
          style={{ width: '22.5vw' }}
        >
          <img
            src="/orange.png"
            alt="橙色色块"
            className="w-full h-auto object-contain"
            //style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* ---------- 蓝色色块 ---------- */}
        {/* 【位置】右侧第四个色块（最高层） */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[338px] 中的数字 */}
        {/* 【层级】z-20 表示在橙色色块之上 */}
        <div
          className="absolute top-[8.5%] left-[70%] z-20"
          style={{ width: '24vw', height: '32vw' }}
        >
          <img
            src="/blue.png"
            alt="蓝色色块"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* ---------- BIOTOPE - 图片 ---------- */}
        {/* 【位置】覆盖在所有色块之上的主标题图片 */}
        {/* 【修改位置】调整 top 和 left 的百分比 */}
        {/* 【修改大小】调整 w-[715px] 中的数字 */}
        {/* 【层级】z-50 表示在最顶层 */}
        <div
          className="absolute top-[30%] left-[31.37%] z-50"
          style={{ width: '52vw' }}
        >
          <img
            src="/BIOTOPE.png"      // 图片路径
            alt="BIOTOPE"           // 图片描述
            className="w-full h-auto mix-blend-multiply"  // 宽度填满容器，高度自动保持比例
          />
        </div>

        {/* ============================================ */}
        {/* 底部文字 */}
        {/* ============================================ */}
        {/* ---------- 底部描述文字 ---------- */}
        {/* 【位置】页面底部居中 */}
        {/* 【修改位置】调整 bottom 的百分比（距离底部的距离） */}
        {/* 【修改大小】调整 text-[12px] 中的数字 */}
          <span 
          className="absolute bottom-[2%] left-[2%] text-black font-semibold tracking-wider"
          style={{ fontSize: '1.2vw' }}
        >
          共创一场关于数字生态的漫游新生境 以粗粝原生之壤，作像素数字之心
        </span>
      </div>
    </main>
  );
}
