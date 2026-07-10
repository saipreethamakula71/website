module.exports = [
"[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sem_2.2/personal_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Sem_2.2/personal_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ProjectsTimeline({ projects }) {
    const [activeTag, setActiveTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Extract unique tags
    const allTags = Array.from(new Set(projects.flatMap((p)=>p.tags))).sort();
    const filteredProjects = activeTag ? projects.filter((p)=>p.tags.includes(activeTag)) : projects;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12",
        children: [
            allTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTag(null),
                        className: `px-3 py-1 rounded-full text-sm font-mono transition-colors ${activeTag === null ? "bg-brand-teal text-[#0d0d0d]" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    allTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTag(tag),
                            className: `px-3 py-1 rounded-full text-sm font-mono transition-colors ${activeTag === tag ? "bg-brand-teal text-[#0d0d0d]" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white"}`,
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative border-l border-neutral-800 ml-3 md:ml-4 space-y-12 pb-8",
                children: [
                    filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-8 md:pl-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-1.5 md:-left-2 top-1.5 w-3 h-3 md:w-4 md:h-4 bg-brand-teal rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col md:flex-row md:items-baseline md:justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                            className: "text-neutral-500 font-mono text-sm md:ml-4",
                                            children: project.date
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-4",
                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-300 mb-6 leading-relaxed",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 font-mono text-sm",
                                    children: [
                                        project.githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.githubUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-neutral-400 hover:text-brand-teal transition-colors underline underline-offset-4",
                                            children: "GitHub"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project.liveUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-neutral-400 hover:text-brand-teal transition-colors underline underline-offset-4",
                                            children: "Live Demo"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, project.slug, true, {
                            fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)),
                    filteredProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Sem_2$2e$2$2f$personal_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pl-8 text-neutral-500 font-mono",
                        children: "No projects found for this tag."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Sem_2.2/personal_website/src/app/projects/ProjectsTimeline.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Sem_2_2_personal_website_src_app_projects_ProjectsTimeline_tsx_0r-70em._.js.map