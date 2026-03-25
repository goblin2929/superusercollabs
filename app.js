/* ============================================
   MARTECH HEALTH CHECK — APP LOGIC
   ============================================ */

// ============================================
// QUESTIONS
// ============================================

const QUESTIONS = [
    // PILLAR 1: Data Foundation
    {
        pillar: "Data Foundation", pillarIndex: 0,
        text: "If your CEO walks in right now and asks \"how many active leads do we have?\" — what happens?",
        options: [
            { key: "A", text: "Panic. Then 45 minutes of tab-switching.", score: 0 },
            { key: "B", text: "I'd give a number but silently pray nobody asks how I got it.", score: 1 },
            { key: "C", text: "I'd pull it from the CRM pretty confidently.", score: 2 },
            { key: "D", text: "I'd spin my laptop around and show them the dashboard.", score: 3 }
        ]
    },
    {
        pillar: "Data Foundation", pillarIndex: 0,
        text: "Your customer data is best described as:",
        options: [
            { key: "A", text: "A beautiful mess spread across inboxes, spreadsheets, sticky notes, and Dave's memory.", score: 0 },
            { key: "B", text: "Mostly in the CRM. \"Mostly.\"", score: 1 },
            { key: "C", text: "Centralized with some cleanup needed.", score: 2 },
            { key: "D", text: "Clean, deduplicated, and I sleep well at night.", score: 3 }
        ]
    },
    {
        pillar: "Data Foundation", pillarIndex: 0,
        text: "How often do you discover the same contact exists 3 times with 3 different email spellings?",
        options: [
            { key: "A", text: "That's not a bug, that's a feature of our CRM.", score: 0 },
            { key: "B", text: "Often enough that we've stopped being surprised.", score: 1 },
            { key: "C", text: "Sometimes — we have processes to catch it.", score: 2 },
            { key: "D", text: "Rarely — we automated that problem away.", score: 3 }
        ]
    },
    // PILLAR 2: Martech Stack Health
    {
        pillar: "Martech Stack Health", pillarIndex: 1,
        text: "How many marketing tools does your team pay for?",
        options: [
            { key: "A", text: "Honestly? No one knows. The finance team has questions.", score: 0 },
            { key: "B", text: "3–5, and they each live on their own island.", score: 1 },
            { key: "C", text: "5–10 with some integrations between them.", score: 2 },
            { key: "D", text: "We have a documented stack map and everything connects.", score: 3 }
        ]
    },
    {
        pillar: "Martech Stack Health", pillarIndex: 1,
        text: "What percentage of your tools are being used to their full potential?",
        options: [
            { key: "A", text: "We're basically renting a Ferrari to drive to the mailbox.", score: 0 },
            { key: "B", text: "~25–50%. We use the basics and ignore the rest.", score: 1 },
            { key: "C", text: "~50–75%. Getting there.", score: 2 },
            { key: "D", text: "75%+. We actually read the documentation.", score: 3 }
        ]
    },
    {
        pillar: "Martech Stack Health", pillarIndex: 1,
        text: "When someone says \"let's add a new tool!\" what usually happens?",
        options: [
            { key: "A", text: "We buy it, onboard nobody, and add it to the tool graveyard.", score: 0 },
            { key: "B", text: "It works standalone. Connecting it to anything else? That's a Q3 project.", score: 1 },
            { key: "C", text: "We plan integration but it takes months.", score: 2 },
            { key: "D", text: "We have a process. New tools connect to the stack within weeks.", score: 3 }
        ]
    },
    // PILLAR 3: Reporting & Decision-Making
    {
        pillar: "Reporting & Decisions", pillarIndex: 2,
        text: "Building the monthly marketing report takes:",
        options: [
            { key: "A", text: "A blood sacrifice and an entire Tuesday.", score: 0 },
            { key: "B", text: "Several painful hours of copy-pasting from 6 different tabs.", score: 1 },
            { key: "C", text: "An hour or two — most of it is semi-automated.", score: 2 },
            { key: "D", text: "Zero time. It updates itself. I just add commentary.", score: 3 }
        ]
    },
    {
        pillar: "Reporting & Decisions", pillarIndex: 2,
        text: "Can you connect a dollar of marketing spend to a dollar of revenue?",
        options: [
            { key: "A", text: "Hahahahaha. No.", score: 0 },
            { key: "B", text: "We have vibes. Strong vibes. But not math.", score: 1 },
            { key: "C", text: "For some channels, yes. Others are a black hole.", score: 2 },
            { key: "D", text: "Multi-touch attribution across most channels. We can show our work.", score: 3 }
        ]
    },
    {
        pillar: "Reporting & Decisions", pillarIndex: 2,
        text: "When leadership asks \"should we double down or cut the budget?\" you reach for:",
        options: [
            { key: "A", text: "My gut. And a very confident voice.", score: 0 },
            { key: "B", text: "Some metrics that tell part of the story and a lot of hand-waving.", score: 1 },
            { key: "C", text: "Decent data, though I wish I had it faster.", score: 2 },
            { key: "D", text: "A dashboard that makes the answer embarrassingly obvious.", score: 3 }
        ]
    },
    {
        pillar: "Reporting & Decisions", pillarIndex: 2,
        text: "Do you have a data analyst, BI resource, or anyone dedicated to making sense of your marketing data?",
        options: [
            { key: "A", text: "No. The marketing team Googles \"how to pivot table\" once a month.", score: 0 },
            { key: "B", text: "Sort of — someone on the team is \"the data person\" on top of their actual job.", score: 1 },
            { key: "C", text: "We have a shared analyst but marketing isn't their priority.", score: 2 },
            { key: "D", text: "Yes — dedicated BI/analytics support that actually understands our marketing KPIs.", score: 3 }
        ]
    },
    // PILLAR 4: Automation & Workflow Readiness
    {
        pillar: "Automation Readiness", pillarIndex: 3,
        text: "How much of your marketing team's week is spent on tasks a robot could do?",
        options: [
            { key: "A", text: "40%+. We are the robots.", score: 0 },
            { key: "B", text: "20–40%. We know it's a problem. We're too busy to fix it.", score: 1 },
            { key: "C", text: "Some, but we've automated the most soul-crushing stuff.", score: 2 },
            { key: "D", text: "Very little. The machines do the boring parts.", score: 3 }
        ]
    },
    {
        pillar: "Automation Readiness", pillarIndex: 3,
        text: "A lead fills out a form on your website. Then what?",
        options: [
            { key: "A", text: "It goes into a spreadsheet. Someone will get to it. Probably.", score: 0 },
            { key: "B", text: "They get a generic \"thanks!\" email. Then the ball's in sales' court.", score: 1 },
            { key: "C", text: "They enter an automated sequence with some personalization.", score: 2 },
            { key: "D", text: "They're scored, routed, and nurtured based on who they are and what they did.", score: 3 }
        ]
    },
    {
        pillar: "Automation Readiness", pillarIndex: 3,
        text: "Your team's relationship with AI and automation is best described as:",
        options: [
            { key: "A", text: "\"We'll get to it after we fix the spreadsheet situation.\"", score: 0 },
            { key: "B", text: "\"We're curious but honestly don't know where to start.\"", score: 1 },
            { key: "C", text: "\"We're experimenting — a few tools here and there.\"", score: 2 },
            { key: "D", text: "\"It's embedded in our workflows and we're never going back.\"", score: 3 }
        ]
    }
];

