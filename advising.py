# code_help.py
import os, re, json, requests
from pathlib import Path

# ======================= 配置区（只改这里） =======================
API_KEY = "sk-9YZtQPQHGlKOxgLFG8Ag4YlYHhRWUC7edpgv8FY8vkiZpJfU"              # 为了演示按你要求写在代码里；生产环境建议用环境变量
MODEL   = "claude-sonnet-4-5-20250929"   # 用 /v1/models 查询你这把 key 可用的真实模型名
INPUT_FILE  = "index.html"           # 要改进的源文件（不会被覆盖）
OUTPUT_FILE = "index_refactored.html"# 生成的副本文件名
TASK_PROMPT = (
    "请作为资深前端工程师改进这个个人主页："
    "1) 重构结构（语义化/可维护），2) 无障碍与响应式，3) 适度优化样式与交互，"
    "4) 保留并增加功能，需要挂相关链接和信息的地方请说明，5) 避免引入重库。"
)
# 希望模型只回一个代码块，便于直接落盘：
OUTPUT_FORMAT_RULE = "只输出最终文件的完整内容，使用一个 Markdown 代码块（```），不要任何解释或多余文字。"
MAX_TOKENS = 20000
BASE_URL = "https://www.dmxapi.cn"       # DMXAPI 基座（OpenAI 兼容）
# ================================================================

def read_text(path: str) -> str:
    p = Path(path)
    if not p.exists():
        raise FileNotFoundError(f"找不到文件：{p.resolve()}")
    return p.read_text(encoding="utf-8")

def extract_first_codeblock(text: str) -> str | None:
    """
    从模型回复里提取第一个 ```...``` 代码块内容（可带语言标记）。
    若未找到代码块，则返回 None。
    """
    m = re.search(r"```[a-zA-Z0-9_-]*\n([\s\S]*?)```", text)
    return m.group(1) if m else None

def call_chat_completion(code_text: str) -> str:
    url = f"{BASE_URL}/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
    payload = {
        "model": MODEL,
        "temperature": 0.2,
        "max_tokens": MAX_TOKENS,
        "messages": [
            {
                "role": "system",
                "content": (
                    "你是资深前端开发与测试工程师。"
                    "请在安全、可维护、可访问的前提下改进代码。"
                    + OUTPUT_FORMAT_RULE
                ),
            },
            {
                "role": "user",
                "content": f"任务：{TASK_PROMPT}\n下面是原始文件内容，请在不删减核心功能（但可以添加）的前提下重构：\n```{code_text}```",
            },
        ],
    }
    r = requests.post(url, headers=headers, data=json.dumps(payload), timeout=180)
    r.raise_for_status()
    data = r.json()
    return data["choices"][0]["message"]["content"]

def main():
    # 读取源文件
    src = read_text(INPUT_FILE)

    # 请求模型
    reply = call_chat_completion(src)

    # 提取代码块；若没有则回退写入全部回复
    code_only = extract_first_codeblock(reply) or reply

    # 防止误覆盖
    if Path(INPUT_FILE).resolve() == Path(OUTPUT_FILE).resolve():
        raise ValueError("OUTPUT_FILE 不能与 INPUT_FILE 相同，会覆盖原文件。请修改配置区。")

    # 写入副本
    Path(OUTPUT_FILE).parent.mkdir(parents=True, exist_ok=True)
    Path(OUTPUT_FILE).write_text(code_only, encoding="utf-8")

    print(f"✅ 已生成副本：{Path(OUTPUT_FILE).resolve()}")

if __name__ == "__main__":
    main()
