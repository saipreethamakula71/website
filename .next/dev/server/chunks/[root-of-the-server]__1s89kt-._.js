module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/Sem_2.2/personal_website/src/app/api/readme-chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sem_2.2/personal_website/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        const { question, readme, history } = await req.json();
        const rawKeys = process.env.GROQ_API_KEYS || process.env.GROQ_API_KEY || "";
        const apiKeys = rawKeys.split(',').map((k)=>k.trim()).filter((k)=>k.length > 0);
        if (apiKeys.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No API keys configured"
            }, {
                status: 500
            });
        }
        let lastStatus = 500;
        for (const apiKey of apiKeys){
            try {
                const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: "llama-3.3-70b-versatile",
                        messages: [
                            {
                                role: "system",
                                content: `You are a helpful assistant answering questions about a software project. Answer based only on the README below. If the answer isn't in it, say so. Be concise.\n\nREADME:\n${readme}`
                            },
                            ...history,
                            {
                                role: "user",
                                content: question
                            }
                        ]
                    })
                });
                if (res.ok) {
                    const data = await res.json();
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
                }
                const errorText = await res.text();
                console.warn(`Groq API error with key ending in ...${apiKey.slice(-4)}:`, res.status, errorText);
                lastStatus = res.status;
            // Continue to the next key if this one failed
            } catch (err) {
                console.warn(`Network error with key ending in ...${apiKey.slice(-4)}:`, err.message);
                lastStatus = 500;
            // Continue to the next key
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "All provided API keys failed"
        }, {
            status: lastStatus
        });
    } catch (error) {
        console.error("Error in readme-chat:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1s89kt-._.js.map