// ============================================
// STACK OPTIONS
// ============================================

const STACK_CATEGORIES = [
    {
        label: "CRM & Sales",
        id: "crm",
        tools: [
            { id: "hubspot",    label: "HubSpot",    icon: "🟠", category: "crm" },
            { id: "salesforce", label: "Salesforce",  icon: "☁️", category: "crm" },
            { id: "pipedrive",  label: "Pipedrive",   icon: "🟢", category: "crm" },
            { id: "zoho",       label: "Zoho CRM",    icon: "🔵", category: "crm" },
        ]
    },
    {
        label: "Email & Marketing Automation",
        id: "email",
        tools: [
            { id: "mailchimp",      label: "Mailchimp",       icon: "🐒", category: "email" },
            { id: "klaviyo",        label: "Klaviyo",          icon: "💚", category: "email" },
            { id: "activecampaign", label: "ActiveCampaign",   icon: "⚡", category: "email" },
            { id: "brevo",          label: "Brevo",            icon: "💙", category: "email" },
        ]
    },
    {
        label: "Advertising",
        id: "ads",
        tools: [
            { id: "gads",         label: "Google Ads",   icon: "🎯", category: "ads" },
            { id: "meta_ads",     label: "Meta Ads",     icon: "📘", category: "ads" },
            { id: "linkedin_ads", label: "LinkedIn Ads",  icon: "💼", category: "ads" },
            { id: "tiktok_ads",   label: "TikTok Ads",    icon: "🎵", category: "ads" },
        ]
    },
    {
        label: "Analytics & BI",
        id: "analytics",
        tools: [
            { id: "ga4",      label: "Google Analytics", icon: "📊", category: "analytics" },
            { id: "mixpanel", label: "Mixpanel",         icon: "🟣", category: "analytics" },
            { id: "hotjar",   label: "Hotjar",           icon: "🔥", category: "analytics" },
            { id: "tableau",  label: "Tableau",           icon: "📈", category: "bi" },
            { id: "looker",   label: "Looker Studio",     icon: "👀", category: "bi" },
        ]
    },
    {
        label: "SEO & Content",
        id: "seo",
        tools: [
            { id: "semrush",   label: "Semrush",    icon: "🔍", category: "seo" },
            { id: "ahrefs",    label: "Ahrefs",     icon: "🅰️", category: "seo" },
            { id: "wordpress", label: "WordPress",   icon: "📝", category: "cms" },
            { id: "webflow",   label: "Webflow",     icon: "🌊", category: "cms" },
        ]
    },
    {
        label: "Automation & Workflow",
        id: "automation",
        tools: [
            { id: "zapier", label: "Zapier", icon: "⚡", category: "automation" },
            { id: "make",   label: "Make",   icon: "🔮", category: "automation" },
            { id: "n8n",    label: "n8n",    icon: "🔧", category: "automation" },
        ]
    },
    {
        label: "Project Management",
        id: "pm",
        tools: [
            { id: "notion", label: "Notion",     icon: "📓", category: "pm" },
            { id: "asana",  label: "Asana",       icon: "🎯", category: "pm" },
            { id: "monday", label: "Monday.com",  icon: "📋", category: "pm" },
            { id: "trello", label: "Trello",      icon: "📌", category: "pm" },
        ]
    },
    {
        label: "The Spreadsheet Situation",
        id: "spreadsheet",
        tools: [
            { id: "sheets", label: "Google Sheets",  icon: "📗", category: "spreadsheet" },
            { id: "excel",  label: "Excel",           icon: "📊", category: "spreadsheet" },
            { id: "airtable", label: "Airtable",      icon: "🟡", category: "spreadsheet" },
        ]
    },
    {
        label: "Chat, Support & Comms",
        id: "comms",
        tools: [
            { id: "intercom", label: "Intercom",  icon: "💬", category: "support" },
            { id: "drift",    label: "Drift",      icon: "🤖", category: "chat" },
            { id: "slack",    label: "Slack",       icon: "💬", category: "comms" },
            { id: "shopify",  label: "Shopify",     icon: "🛍️", category: "ecom" },
        ]
    }
];

// Flat list for lookups
const STACK_OPTIONS = STACK_CATEGORIES.flatMap(cat => cat.tools);

const ROLES = [
    { key: "A", text: "Founder / CEO — I wear all the hats and most of them don't fit" },
    { key: "B", text: "VP / Director of Marketing — I own the strategy and the chaos" },
    { key: "C", text: "Marketing Manager — I'm in the trenches every day" },
    { key: "D", text: "Marketing Ops / RevOps — I'm the one trying to fix all this" },
    { key: "E", text: "Other — I'm here for the roast" }
];

// ============================================
// PILLARS & STAGES
// ============================================

const PILLARS = [
    { name: "Data Foundation", icon: "🗄️" },
    { name: "Martech Stack Health", icon: "🔧" },
    { name: "Reporting & Decisions", icon: "📊" },
    { name: "Automation Readiness", icon: "⚡" }
];

