module.exports = [
"[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearningsTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sem_2.2/personal_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sem_2.2/personal_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LearningsTimeline({ learnings }) {
    const [activeTopic, setActiveTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Extract unique topics
    const allTopics = Array.from(new Set(learnings.map((l)=>l.topic))).sort();
    const filteredLearnings = activeTopic ? learnings.filter((l)=>l.topic === activeTopic) : learnings;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            allTopics.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTopic(null),
                        className: `px-3 py-1 rounded-full text-sm font-mono transition-colors ${activeTopic === null ? "bg-brand-purple text-[#0d0d0d]" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    allTopics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTopic(topic),
                            className: `px-3 py-1 rounded-full text-sm font-mono transition-colors ${activeTopic === topic ? "bg-brand-purple text-[#0d0d0d]" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"}`,
                            children: topic
                        }, topic, false, {
                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-l border-neutral-800 ml-3 md:ml-4 space-y-12 pb-8",
                children: [
                    filteredLearnings.map((learning)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-8 md:pl-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-1.5 md:-left-2 top-1.5 w-3 h-3 md:w-4 md:h-4 bg-brand-purple rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:items-baseline md:justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold",
                                            children: learning.title
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                            className: "text-neutral-500 font-mono text-sm md:ml-4",
                                            children: learning.date
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded",
                                        children: learning.topic
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-300 leading-relaxed",
                                    children: learning.summary
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, learning.slug, true, {
                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)),
                    filteredLearnings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-8 text-neutral-500 font-mono",
                        children: "No entries found for this topic."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/learnings/LearningsTimeline.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=0wta_Sem_2_2_personal_website_src_app_learnings_LearningsTimeline_tsx_1ker8lj._.js.map