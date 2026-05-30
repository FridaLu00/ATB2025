2026-05-30T00:50:54.780547Z	Cloning repository...
2026-05-30T00:51:05.789147Z	From https://github.com/FridaLu00/ATB2025
2026-05-30T00:51:05.789647Z	 * branch            c733532e7086032dd1b934cba3b4de1f23cf4bcf -> FETCH_HEAD
2026-05-30T00:51:05.789743Z	
2026-05-30T00:51:08.364819Z	HEAD is now at c733532 修复 TypeScript 类型错误：wheel 事件处理
2026-05-30T00:51:08.365181Z	
2026-05-30T00:51:08.422917Z	
2026-05-30T00:51:08.423258Z	Using v2 root directory strategy
2026-05-30T00:51:08.436528Z	Success: Finished cloning repository files
2026-05-30T00:51:09.972574Z	Checking for configuration in a Wrangler configuration file (BETA)
2026-05-30T00:51:09.973018Z	
2026-05-30T00:51:09.973544Z	Found wrangler.toml file. Reading build configuration...
2026-05-30T00:51:10.147797Z	A Wrangler configuration file was found but it does not appear to be valid. Did you mean to use wrangler.toml to configure Pages? If so, then make sure the file is valid and contains the `pages_build_output_dir` property. Skipping file and continuing.
2026-05-30T00:51:10.330397Z	Detected the following tools from environment: pnpm@9.0.0, nodejs@22.16.0
2026-05-30T00:51:10.719717Z	Preparing pnpm@9.0.0 for immediate activation...
2026-05-30T00:51:12.526122Z	Installing project dependencies: pnpm install
2026-05-30T00:51:42.202204Z	.../node_modules/@parcel/watcher install$ node scripts/build-from-source.js
2026-05-30T00:51:42.250364Z	.../esbuild@0.15.18/node_modules/esbuild postinstall$ node install.js
2026-05-30T00:51:42.250678Z	.../node_modules/workerd postinstall$ node install.js
2026-05-30T00:51:42.251323Z	.../sharp@0.34.5/node_modules/sharp install$ node install/check.js || npm run build
2026-05-30T00:51:42.251486Z	.../node_modules/workerd postinstall$ node install.js
2026-05-30T00:51:42.352785Z	.../node_modules/@parcel/watcher install: Done
2026-05-30T00:51:42.374438Z	.../esbuild@0.27.3/node_modules/esbuild postinstall$ node install.js
2026-05-30T00:51:42.396863Z	.../esbuild@0.15.18/node_modules/esbuild postinstall: Done
2026-05-30T00:51:42.397289Z	.../sharp@0.34.5/node_modules/sharp install: Done
2026-05-30T00:51:42.408033Z	.../esbuild@0.25.12/node_modules/esbuild postinstall$ node install.js
2026-05-30T00:51:42.485769Z	.../node_modules/workerd postinstall: Done
2026-05-30T00:51:42.539715Z	.../esbuild@0.27.3/node_modules/esbuild postinstall: Done
2026-05-30T00:51:42.564862Z	.../esbuild@0.25.12/node_modules/esbuild postinstall: Done
2026-05-30T00:51:42.565049Z	.../node_modules/workerd postinstall: Done
2026-05-30T00:51:42.593255Z	.../node_modules/unrs-resolver postinstall$ napi-postinstall unrs-resolver 1.11.1 check
2026-05-30T00:51:42.621434Z	.../node_modules/msw postinstall$ node -e "import('./config/scripts/postinstall.js').catch(() => void 0)"
2026-05-30T00:51:42.671103Z	.../esbuild@0.18.20/node_modules/esbuild postinstall$ node install.js
2026-05-30T00:51:42.716281Z	.../node_modules/unrs-resolver postinstall: Done
2026-05-30T00:51:42.724947Z	.../node_modules/msw postinstall: Done
2026-05-30T00:51:42.783124Z	.../esbuild@0.18.20/node_modules/esbuild postinstall: Done
2026-05-30T00:51:43.806499Z	
2026-05-30T00:51:43.806796Z	dependencies:
2026-05-30T00:51:43.806867Z	+ @aws-sdk/client-s3 3.975.0
2026-05-30T00:51:43.806939Z	+ @aws-sdk/lib-storage 3.975.0
2026-05-30T00:51:43.80701Z	+ @hookform/resolvers 5.2.2
2026-05-30T00:51:43.807073Z	+ @radix-ui/react-accordion 1.2.12
2026-05-30T00:51:43.807136Z	+ @radix-ui/react-alert-dialog 1.1.15
2026-05-30T00:51:43.807183Z	+ @radix-ui/react-aspect-ratio 1.1.8
2026-05-30T00:51:43.807231Z	+ @radix-ui/react-avatar 1.1.11
2026-05-30T00:51:43.807272Z	+ @radix-ui/react-checkbox 1.3.3
2026-05-30T00:51:43.807311Z	+ @radix-ui/react-collapsible 1.1.12
2026-05-30T00:51:43.807373Z	+ @radix-ui/react-context-menu 2.2.16
2026-05-30T00:51:43.807415Z	+ @radix-ui/react-dialog 1.1.15
2026-05-30T00:51:43.80748Z	+ @radix-ui/react-dropdown-menu 2.1.16
2026-05-30T00:51:43.807529Z	+ @radix-ui/react-hover-card 1.1.15
2026-05-30T00:51:43.807571Z	+ @radix-ui/react-label 2.1.8
2026-05-30T00:51:43.807609Z	+ @radix-ui/react-menubar 1.1.16
2026-05-30T00:51:43.807638Z	+ @radix-ui/react-navigation-menu 1.2.14
2026-05-30T00:51:43.807666Z	+ @radix-ui/react-popover 1.1.15
2026-05-30T00:51:43.807693Z	+ @radix-ui/react-progress 1.1.8
2026-05-30T00:51:43.807748Z	+ @radix-ui/react-radio-group 1.3.8
2026-05-30T00:51:43.807785Z	+ @radix-ui/react-scroll-area 1.2.10
2026-05-30T00:51:43.807813Z	+ @radix-ui/react-select 2.2.6
2026-05-30T00:51:43.807847Z	+ @radix-ui/react-separator 1.1.8
2026-05-30T00:51:43.807874Z	+ @radix-ui/react-slider 1.3.6
2026-05-30T00:51:43.807902Z	+ @radix-ui/react-slot 1.2.4
2026-05-30T00:51:43.807947Z	+ @radix-ui/react-switch 1.2.6
2026-05-30T00:51:43.807987Z	+ @radix-ui/react-tabs 1.1.13
2026-05-30T00:51:43.808025Z	+ @radix-ui/react-toggle 1.1.10
2026-05-30T00:51:43.808058Z	+ @radix-ui/react-toggle-group 1.1.11
2026-05-30T00:51:43.808086Z	+ @radix-ui/react-tooltip 1.2.8
2026-05-30T00:51:43.808114Z	+ @react-three/drei 10.7.7
2026-05-30T00:51:43.808142Z	+ @react-three/fiber 9.6.1
2026-05-30T00:51:43.808189Z	+ @react-three/rapier 2.2.0
2026-05-30T00:51:43.808301Z	+ @supabase/supabase-js 2.95.3
2026-05-30T00:51:43.808363Z	+ cannon-es 0.20.0
2026-05-30T00:51:43.808443Z	+ class-variance-authority 0.7.1
2026-05-30T00:51:43.808511Z	+ clsx 2.1.1
2026-05-30T00:51:43.808545Z	+ cmdk 1.1.1
2026-05-30T00:51:43.808573Z	+ coze-coding-dev-sdk 0.7.21
2026-05-30T00:51:43.808602Z	+ date-fns 4.1.0
2026-05-30T00:51:43.808637Z	+ dotenv 17.2.3
2026-05-30T00:51:43.808664Z	+ drizzle-kit 0.31.8
2026-05-30T00:51:43.808691Z	+ drizzle-orm 0.45.1
2026-05-30T00:51:43.808719Z	+ drizzle-zod 0.8.3
2026-05-30T00:51:43.808753Z	+ embla-carousel-react 8.6.0
2026-05-30T00:51:43.809649Z	+ framer-motion 12.38.0
2026-05-30T00:51:43.809982Z	+ input-otp 1.4.2
2026-05-30T00:51:43.8102Z	+ lucide-react 0.468.0
2026-05-30T00:51:43.810333Z	+ next 16.1.1
2026-05-30T00:51:43.810438Z	+ next-themes 0.4.6
2026-05-30T00:51:43.810535Z	+ pg 8.17.2
2026-05-30T00:51:43.811068Z	+ react 19.2.3
2026-05-30T00:51:43.811211Z	+ react-day-picker 9.13.0
2026-05-30T00:51:43.811365Z	+ react-dom 19.2.3
2026-05-30T00:51:43.811484Z	+ react-hook-form 7.71.1
2026-05-30T00:51:43.811622Z	+ react-resizable-panels 4.5.2
2026-05-30T00:51:43.811742Z	+ recharts 2.15.4
2026-05-30T00:51:43.811852Z	+ sass 1.99.0
2026-05-30T00:51:43.811969Z	+ sonner 2.0.7
2026-05-30T00:51:43.812073Z	+ swiper 12.2.0
2026-05-30T00:51:43.81217Z	+ tailwind-merge 2.6.0
2026-05-30T00:51:43.812303Z	+ three 0.184.0
2026-05-30T00:51:43.812421Z	+ tw-animate-css 1.4.0
2026-05-30T00:51:43.812517Z	+ vaul 1.1.2
2026-05-30T00:51:43.812681Z	+ zod 4.3.6
2026-05-30T00:51:43.813008Z	
2026-05-30T00:51:43.813231Z	devDependencies:
2026-05-30T00:51:43.813391Z	+ @cloudflare/next-on-pages 1.13.16
2026-05-30T00:51:43.813608Z	+ @react-dev-inspector/babel-plugin 2.0.1
2026-05-30T00:51:43.813723Z	+ @react-dev-inspector/middleware 2.0.1
2026-05-30T00:51:43.813778Z	+ @tailwindcss/postcss 4.1.18
2026-05-30T00:51:43.813819Z	+ @types/node 20.19.30
2026-05-30T00:51:43.813854Z	+ @types/pg 8.16.0
2026-05-30T00:51:43.813887Z	+ @types/react 19.2.10
2026-05-30T00:51:43.813929Z	+ @types/react-dom 19.2.3
2026-05-30T00:51:43.813964Z	+ @types/three 0.184.1
2026-05-30T00:51:43.813997Z	+ eslint 9.39.2
2026-05-30T00:51:43.814054Z	+ eslint-config-next 16.1.1
2026-05-30T00:51:43.814094Z	+ only-allow 1.2.2
2026-05-30T00:51:43.81438Z	+ react-dev-inspector 2.0.1
2026-05-30T00:51:43.814473Z	+ shadcn 3.7.0
2026-05-30T00:51:43.8146Z	+ tailwindcss 4.1.18
2026-05-30T00:51:43.814765Z	+ tsup 8.5.1
2026-05-30T00:51:43.814942Z	+ tsx 4.21.0
2026-05-30T00:51:43.815011Z	+ typescript 5.9.3
2026-05-30T00:51:43.815061Z	+ wrangler 4.94.0
2026-05-30T00:51:43.815103Z	
2026-05-30T00:51:43.87022Z	Done in 31.1s
2026-05-30T00:51:43.98136Z	Executing user command: pnpm pages:build
2026-05-30T00:51:44.514387Z	
2026-05-30T00:51:44.514647Z	> projects@0.1.0 pages:build /opt/buildhome/repo
2026-05-30T00:51:44.514706Z	> npx @cloudflare/next-on-pages
2026-05-30T00:51:44.514767Z	
2026-05-30T00:51:49.343105Z	⚡️ @cloudflare/next-on-pages CLI v.1.13.16
2026-05-30T00:51:49.51395Z	⚡️ Detected Package Manager: pnpm (9.0.0)
2026-05-30T00:51:49.514236Z	⚡️ Preparing project...
2026-05-30T00:51:49.517559Z	⚡️ Project is ready
2026-05-30T00:51:49.517757Z	⚡️ Building project...
2026-05-30T00:52:03.269363Z	▲  .../esbuild@0.27.0/node_modules/esbuild postinstall$ node install.js
2026-05-30T00:52:03.357443Z	▲  .../esbuild@0.27.0/node_modules/esbuild postinstall: Done
2026-05-30T00:52:04.996849Z	▲  Vercel CLI 54.6.1 (Node.js 22.16.0)
2026-05-30T00:52:05.004604Z	▲  > NOTE: The Vercel CLI now collects telemetry regarding usage of the CLI.
2026-05-30T00:52:05.004871Z	▲  > This information is used to shape the CLI roadmap and prioritize features.
2026-05-30T00:52:05.005041Z	▲  > You can learn more, including how to opt-out if you'd not like to participate in this program, by visiting the following URL:
2026-05-30T00:52:05.005193Z	▲  > https://vercel.com/docs/cli/about-telemetry
2026-05-30T00:52:05.080694Z	▲  WARNING! Build not running on Vercel. System environment variables will not be available.
2026-05-30T00:52:05.337271Z	▲  Detected `pnpm-lock.yaml` 9 which may be generated by pnpm@9.x or pnpm@10.x
2026-05-30T00:52:05.337638Z	▲  Using pnpm@9.x based on project creation date
2026-05-30T00:52:05.337724Z	▲  To use pnpm@10.x, manually opt in using corepack (https://vercel.com/docs/deployments/configure-a-build#corepack)
2026-05-30T00:52:05.406611Z	▲  Installing dependencies...
2026-05-30T00:52:05.412186Z	▲  Using package.json#engines.pnpm without corepack and package.json#packageManager could lead to failed builds with ERR_PNPM_UNSUPPORTED_ENGINE. Learn more: https://vercel.com/docs/errors/error-list#pnpm-engine-unsupported
2026-05-30T00:52:11.213317Z	▲  
2026-05-30T00:52:11.268263Z	▲  Done in 5.7s
2026-05-30T00:52:11.347097Z	▲  Detected Next.js version: 16.1.1
2026-05-30T00:52:11.386604Z	▲  Using package.json#engines.pnpm without corepack and package.json#packageManager could lead to failed builds with ERR_PNPM_UNSUPPORTED_ENGINE. Learn more: https://vercel.com/docs/errors/error-list#pnpm-engine-unsupported
2026-05-30T00:52:11.386875Z	▲  Running "pnpm run build"
2026-05-30T00:52:11.821555Z	▲  > projects@0.1.0 build /opt/buildhome/repo
2026-05-30T00:52:11.82184Z	▲  > next build
2026-05-30T00:52:12.689231Z	▲  Attention: Next.js now collects completely anonymous telemetry regarding usage.
2026-05-30T00:52:12.689472Z	▲  This information is used to shape Next.js' roadmap and prioritize features.
2026-05-30T00:52:12.689521Z	▲  You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
2026-05-30T00:52:12.68957Z	▲  https://nextjs.org/telemetry
2026-05-30T00:52:12.700763Z	▲  ▲ Next.js 16.1.1 (Turbopack)
2026-05-30T00:52:12.701597Z	▲  
2026-05-30T00:52:12.770061Z	▲  Creating an optimized production build ...
2026-05-30T00:52:13.930134Z	▲  Using external babel configuration from /opt/buildhome/repo/.babelrc
2026-05-30T00:52:20.984926Z	▲  ✓ Compiled successfully in 7.6s
2026-05-30T00:52:20.993168Z	▲  Running TypeScript ...
2026-05-30T00:52:27.548654Z	▲  Failed to compile.
2026-05-30T00:52:27.549212Z	▲  ./src/components/BackgroundAnimations.tsx:432:12
2026-05-30T00:52:27.550169Z	▲  Type error: No overload matches this call.
2026-05-30T00:52:27.550286Z	▲   Overload 1 of 2, '(type: keyof WindowEventMap, listener: (this: Window, ev: Event | MouseEvent | UIEvent | ErrorEvent | DeviceMotionEvent | ... 27 more ... | StorageEvent) => any, options?: boolean | ... 1 more ... | undefined): void', gave the following error.
2026-05-30T00:52:27.550407Z	▲     Argument of type 'string' is not assignable to parameter of type 'keyof WindowEventMap'.
2026-05-30T00:52:27.550477Z	▲   Overload 2 of 2, '(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void', gave the following error.
2026-05-30T00:52:27.550556Z	▲     Argument of type '(e: WheelEvent) => void' is not assignable to parameter of type 'EventListenerOrEventListenerObject'.
2026-05-30T00:52:27.550604Z	▲       Type '(e: WheelEvent) => void' is not assignable to type 'EventListener'.
2026-05-30T00:52:27.550644Z	▲         Types of parameters 'e' and 'evt' are incompatible.
2026-05-30T00:52:27.550688Z	▲           Type 'Event' is missing the following properties from type 'WheelEvent': deltaMode, deltaX, deltaY, deltaZ, and 30 more.
2026-05-30T00:52:27.550741Z	▲  
2026-05-30T00:52:27.550817Z	▲  [0m [90m 430 |[39m       })[33m;[39m
2026-05-30T00:52:27.550857Z	▲  [90m 431 |[39m     }[33m;[39m
2026-05-30T00:52:27.550909Z	▲  [31m[1m>[22m[39m[90m 432 |[39m     window[33m.[39maddEventListener([32m"wheel"[39m [36mas[39m string[33m,[39m handleWheel[33m,[39m { passive[33m:[39m [36mfalse[39m })[33m;[39m
2026-05-30T00:52:27.550997Z	▲  [90m     |[39m            [31m[1m^[22m[39m
2026-05-30T00:52:27.551084Z	▲  [90m 433 |[39m
2026-05-30T00:52:27.551223Z	▲  [90m 434 |[39m     [90m// 页面滚动处理[39m
2026-05-30T00:52:27.551341Z	▲  [90m 435 |[39m     [36mconst[39m handleScroll [33m=[39m () [33m=>[39m {[0m
2026-05-30T00:52:27.612021Z	▲  Next.js build worker exited with code: 1 and signal: null
2026-05-30T00:52:27.646735Z	▲  ELIFECYCLE  Command failed with exit code 1.
2026-05-30T00:52:27.694415Z	▲  Error: Command "pnpm run build" exited with 1
2026-05-30T00:52:28.423635Z	
2026-05-30T00:52:28.423899Z	⚡️ The Vercel build (`pnpm dlx vercel build`) command failed. For more details see the Vercel logs above.
2026-05-30T00:52:28.424353Z	⚡️ If you need help solving the issue, refer to the Vercel or Next.js documentation or their repositories.
2026-05-30T00:52:28.424435Z	
2026-05-30T00:52:28.495763Z	 ELIFECYCLE  Command failed with exit code 1.
2026-05-30T00:52:28.520719Z	Failed: Error while executing user command. Exited with error code: 1
2026-05-30T00:52:28.527798Z	Failed: build command exited with code: 1
2026-05-30T00:52:29.240032Z	Failed: error occurred while running build command