const STAGES = [
    {
        name: "Fragmented",
        range: [0, 25],
        color: "var(--red)",
        roast: "\"It's not a tech stack. It's a tech... pile.\"",
        description: "Here's what this means in practice: your leadership team can't get a straight answer on pipeline, ROI, or campaign performance without someone spending half a day stitching together spreadsheets. Every board meeting is a fire drill. Your analysts — if you even have them — are buried in data plumbing instead of finding insights that drive revenue.",
        detail: "The real cost isn't the tools. It's the senior executive time wasted waiting for numbers, the decisions delayed because nobody trusts the data, and the analyst capacity consumed by manual grunt work instead of strategic analysis. AI-powered martech eliminates this bottleneck entirely — your dashboards update themselves, your attribution runs in real-time, and your leadership walks into strategy meetings with answers, not excuses."
    },
    {
        name: "Reactive",
        range: [26, 45],
        color: "var(--orange)",
        roast: "\"You have a Ferrari. You use it to check the mail.\"",
        description: "You've invested in the tools but your team is still in reactive mode — firefighting data issues instead of leveraging data for decisions. The typical pattern: exec asks for a number, analyst scrambles for 3 hours, number arrives too late to be useful. Your BI resource is spending 70% of their time on report assembly instead of the analysis that actually moves the needle.",
        detail: "This is where most mid-market teams get stuck. The bottleneck isn't budget or headcount — it's that your data analyst is manually connecting dots that should be automated. When the integration and automation layer is fixed, your existing team suddenly has 15+ hours per week back for actual strategic work. That's the difference between \"we think this campaign works\" and \"here's exactly where to reallocate $200K for maximum impact.\""
    },
    {
        name: "Organized",
        range: [46, 65],
        color: "var(--yellow)",
        roast: "\"Not bad. Someone on your team clearly has opinions about CRM hygiene.\"",
        description: "Your foundation is solid — data has a home, core systems are connected, and you can answer most questions with enough time. The gap now is speed and depth. Your leadership shouldn't need to schedule a meeting with BI to prep for a strategy meeting. The insights should be waiting for them when they sit down.",
        detail: "You're past the \"everything is on fire\" stage. The opportunity now is building the intelligence layer: AI that surfaces insights proactively, dashboards that answer tomorrow's questions before they're asked, and automated workflows that free your analysts to do the high-leverage work — modeling scenarios, identifying opportunities, and advising on strategy instead of pulling reports."
    },
    {
        name: "Optimized",
        range: [66, 85],
        color: "var(--green)",
        roast: "\"Wait, your reporting is automated? Can we hire your ops person?\"",
        description: "Your stack is integrated, your data is trustworthy, and your executives can get answers without filing a ticket with the BI team. That puts you ahead of 85% of companies your size. Your analysts are doing actual analysis instead of data janitorial work.",
        detail: "At this level, the next frontier is agentic AI — systems that don't just report what happened but recommend what to do next, automatically reallocate budget based on performance signals, and surface competitive intelligence before you ask for it. Your existing data foundation means AI can actually deliver on its promise here."
    },
    {
        name: "Autonomous",
        range: [86, 100],
        color: "var(--green)",
        roast: "\"Either you're lying or you should be selling this as a service.\"",
        description: "Your martech operates as a strategic advantage, not a cost center. Executives have real-time visibility, analysts focus on modeling and strategy, and AI handles the operational layer. If this is accurate, you're running the operating model most companies aspire to.",
        detail: "The risk at this stage is complacency. The AI and automation landscape is evolving quarterly. What's cutting-edge today is table stakes in 18 months. The question is whether your systems can evolve as fast as the market demands."
    }
];

// ============================================
// STATE
// ============================================

let currentQuestion = 0;
let answers = [];
let selectedStack = [];
let selectedRole = "";
let userData = { name: "", email: "", company: "" };

const TOTAL_STEPS = QUESTIONS.length + 2; // +stack +role

// ============================================
// NAVIGATION
// ============================================

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo(0, 0);
}

function startQuiz() {
    showScreen("screen-question");
    renderQuestion();
}

// ============================================
// QUESTIONS
// ============================================

function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    const container = document.querySelector("#screen-question .question-container");
    container.style.animation = "none";
    container.offsetHeight;
    container.style.animation = "fadeUp 0.35s ease";

    const step = currentQuestion + 1;
    const pct = (step / TOTAL_STEPS) * 100;
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-text").textContent = `${step} / ${TOTAL_STEPS}`;
    document.getElementById("pillar-tag").textContent = q.pillar;
    document.getElementById("question-text").textContent = q.text;

    const optContainer = document.getElementById("options-container");
    optContainer.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-key">${opt.key}</span><span>${opt.text}</span>`;
        btn.addEventListener("click", () => selectOption(i, opt.score));
        optContainer.appendChild(btn);
    });
}

function selectOption(index, score) {
    document.querySelectorAll("#screen-question .option-btn").forEach((btn, i) => {
        btn.classList.toggle("selected", i === index);
    });
    answers[currentQuestion] = { questionIndex: currentQuestion, pillarIndex: QUESTIONS[currentQuestion].pillarIndex, score };

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < QUESTIONS.length) {
            renderQuestion();
        } else {
            showScreen("screen-stack");
            renderStackPicker();
        }
    }, 300);
}

// Keyboard nav for questions
document.addEventListener("keydown", (e) => {
    if (document.getElementById("screen-question").classList.contains("active")) {
        const map = { a: 0, b: 1, c: 2, d: 3 };
        const idx = map[e.key.toLowerCase()];
        if (idx !== undefined && QUESTIONS[currentQuestion]?.options[idx]) {
            selectOption(idx, QUESTIONS[currentQuestion].options[idx].score);
        }
    }
});

// ============================================
// STACK PICKER
// ============================================

