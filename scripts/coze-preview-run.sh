#!/usr/bin/env bash
set -euo pipefail

# 基于脚本位置定位项目根目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$SCRIPT_DIR"
cd "$PROJECT_DIR"

# 显式声明关键环境变量
export PORT=5000
export HOSTNAME=0.0.0.0

# 清理 5000 端口残留进程（幂等性）
echo "Checking port 5000..."
pids=$(ss -H -lntp 2>/dev/null | awk -v port="${PORT}" '$4 ~ ":"port"$"' | grep -o 'pid=[0-9]*' | cut -d= -f2 | paste -sd' ' - || true)
if [[ -n "${pids}" ]]; then
    echo "Port ${PORT} in use by PIDs: ${pids}, clearing..."
    echo "${pids}" | xargs -I {} kill -9 {} 2>/dev/null || true
    sleep 1
fi

echo "Starting Next.js dev server on 0.0.0.0:${PORT}..."
exec pnpm exec next dev --hostname 0.0.0.0 --port 5000