function renderStackPicker() {
    const container = document.getElementById("stack-categories");
    container.innerHTML = "";

    STACK_CATEGORIES.forEach(cat => {
        const section = document.createElement("div");
        section.className = "stack-category";
        section.innerHTML = `<div class="stack-category-label">${cat.label}</div>`;

        const grid = document.createElement("div");
        grid.className = "stack-category-grid";

        cat.tools.forEach(tool => {
            const chip = document.createElement("button");
            chip.className = "stack-chip";
            chip.dataset.id = tool.id;
            chip.innerHTML = `
                <span class="stack-chip-icon">${tool.icon}</span>
                <span>${tool.label}</span>
                <span class="stack-chip-check">✓</span>
            `;
            chip.addEventListener("click", () => toggleStack(tool.id, chip));
            grid.appendChild(chip);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });

    updateStackCount();
}

function toggleStack(id, chip) {
    const idx = selectedStack.indexOf(id);
    if (idx > -1) {
        selectedStack.splice(idx, 1);
        chip.classList.remove("selected");
    } else {
        selectedStack.push(id);
        chip.classList.add("selected");
    }
    updateStackCount();
    document.getElementById("stack-next-btn").disabled = selectedStack.length === 0;
}

function updateStackCount() {
    const n = selectedStack.length;
    const bar = document.getElementById("stack-selected-bar");
    const label = document.getElementById("stack-count");
    if (n === 0) {
        label.textContent = "Tap the tools you use";
    } else if (n <= 3) {
        label.textContent = `${n} selected — that's pretty lean`;
    } else if (n <= 7) {
        label.textContent = `${n} selected — solid stack`;
    } else if (n <= 10) {
        label.textContent = `${n} selected — getting crowded in here`;
    } else {
        label.textContent = `${n} selected — okay, we see the problem already`;
    }
}

function submitStack() {
    if (selectedStack.length === 0) return;
    showScreen("screen-role");
    renderRolePicker();
}

// ============================================
// ROLE PICKER
// ============================================

function renderRolePicker() {
    const container = document.getElementById("role-options");
    container.innerHTML = "";
    ROLES.forEach((role, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-key">${role.key}</span><span>${role.text}</span>`;
        btn.addEventListener("click", () => {
            document.querySelectorAll("#role-options .option-btn").forEach((b, j) => b.classList.toggle("selected", j === i));
            selectedRole = role.text;
            setTimeout(() => showResults(), 300);
        });
        container.appendChild(btn);
    });
}

// ============================================
// SCORING
// ============================================

function calculateScores() {
    const pillarScores = [0, 0, 0, 0];
    const pillarCounts = [0, 0, 0, 0];
    answers.forEach(a => {
        pillarScores[a.pillarIndex] += a.score;
        pillarCounts[a.pillarIndex]++;
    });
    const pillarPcts = pillarScores.map((s, i) => {
        const max = pillarCounts[i] * 3;
        return max > 0 ? Math.round((s / max) * 100) : 0;
    });
    const total = pillarScores.reduce((a, b) => a + b, 0);
    const overallPct = Math.round((total / (QUESTIONS.length * 3)) * 100);
    return { pillarPcts, overallPct };
}

function getStage(pct) {
    return STAGES.find(s => pct >= s.range[0] && pct <= s.range[1]) || STAGES[0];
}

function getPillarComment(pi, pct) {
    const c = {
        0: [
            "No unified customer record. Every team is working off a different version of the truth — which means pipeline forecasts, segmentation, and personalization are all unreliable.",
            "CRM adoption is partial. Data exists but it's inconsistent — duplicate records, missing fields, and no governance. This silently degrades every downstream process from lead scoring to attribution.",
            "Solid foundation in place. Data hygiene needs tightening, but you have a single source of truth your team mostly trusts. Ready for enrichment and automation layers.",
            "Clean, governed, unified data. This is the asset everything else compounds on — your attribution, segmentation, and AI readiness all benefit from this."
        ],
        1: [
            "You're paying for tools that can't see each other. Every disconnected system creates manual work, data gaps, and decisions made on incomplete information. This is your biggest operational drag.",
            "Partial integrations with significant gaps. Data moves between some systems but key handoffs are still manual — which means leads fall through cracks and reporting misses the full picture.",
            "Most critical systems are connected. The remaining gaps are costing you speed, not accuracy. You're close to a fully integrated ops layer.",
            "Integrated stack with clean data flows. Your tools amplify each other instead of creating extra work. This operational leverage is rare at your stage."
        ],
        2: [
            "No reliable attribution, no automated reporting, no BI support. Leadership decisions about budget are based on gut feel — which means you can't defend spend or double down on what's working.",
            "Some reporting exists but it's manual, slow, and incomplete. By the time you have the data, the window to act on it has usually passed. Your analyst (if you have one) is buried in spreadsheets instead of finding insights.",
            "Reporting is functional but attribution has blind spots. You can answer most questions — it just takes longer than it should. A dedicated BI resource or better dashboards would unlock significantly faster decisions.",
            "Real-time dashboards, working attribution, and data-informed decisions. Marketing can demonstrate ROI to the board with confidence. This is where spend optimization starts compounding."
        ],
        3: [
            "Nearly everything is manual. Your team is spending 30-40% of their time on tasks that should be automated — data entry, list management, report building, lead routing. That's senior talent doing junior work.",
            "Basic automation exists (email sequences, form handling) but complex workflows are still manual. Lead follow-up is slow, campaign launches require too many hands, and scaling means hiring instead of building systems.",
            "Core workflows are automated. The next layer is intelligent automation — AI-assisted content ops, predictive lead scoring, and self-optimizing campaigns that adapt without human intervention.",
            "Advanced automation with AI integration. Your team focuses on strategy and creative while systems handle execution. This is the operating model that scales without linear headcount growth."
        ]
    };
    const tier = pct <= 25 ? 0 : pct <= 50 ? 1 : pct <= 75 ? 2 : 3;
    return c[pi][tier];
}

// ============================================
// STACK DIAGNOSIS
// ============================================

function getStackDiagnosis(stack, pillarPcts) {
    const issues = [];
    const tools = stack.map(id => STACK_OPTIONS.find(t => t.id === id)).filter(Boolean);
    const cats = tools.map(t => t.category);
    const ids = stack;

    // Multiple CRMs
    const crms = tools.filter(t => t.category === "crm");
    if (crms.length > 1) {
        issues.push(`You're running ${crms.map(c => c.label).join(" AND ")}? That's not a strategy — that's a custody battle for your contact data. Pick one. Migrate. Grieve the other. Move on.`);
    }

    // CRM + spreadsheet as primary
    if (cats.includes("spreadsheet") && !cats.includes("crm")) {
        issues.push("No CRM but you've got spreadsheets. That's like navigating with a paper map in 2026. It technically works until it very much doesn't.");
    }

    if (cats.includes("spreadsheet") && cats.includes("crm")) {
        issues.push("You have a CRM AND you're still using spreadsheets for marketing data? The CRM is crying. It wants to do its job. Let it.");
    }

    // No analytics
    if (!cats.includes("analytics") && !cats.includes("bi")) {
        issues.push("No analytics or BI tool in sight. You're making decisions based on... vibes? Prayers? Either way, we need to talk.");
    }

    // Zapier/Make but low automation score
    if ((ids.includes("zapier") || ids.includes("make")) && pillarPcts[3] < 50) {
        const tool = ids.includes("zapier") ? "Zapier" : "Make";
        issues.push(`You have ${tool} but your automation score is still low. That's like having a gym membership and only using the sauna. The potential is there — you just need someone to build the actual workflows.`);
    }

    // Ad platforms but no attribution
    const hasAds = ids.includes("gads") || ids.includes("meta_ads") || ids.includes("linkedin_ads");
    if (hasAds && pillarPcts[2] < 50) {
        issues.push("You're spending money on ads but can't prove they work. That's not marketing — that's donating to Google and Meta with extra steps.");
    }

    // Email tool disconnected from CRM
    const emailTools = tools.filter(t => t.category === "email");
    if (emailTools.length > 0 && crms.length > 0 && pillarPcts[1] < 50) {
        issues.push(`${emailTools[0].label} + ${crms[0].label} and they're barely talking? Your email tool has data your CRM needs and vice versa. This disconnect is costing you leads. Literally.`);
    }

    // Too many tools overall
    if (stack.length > 10) {
        issues.push(`${stack.length} tools. You don't have a martech stack — you have a martech city. And nobody's built the roads between the buildings yet.`);
    } else if (stack.length > 7) {
        issues.push(`${stack.length} tools is manageable IF they're connected. Based on your other answers... they're probably not. Let's fix that.`);
    }

    // SEO tools but no content pipeline
    if ((ids.includes("semrush") || ids.includes("ahrefs")) && pillarPcts[3] < 50) {
        issues.push("You have SEO research tools but your workflow is still manual. You're paying for insights you don't have the operational capacity to act on.");
    }

    // Notion/Asana/Monday but still disorganized
    const hasPM = ids.includes("notion") || ids.includes("asana") || ids.includes("monday");
    if (hasPM && pillarPcts[1] < 50) {
        issues.push("You have a project management tool but your stack health is still low. The irony is not lost on us. The tool that's supposed to organize everything... isn't connected to anything.");
    }

    // No automation tool
    if (!cats.includes("automation") && pillarPcts[3] < 50) {
        issues.push("No automation tool at all? Your team is the automation. Every manual handoff, every CSV export, every \"let me update that spreadsheet\" — that's human time being burned on robot work.");
    }

    // Shopify + low data score
    if (ids.includes("shopify") && pillarPcts[0] < 50) {
        issues.push("Shopify has incredible data. You're just not piping it anywhere useful. Customer purchase data should be feeding your CRM, your email tool, and your ad platforms. Right now it's probably just... sitting there.");
    }

    // Generic fallback
    if (issues.length === 0) {
        issues.push("Your stack looks reasonable on paper. The question is whether these tools are actually talking to each other or just coexisting like roommates who communicate via passive-aggressive sticky notes.");
    }

    return issues;
}

// ============================================
// CUSTOM SOLUTION (post-form)
// ============================================

function generateSolution(stack, pillarPcts, overallPct) {
    const tools = stack.map(id => STACK_OPTIONS.find(t => t.id === id)).filter(Boolean);
    const ids = stack;
    const cats = tools.map(t => t.category);
    const solutions = [];

    // Priority 1: Worst pillar
    const weakest = pillarPcts.indexOf(Math.min(...pillarPcts));
    const pillarFixes = {
        0: {
            title: "Fix Your Data Foundation First",
            desc: "Everything else falls apart without clean, unified data. We'd start with a data audit: where does your customer data live, what's duplicated, what's missing, and what's conflicting. Then we'd build a single source of truth.",
            actions: [
                "Audit and deduplicate your contact database",
                "Set up automated data hygiene rules (no more \"John\" and \"john\" and \"J0hn\")",
                "Create a data flow map showing where information enters and exits your system",
                "Implement validation rules so bad data stops getting in"
            ]
        },
        1: {
            title: "Connect Your Martech Stack",
            desc: "You have tools. They just don't know each other exist. We'd map your entire stack, identify the critical integration gaps, and build the bridges between them.",
            actions: [
                "Map every tool and its current integration points (you'll be surprised what's missing)",
                "Prioritize the 3 integrations that would save the most manual work",
                "Build automated data flows between your core systems",
                "Eliminate redundant tools that do the same thing"
            ]
        },
        2: {
            title: "Build Reporting That Doesn't Require a Human Sacrifice",
            desc: "Your team shouldn't be spending hours building reports. We'd set up dashboards that update themselves and actually answer the questions leadership keeps asking.",
            actions: [
                "Build a live marketing performance dashboard (no more Tuesday report marathons)",
                "Set up multi-touch attribution so you know what's actually driving revenue",
                "Create automated alerts for metrics that matter (not vanity metrics)",
                "Build a board-ready report template that pulls data automatically"
            ]
        },
        3: {
            title: "Automate the Robot Work",
            desc: "Your team is doing work that machines should be doing. We'd identify every manual process in your marketing ops and build automated workflows to handle them.",
            actions: [
                "Map every manual process your team does weekly (prepare to be horrified)",
                "Build automated lead routing and nurture workflows",
                "Set up trigger-based actions (form fill -> score -> route -> nurture)",
                "Implement AI-assisted content and campaign workflows"
            ]
        }
    };

    solutions.push({
        priority: 1,
        ...pillarFixes[weakest],
        tools: getRelevantTools(weakest, tools)
    });

    // Priority 2: Stack-specific fix
    const crms = tools.filter(t => t.category === "crm");
    if (crms.length > 1) {
        solutions.push({
            priority: 2,
            title: "End the CRM Civil War",
            desc: `Running ${crms.map(c => c.label).join(" and ")} in parallel is costing you data quality, team sanity, and probably a few thousand dollars a year in duplicate licenses. Time to pick a winner.`,
            actions: [
                "Audit which CRM has better data quality and adoption",
                "Build a migration plan for contacts, deals, and custom properties",
                "Set up proper integrations on the winning CRM",
                "Deprecate the loser (it's okay, it had a good run)"
            ],
            tools: crms.map(t => t.label)
        });
    } else if (hasAdsNoAttribution(ids, pillarPcts)) {
        solutions.push({
            priority: 2,
            title: "Stop Burning Ad Budget Blind",
            desc: "You're running paid campaigns with no way to prove ROI. Before you spend another dollar on ads, let's build the attribution pipeline that tells you which dollars are working.",
            actions: [
                "Implement UTM conventions across all ad campaigns",
                "Connect ad platform data to your CRM (closed-loop reporting)",
                "Build a channel ROI dashboard that leadership can actually read",
                "Set up automated budget alerts when CPA exceeds thresholds"
            ],
            tools: tools.filter(t => t.category === "ads").map(t => t.label).concat(crms.map(c => c.label))
        });
    } else if (!cats.includes("automation") && pillarPcts[3] < 60) {
        solutions.push({
            priority: 2,
            title: "Add an Automation Layer",
            desc: "You have zero automation tooling. Before adding another marketing tool, add the tool that connects all your other tools. This is the highest-leverage investment you can make right now.",
            actions: [
                "Evaluate and implement a workflow automation platform (n8n, Make, or Zapier)",
                "Start with 3 high-impact automations: lead routing, reporting, and data sync",
                "Document your manual processes so they can be automated systematically",
                "Build monitoring so you know when automations break (they will)"
            ],
            tools: ["n8n", "Make", "Zapier"]
        });
    } else {
        // Second weakest pillar
        const sorted = [...pillarPcts].map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
        const secondWeakest = sorted[1].i;
        if (secondWeakest !== weakest) {
            solutions.push({
                priority: 2,
                ...pillarFixes[secondWeakest],
                tools: getRelevantTools(secondWeakest, tools)
            });
        }
    }

    // Priority 3: Quick win
    const quickWins = [];
    if (cats.includes("spreadsheet") && cats.includes("crm")) {
        quickWins.push({
            title: "Kill the Shadow Spreadsheets",
            desc: "Every spreadsheet that duplicates CRM data is a ticking time bomb. Identify them, migrate the data, and set a team rule: if it's a contact or deal, it lives in the CRM. Period.",
            tools: tools.filter(t => t.category === "spreadsheet" || t.category === "crm").map(t => t.label)
        });
    }
    if (cats.includes("email") && cats.includes("crm") && pillarPcts[1] < 60) {
        const emailTool = tools.find(t => t.category === "email");
        const crmTool = tools.find(t => t.category === "crm");
        quickWins.push({
            title: `Sync ${emailTool.label} ↔ ${crmTool.label}`,
            desc: "This integration probably exists natively and takes an afternoon to set up. The ROI is immediate: no more manual list exports, engagement data flows back to CRM, and sales can see what marketing emails a lead opened.",
            tools: [emailTool.label, crmTool.label]
        });
    }
    if (ids.includes("ga4") && pillarPcts[2] < 60) {
        quickWins.push({
            title: "Set Up a Real GA4 Dashboard",
            desc: "GA4 is powerful but the default reports are useless. Build a custom Looker Studio dashboard that answers the 5 questions your team actually cares about. Takes 2 hours. Saves hundreds.",
            tools: ["Google Analytics", "Looker Studio"]
        });
    }

    if (quickWins.length > 0) {
        solutions.push({ priority: 3, ...quickWins[0], actions: null });
    }

    return solutions;
}

function hasAdsNoAttribution(ids, pillarPcts) {
    return (ids.includes("gads") || ids.includes("meta_ads") || ids.includes("linkedin_ads")) && pillarPcts[2] < 50;
}

function getRelevantTools(pillarIndex, tools) {
    const catMap = {
        0: ["crm", "spreadsheet"],
        1: ["crm", "email", "ads", "automation", "analytics"],
        2: ["analytics", "bi", "crm", "ads"],
        3: ["automation", "email", "crm"]
    };
    const relevant = catMap[pillarIndex] || [];
    return tools.filter(t => relevant.includes(t.category)).map(t => t.label);
}

// ============================================
// BEFORE/AFTER VISION + IMPACT
// ============================================

function getBeforeAfterVision(pillarPcts, overallPct, stack) {
    const before = [];
    const after = [];
    const ids = stack;
    const tools = stack.map(id => STACK_OPTIONS.find(t => t.id === id)).filter(Boolean);
    const cats = tools.map(t => t.category);

    // Data Foundation
    if (pillarPcts[0] <= 50) {
        before.push("\"How many active leads?\" takes 45 min and 4 tabs to answer");
        after.push("One dashboard. One number. Real-time. Zero analyst hours.");
    } else {
        before.push("Analyst spends 5+ hrs/week deduping instead of analyzing");
        after.push("Automated data hygiene — analyst time goes to strategic work");
    }

    // Reporting / BI
    if (pillarPcts[2] <= 50) {
        before.push("Board prep = crunch session with BI to pull numbers that should already exist");
        after.push("Execs walk into meetings with answers. No prep scramble.");
    } else {
        before.push("Reports work but attribution is a black box — can't prove ROI");
        after.push("Closed-loop attribution. Every dollar tracked from spend to revenue.");
    }

    // Automation
    if (pillarPcts[3] <= 50) {
        before.push("$150K talent doing $15/hr work — data entry, list pulls, manual follow-up");
        after.push("AI handles ops. Senior team does strategy and creative.");
    } else {
        before.push("Scaling = hiring more people instead of building smarter systems");
        after.push("Agentic workflows scale output without adding headcount");
    }

    // Stack-specific (pick best one)
    if (cats.includes("spreadsheet") && cats.includes("crm") && pillarPcts[0] <= 60) {
        before.push("\"The real data is in Maria's spreadsheet, not the CRM\"");
        after.push("CRM is the single source of truth. Spreadsheet era is over.");
    } else if ((ids.includes("gads") || ids.includes("meta_ads")) && pillarPcts[2] <= 50) {
        before.push("Ad budget goes out. Leads come in. Nobody can connect the two.");
        after.push("Every ad dollar tracked from click to closed deal.");
    } else if (pillarPcts[1] <= 50) {
        before.push(`${stack.length} tools, ${stack.length} versions of the truth`);
        after.push("Integrated stack. Data flows automatically between every system.");
    } else {
        before.push("Key integrations break silently — discrepancies surface during board prep");
        after.push("Monitored pipelines with alerts. Numbers always match across systems.");
    }

    return { before: before.slice(0, 4), after: after.slice(0, 4) };
}

function getImpactMetrics(pillarPcts, overallPct, stack) {
    const metrics = [];

    // Analyst time reclaimed
    const reportScore = pillarPcts[2];
    const autoScore = pillarPcts[3];
    if (reportScore <= 33) {
        metrics.push({ number: "70%", label: "of analyst time currently wasted on data plumbing instead of strategic analysis" });
    } else if (reportScore <= 66) {
        metrics.push({ number: "15+ hrs", label: "per week of analyst/ops time reclaimed from manual reporting and data wrangling" });
    } else {
        metrics.push({ number: "5-8 hrs", label: "per week freed for strategic analysis by eliminating remaining manual workflows" });
    }

    // Decision speed
    if (overallPct <= 45) {
        metrics.push({ number: "3 days → 3 min", label: "time from 'exec asks a question' to 'exec gets a trusted answer'" });
    } else if (overallPct <= 65) {
        metrics.push({ number: "Real-time", label: "C-level visibility into pipeline, attribution, and campaign performance — no more prep crunches before strategy meetings" });
    } else {
        metrics.push({ number: "Predictive", label: "AI surfaces insights and recommendations before leadership has to ask — proactive instead of reactive" });
    }

    // Business impact
    if (stack.length > 5 && pillarPcts[1] <= 50) {
        metrics.push({ number: `${stack.length} → ${Math.max(3, Math.ceil(stack.length * 0.6))}`, label: "tools needed when they're properly integrated — reduce spend, reduce complexity, increase output" });
    } else if (autoScore <= 50) {
        metrics.push({ number: "3-5x", label: "more output from your existing team by automating the operational layer they're currently doing manually" });
    } else {
        metrics.push({ number: "10x", label: "campaign velocity with end-to-end AI workflows — from insight to execution without waiting for human handoffs" });
    }

    return metrics;
}

function getMondayStory(pillarPcts, overallPct) {
    if (overallPct <= 25) {
        return `<span class="time-tag">9:00 AM</span> You open your laptop. A live dashboard already shows weekend pipeline, conversions, and campaign performance. No Slack message to the analyst. No waiting. `
            + `<span class="time-tag">9:15 AM</span> Three leads came in Saturday. They've been scored, routed, and received personalized follow-up automatically. Your SDR opens their CRM to full context — pages visited, emails opened, company intel — before their first sip of coffee. `
            + `<span class="time-tag">9:30 AM</span> The board deck data is already populated. Your analyst spent zero hours pulling numbers — they spent Friday building a scenario model for the Q3 budget conversation instead. `
            + `<span class="time-tag">10:00 AM</span> Your VP of Marketing walks into the leadership meeting with answers, not requests. Budget decisions happen in the meeting, not two weeks later after "we need to pull the data." That's what fixed looks like.`;
    }
    if (overallPct <= 45) {
        return `<span class="time-tag">9:00 AM</span> Dashboard loads with real-time data. Your VP can see which campaigns drove leads over the weekend without pinging the BI team. The numbers are already there. `
            + `<span class="time-tag">9:10 AM</span> An automated alert flagged that one ad set's CPA spiked 40% on Sunday. You paused it in 30 seconds from your phone. Last month, you wouldn't have caught it until the end-of-month report burned 6 hours of analyst time to surface it. `
            + `<span class="time-tag">9:30 AM</span> Your analyst — no longer buried in report assembly — presents a competitive analysis they had time to build because AI handles the data plumbing now. This is the kind of work that actually changes strategy. `
            + `<span class="time-tag">10:00 AM</span> Leadership team reviews an AI-generated brief for next quarter's campaign strategy. It pulled performance data, market signals, and competitor activity automatically. The meeting is about what to do, not what happened.`;
    }
    if (overallPct <= 65) {
        return `<span class="time-tag">9:00 AM</span> Your optimization engine ran overnight A/B tests. The winning ad variant is already getting more budget — no human intervention needed. `
            + `<span class="time-tag">9:15 AM</span> CRM auto-enriched 12 new contacts with firmographic data, tech stack signals, and intent scores. Your SDR has a prioritized list with personalized talk tracks before they log in. `
            + `<span class="time-tag">9:30 AM</span> Your BI analyst presents a predictive churn model they built last week (because they're no longer spending 15 hrs/week on reporting). It identifies 3 at-risk accounts worth $400K — sales is already on it. `
            + `<span class="time-tag">10:00 AM</span> CFO asks about marketing ROI. Your VP pulls up closed-loop attribution showing exactly which touchpoints influenced last quarter's wins. Budget reallocation decision takes 15 minutes, not 15 days.`;
    }
    return `<span class="time-tag">9:00 AM</span> Agentic workflows ran all weekend — optimizing bids, nurturing leads, cleaning data, generating performance reports with executive summaries. `
        + `<span class="time-tag">9:15 AM</span> An AI agent flagged a competitor's new pricing page and drafted a competitive brief for leadership review. Your team approves and distributes in 2 minutes. `
        + `<span class="time-tag">9:30 AM</span> Predictive models identified 5 high-probability accounts for Q2 based on behavioral signals and market data. Personalized engagement playbooks are already queued. `
        + `<span class="time-tag">10:00 AM</span> Your leadership team works ON the business, not IN the data. Analysts build models and test hypotheses. Executives make decisions with confidence. The operational layer runs itself.`;
}

// ============================================
// SHOW RESULTS (immediate — no gate)
// ============================================

function showResults() {
    showScreen("screen-results");
    const { pillarPcts, overallPct } = calculateScores();
    const stage = getStage(overallPct);

    // Score ring animation
    setTimeout(() => {
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (overallPct / 100) * circumference;
        const fill = document.getElementById("score-ring-fill");
        fill.style.stroke = stage.color;
        fill.style.strokeDashoffset = offset;
    }, 100);

    animateNumber("score-value", overallPct);

    document.getElementById("stage-name").textContent = stage.name;
    document.getElementById("stage-name").style.color = stage.color;
    document.getElementById("stage-roast").textContent = stage.roast;
    document.getElementById("stage-description").textContent = stage.description;

    // Pillar cards
    const pillarContainer = document.getElementById("pillar-results");
    pillarContainer.innerHTML = "";
    PILLARS.forEach((pillar, i) => {
        const pct = pillarPcts[i];
        const barColor = pct <= 25 ? "var(--red)" : pct <= 50 ? "var(--orange)" : pct <= 75 ? "var(--yellow)" : "var(--green)";
        const card = document.createElement("div");
        card.className = "pillar-card";
        card.innerHTML = `
            <div class="pillar-card-header">
                <span class="pillar-card-name">${pillar.icon} ${pillar.name}</span>
                <span class="pillar-card-score" style="color:${barColor}">${pct}%</span>
            </div>
            <div class="pillar-bar"><div class="pillar-bar-fill" id="pillar-bar-${i}" style="background:${barColor}"></div></div>
            <div class="pillar-card-comment">${getPillarComment(i, pct)}</div>
        `;
        pillarContainer.appendChild(card);
        setTimeout(() => { document.getElementById(`pillar-bar-${i}`).style.width = pct + "%"; }, 200 + i * 100);
    });

    // Detail — Before/After Vision + Impact
    const weakest = pillarPcts.indexOf(Math.min(...pillarPcts));
    const strongest = pillarPcts.indexOf(Math.max(...pillarPcts));
    const vision = getBeforeAfterVision(pillarPcts, overallPct, selectedStack);
    const impact = getImpactMetrics(pillarPcts, overallPct, selectedStack);
    const mondayStory = getMondayStory(pillarPcts, overallPct);

    document.getElementById("results-detail").innerHTML = `
        <h3>Your Monday Morning: Now vs. Fixed</h3>
        <div class="before-after">
            <div class="ba-col ba-before">
                <div class="ba-label"><span class="ba-label-emoji">😩</span> Right Now</div>
                ${vision.before.map(b => `<div class="ba-item"><span class="ba-item-icon">✗</span><span>${b}</span></div>`).join("")}
            </div>
            <div class="ba-col ba-after">
                <div class="ba-label"><span class="ba-label-emoji">✨</span> After We Fix This</div>
                ${vision.after.map(a => `<div class="ba-item"><span class="ba-item-icon">✓</span><span>${a}</span></div>`).join("")}
            </div>
        </div>

        <h3>What You're Leaving on the Table</h3>
        <div class="impact-metrics">
            ${impact.map(m => `
                <div class="impact-card">
                    <span class="impact-number">${m.number}</span>
                    <span class="impact-label">${m.label}</span>
                </div>
            `).join("")}
        </div>

        <div class="monday-story">
            <h4>Here's what this actually looks like...</h4>
            <p>${mondayStory}</p>
        </div>
    `;

    // Stack diagnosis
    const stackIssues = getStackDiagnosis(selectedStack, pillarPcts);
    const stackLabels = selectedStack.map(id => STACK_OPTIONS.find(t => t.id === id)).filter(Boolean);
    document.getElementById("stack-diagnosis").innerHTML = `
        <h3>Your Stack, Diagnosed</h3>
        <div class="stack-tag-row">${stackLabels.map(t => `<span class="stack-tag">${t.icon} ${t.label}</span>`).join("")}</div>
        <div class="verdict-badge ${overallPct <= 25 ? 'verdict-red' : overallPct <= 45 ? 'verdict-orange' : overallPct <= 65 ? 'verdict-yellow' : 'verdict-green'}">
            ${selectedStack.length} tools &middot; ${overallPct <= 45 ? "mostly disconnected" : overallPct <= 65 ? "partially connected" : "reasonably connected"}
        </div>
        ${stackIssues.map(issue => `<p>${issue}</p>`).join("")}
    `;
}

// ============================================
// FORM SUBMISSION → CUSTOM SOLUTION
// ============================================

function submitLead(e) {
    e.preventDefault();
    userData.name = document.getElementById("input-name").value;
    userData.email = document.getElementById("input-email").value;
    userData.company = document.getElementById("input-company").value;

    // Store
    const submission = {
        timestamp: new Date().toISOString(),
        user: userData,
        role: selectedRole,
        stack: selectedStack,
        answers,
        scores: calculateScores()
    };
    const existing = JSON.parse(localStorage.getItem("healthcheck_submissions") || "[]");
    existing.push(submission);
    localStorage.setItem("healthcheck_submissions", JSON.stringify(existing));
    console.log("New submission:", JSON.stringify(submission, null, 2));

    // Hide form, show solution
    document.getElementById("form-gate").style.display = "none";
    renderCustomSolution();
}

function renderCustomSolution() {
    const { pillarPcts, overallPct } = calculateScores();
    const solutions = generateSolution(selectedStack, pillarPcts, overallPct);
    const el = document.getElementById("custom-solution");

    const firstName = userData.name.split(" ")[0] || "friend";

    el.style.display = "block";
    el.innerHTML = `
        <div class="solution-header">
            <h2>Your Custom Fix, ${firstName}</h2>
            <p>Based on your stack, your scores, and years of fixing exactly this kind of mess.</p>
        </div>
        ${solutions.map(s => `
            <div class="solution-card">
                <div class="solution-card-header">
                    <span class="solution-card-priority priority-${s.priority}">${s.priority}</span>
                    <span class="solution-card-title">${s.title}</span>
                </div>
                <p>${s.desc}</p>
                ${s.actions ? `<ul>${s.actions.map(a => `<li>${a}</li>`).join("")}</ul>` : ""}
                ${s.tools && s.tools.length ? `<div class="tools-involved">${s.tools.map(t => `<span class="tool-pill">${t}</span>`).join("")}</div>` : ""}
            </div>
        `).join("")}
        <div class="solution-cta">
            <h3>Want us to actually build this?</h3>
            <p>This isn't a generic playbook — it's based on your exact answers and your exact stack. We can turn this diagnosis into a 90-day implementation plan. The first conversation is free and there's zero pitch until you ask for one.</p>
            <a href="https://novastacks-ai.com/contact" target="_blank" class="btn-primary">Book a Free Strategy Session →</a>
        </div>
    `;

    // Scroll to solution
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================
// UTILITIES
// ============================================

function animateNumber(elementId, target) {
    const el = document.getElementById(elementId);
    const duration = 1500;
    const start = performance.now();
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
