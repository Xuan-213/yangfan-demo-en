// ===== Yang Fan AIHR Database =====
// 20 interns + 6 mentors + 3-week performance data

var AIHR_DB = {

// ===== Mentor Data (6) =====
mentors: [
  { id:'M001', name:'Ma (Mentor)', dept:'Product', title:'Senior Product Manager', interns:6, avatar:'Ma', rating:4.8, completedTasks:42, color:'#6366F1' },
  { id:'M002', name:'Li (Mentor)', dept:'Product', title:'Product Director',     interns:4, avatar:'Li', rating:4.6, completedTasks:38, color:'#3B82F6' },
  { id:'M003', name:'Wang (Mentor)', dept:'R&D', title:'Tech Lead',   interns:4, avatar:'Wang', rating:4.9, completedTasks:45, color:'#10B981' },
  { id:'M004', name:'Zhang (Mentor)', dept:'R&D', title:'Senior Architect',   interns:3, avatar:'Zh', rating:4.7, completedTasks:36, color:'#34D399' },
  { id:'M005', name:'Zhao (Mentor)', dept:'Sales', title:'Sales VP',       interns:2, avatar:'Zh', rating:4.5, completedTasks:30, color:'#F59E0B' },
  { id:'M006', name:'Chen (Mentor)', dept:'Sales', title:'Key Account Director',   interns:1, avatar:'Ch', rating:4.4, completedTasks:28, color:'#FBBF24' }
],

// ===== Intern Data (20, 3-week performance) =====
interns: [
  // ---- Product Dept (7) ----
  { id:'I001', name:'Zhang Yao',   dept:'Product', mentor:'Ma (Mentor)', avatar:'Zh', avColor:'a1',
    weeks:[
      { wk:1, rate:58, quality:62, tasks:3 },
      { wk:2, rate:55, quality:58, tasks:2 },
      { wk:3, rate:52, quality:51, tasks:2 }
    ],
    competency:61, risk:'high', trend:-3.2, fit:58, status:'Business understanding weak for 3 weeks', taskStatus:'In Progress' },

  { id:'I002', name:'Zhao Qing',   dept:'Product', mentor:'Ma (Mentor)', avatar:'Zh', avColor:'a3',
    weeks:[
      { wk:1, rate:82, quality:88, tasks:5 },
      { wk:2, rate:86, quality:90, tasks:6 },
      { wk:3, rate:91, quality:93, tasks:7 }
    ],
    competency:88, risk:'low', trend:8.3, fit:91, status:'Excellent report review quality', taskStatus:'Completed' },

  { id:'I003', name:'Sun Yue',   dept:'Product', mentor:'Ma (Mentor)', avatar:'Su', avColor:'a2',
    weeks:[
      { wk:1, rate:72, quality:75, tasks:4 },
      { wk:2, rate:74, quality:78, tasks:4 },
      { wk:3, rate:79, quality:82, tasks:5 }
    ],
    competency:76, risk:'low', trend:4.1, fit:78, status:'Steadily improving', taskStatus:'In Progress' },

  { id:'I004', name:'Zhou Ming',   dept:'Product', mentor:'Li (Mentor)', avatar:'Zh', avColor:'a4',
    weeks:[
      { wk:1, rate:65, quality:68, tasks:3 },
      { wk:2, rate:68, quality:70, tasks:4 },
      { wk:3, rate:63, quality:65, tasks:3 }
    ],
    competency:67, risk:'med', trend:-0.5, fit:66, status:'Requirements doc quality inconsistent', taskStatus:'In Progress' },

  { id:'I005', name:'Wu Tong',   dept:'Product', mentor:'Li (Mentor)', avatar:'Wu', avColor:'a1',
    weeks:[
      { wk:1, rate:88, quality:91, tasks:6 },
      { wk:2, rate:92, quality:94, tasks:7 },
      { wk:3, rate:95, quality:96, tasks:8 }
    ],
    competency:92, risk:'low', trend:6.8, fit:94, status:'Outstanding — retention recommended', taskStatus:'Completed' },

  { id:'I006', name:'Zheng Lei',   dept:'Product', mentor:'Li (Mentor)', avatar:'Zh', avColor:'a3',
    weeks:[
      { wk:1, rate:45, quality:50, tasks:2 },
      { wk:2, rate:48, quality:52, tasks:2 },
      { wk:3, rate:55, quality:58, tasks:3 }
    ],
    competency:51, risk:'high', trend:6.2, fit:53, status:'Clear progress but fundamentals weak', taskStatus:'In Progress' },

  { id:'I007', name:'Feng Yuan',   dept:'Product', mentor:'Ma (Mentor)', avatar:'Fe', avColor:'a2',
    weeks:[
      { wk:1, rate:70, quality:72, tasks:4 },
      { wk:2, rate:73, quality:75, tasks:4 },
      { wk:3, rate:76, quality:79, tasks:5 }
    ],
    competency:74, risk:'low', trend:3.5, fit:76, status:'Stable growth', taskStatus:'In Progress' },

  // ---- R&D Dept (8) ----
  { id:'I008', name:'Li Ming',   dept:'R&D', mentor:'Wang (Mentor)', avatar:'Li', avColor:'a2',
    weeks:[
      { wk:1, rate:80, quality:85, tasks:5 },
      { wk:2, rate:78, quality:82, tasks:4 },
      { wk:3, rate:82, quality:86, tasks:5 }
    ],
    competency:82, risk:'low', trend:5.1, fit:86, status:'Arch doc 1 day late, overall solid', taskStatus:'In Progress' },

  { id:'I009', name:'Liu Yang',   dept:'R&D', mentor:'Wang (Mentor)', avatar:'Li', avColor:'a1',
    weeks:[
      { wk:1, rate:55, quality:58, tasks:3 },
      { wk:2, rate:52, quality:54, tasks:2 },
      { wk:3, rate:48, quality:46, tasks:2 }
    ],
    competency:51, risk:'high', trend:-4.8, fit:49, status:'Code quality declining', taskStatus:'Unassigned' },

  { id:'I010', name:'Chen Mo',   dept:'R&D', mentor:'Wang (Mentor)', avatar:'Ch', avColor:'a3',
    weeks:[
      { wk:1, rate:90, quality:93, tasks:7 },
      { wk:2, rate:93, quality:95, tasks:8 },
      { wk:3, rate:96, quality:97, tasks:9 }
    ],
    competency:94, risk:'low', trend:7.5, fit:96, status:'Strong tech skills, takes initiative', taskStatus:'Completed' },

  { id:'I011', name:'Yang Guang',   dept:'R&D', mentor:'Zhang (Mentor)', avatar:'Ya', avColor:'a4',
    weeks:[
      { wk:1, rate:68, quality:70, tasks:4 },
      { wk:2, rate:71, quality:73, tasks:4 },
      { wk:3, rate:75, quality:78, tasks:5 }
    ],
    competency:73, risk:'low', trend:4.2, fit:75, status:'Making steady progress', taskStatus:'In Progress' },

  { id:'I012', name:'Huang Si',   dept:'R&D', mentor:'Zhang (Mentor)', avatar:'Hu', avColor:'a2',
    weeks:[
      { wk:1, rate:60, quality:63, tasks:3 },
      { wk:2, rate:58, quality:60, tasks:3 },
      { wk:3, rate:62, quality:65, tasks:3 }
    ],
    competency:64, risk:'med', trend:1.8, fit:63, status:'Needs stronger coding standards', taskStatus:'In Progress' },

  { id:'I013', name:'Xu Da',   dept:'R&D', mentor:'Wang (Mentor)', avatar:'Xu', avColor:'a1',
    weeks:[
      { wk:1, rate:75, quality:78, tasks:5 },
      { wk:2, rate:80, quality:83, tasks:5 },
      { wk:3, rate:85, quality:88, tasks:6 }
    ],
    competency:83, risk:'low', trend:7.0, fit:85, status:'Growing fast', taskStatus:'Completed' },

  { id:'I014', name:'He Chang',   dept:'R&D', mentor:'Zhang (Mentor)', avatar:'He', avColor:'a3',
    weeks:[
      { wk:1, rate:40, quality:45, tasks:2 },
      { wk:2, rate:42, quality:44, tasks:2 },
      { wk:3, rate:38, quality:40, tasks:1 }
    ],
    competency:42, risk:'high', trend:-1.2, fit:38, status:'Needs focused coaching', taskStatus:'Unassigned' },

  { id:'I015', name:'Lin Jie',   dept:'R&D', mentor:'Wang (Mentor)', avatar:'Li', avColor:'a4',
    weeks:[
      { wk:1, rate:78, quality:80, tasks:5 },
      { wk:2, rate:82, quality:84, tasks:6 },
      { wk:3, rate:84, quality:87, tasks:6 }
    ],
    competency:85, risk:'low', trend:5.6, fit:83, status:'Consistent performance', taskStatus:'In Progress' },

  // ---- Sales Dept (5) ----
  { id:'I016', name:'Wang Yang',   dept:'Sales', mentor:'Zhao (Mentor)', avatar:'Wang', avColor:'a3',
    weeks:[
      { wk:1, rate:72, quality:74, tasks:4 },
      { wk:2, rate:70, quality:72, tasks:4 },
      { wk:3, rate:74, quality:76, tasks:4 }
    ],
    competency:74, risk:'med', trend:0.5, fit:72, status:'Mid-term interview pending approval', taskStatus:'In Progress' },

  { id:'I017', name:'Lyu Feng',   dept:'Sales', mentor:'Zhao (Mentor)', avatar:'Ly', avColor:'a1',
    weeks:[
      { wk:1, rate:85, quality:88, tasks:6 },
      { wk:2, rate:90, quality:92, tasks:7 },
      { wk:3, rate:93, quality:95, tasks:8 }
    ],
    competency:91, risk:'low', trend:9.2, fit:93, status:'Top sales candidate', taskStatus:'Completed' },

  { id:'I018', name:'Shi Lan',   dept:'Sales', mentor:'Chen (Mentor)', avatar:'Sh', avColor:'a2',
    weeks:[
      { wk:1, rate:50, quality:55, tasks:3 },
      { wk:2, rate:55, quality:58, tasks:3 },
      { wk:3, rate:60, quality:63, tasks:4 }
    ],
    competency:58, risk:'med', trend:6.5, fit:60, status:'Improving, needs stronger pitch skills', taskStatus:'In Progress' },

  { id:'I019', name:'Han Bing',   dept:'Sales', mentor:'Zhao (Mentor)', avatar:'Ha', avColor:'a4',
    weeks:[
      { wk:1, rate:78, quality:80, tasks:5 },
      { wk:2, rate:76, quality:78, tasks:5 },
      { wk:3, rate:80, quality:82, tasks:5 }
    ],
    competency:79, risk:'low', trend:2.0, fit:80, status:'High customer satisfaction', taskStatus:'In Progress' },

  { id:'I020', name:'Cao Yu',   dept:'Sales', mentor:'Chen (Mentor)', avatar:'Ca', avColor:'a1',
    weeks:[
      { wk:1, rate:35, quality:40, tasks:2 },
      { wk:2, rate:32, quality:35, tasks:1 },
      { wk:3, rate:30, quality:32, tasks:1 }
    ],
    competency:33, risk:'high', trend:-3.8, fit:34, status:'Falling behind — intervention needed', taskStatus:'Unassigned' }
],

// ===== Task Data =====
tasks: {
  core: [
    { id:'T001', name:'User Requirements Analysis',    assignee:'I001', start:'03/12/2021', end:'5/12/2021', status:'Unassigned', type:'Core Task' },
    { id:'T002', name:'Low-Fidelity Prototyping',  assignee:'I009', start:'03/12/2021', end:'5/12/2021', status:'Unassigned', type:'Core Task' },
    { id:'T003', name:'Competitive Feature Matrix',    assignee:'I008', start:'05/20/2021', end:'06/02/2021', status:'Completed', type:'Core Task' }
  ],
  daily: [
    { id:'T004', name:'Requirements Consolidation',    assignee:'I004', start:'03/12/2021', end:'5/12/2021', status:'In Progress', type:'Daily Task' },
    { id:'T005', name:'User Research Consolidation',    assignee:'I012', start:'03/12/2021', end:'5/12/2021', status:'In Progress', type:'Daily Task' }
  ],
  study: [
    { id:'T006', name:'Market Research',        assignee:'I003', start:'01/12/2021', end:'3/12/2021', status:'Completed', type:'Learning Task' }
  ]
},

// ===== Department Summary =====
deptSummary: {
  'Product': { interns:7, avgRate:74, avgQuality:76, highRisk:2, lowRisk:4, medRisk:1 },
  'R&D': { interns:8, avgRate:73, avgQuality:76, highRisk:2, lowRisk:5, medRisk:1 },
  'Sales': { interns:5, avgRate:69, avgQuality:72, highRisk:1, lowRisk:2, medRisk:2 }
},

// ===== Global Stats =====
stats: {
  totalInterns: 20,
  totalMentors: 6,
  avgCompetency: 72,
  avgCompletionRate: 71,
  avgQuality: 74,
  highRiskCount: 5,
  lowRiskCount: 11,
  medRiskCount: 4,
  overallHealth: 70,
  teachingQuality: 70,
  teamCompetency: 70,
  taskProgress: 70,
  pendingTasks: 12
},

// ===== Utility Functions =====
getIntern: function(id){ return this.interns.find(i=>i.id===id); },
getMentor: function(id){ return this.mentors.find(m=>m.id===id); },
getDeptInterns: function(dept){ return this.interns.filter(i=>i.dept===dept); },
getMentorInterns: function(mentorName){ return this.interns.filter(i=>i.mentor===mentorName); },
getHighRisk: function(){ return this.interns.filter(i=>i.risk==='high'); },
getLatestWeek: function(intern){ return intern.weeks[intern.weeks.length-1]; },

	// ===== Intern Detail Data =====
	// ===== Intern Detail Data =====
	// ===== Intern Detail Data =====
	internDetails: {
		"I001": {
			entryDate: "2026-05-20", stage: "Growth Phase", stageWeek: 6, tags: ["High Potential", "Day 38", "52 days to retention review"],
			weeklyReports: [
				{ wk:1, date:"2026-05-26", title:"Business Understanding & Tool Learning", score:75,
					internContent: "Key work this week:\n1. Became familiar with the product admin system\n2. Participated in product requirements review meetings\n3. Learned Axure prototyping tool basics\n4. Read The Elements of User Experience chapters\n\nChallenges:\n- Need to improve technical feasibility assessment\n- User scenario breakdown needs more detail\n\nPlan for next week:\n- Follow up on requirements analysis exercises\n- Complete competitive feature matrix draft",
					mentorComment: "Overall: High learning motivation, quick with tools, adapted to team rhythm quickly.\nMethods & Process: Prototyping tool proficiency exceeded expectations, but requirements understanding and scenario breakdown methodology need more structure — recommend 15 min scenario mapping before starting.\nNext Phase Focus: Schedule requirements analysis exercises to build user-perspective definition skills." },
				{ wk:2, date:"2026-06-02", title:"Requirements Analysis Practice", score:72,
					internContent: "Key work this week:\n1. Completed requirements analysis exercise problems\n2. Organized user stories for core user scenarios\n3. Conducted user interviews\n4. Learned SQL data analysis fundamentals\n\nWhat I learned:\n- Developed more systematic understanding of user needs discovery\n- Discovered previously overlooked pain points in user interviews\n\nAreas to improve:\n- Data analysis dimension still needs strengthening\n\nPlan for next week:\n- Completed competitive analysis assignment\n- Continue SQL learning",
					mentorComment: "Overall: User scenario breakdown showing early systematic structure; user interview performance was excellent.\nKnowledge & Skills: User research methods well grasped, but Data Analysis dimension was weak (score 61),  SQL fundamentals need reinforcement.\nNext Phase Focus: Schedule data-driven decision training, practice data interpretation with competitive analysis tasks." },
				{ wk:3, date:"2026-06-09", title:"Competitive Analysis & Data-Driven", score:68,
					internContent: "Key work this week:\n1. Completed competitive analysis assignment, produced 3 improvement opportunities\n2. Studied Data Analysis course (50% complete)\n3. Participated in product growth team weekly and presented\n4. Assisted mentor with Q2 product roadmap\n\nReflection:\n- Competitive analysis missed business model dimension\n- Data-driven decision training needs reinforcement\n\nKnowledge applied:\n- Applied GROUP BY and JOIN from SQL course to user behavior analysis, identified a churn cause\n\nPlan for next week:\n- Complete Data Analysis course\n- Start low-fidelityPrototyping",
					mentorComment: "Overall: Competitive analysis quality significantly improved, from feature comparison to structured decomposition.\nAttitude & Habits: Proactively participated in team weekly and presented, demonstrating strong team integration.\nImprovement Suggestions: Data Analysis remains a gap but progress is accelerating; recommend 30 min daily data exercises.\nNext Phase Focus: Complete Data Analysis course then start low-fidelity prototyping." },
				{ wk:4, date:"2026-06-16", title:"Prototyping & User Testing", score:70,
					internContent: "Key work this week:\n1. Completed low-fidelity prototyping draft (3 core pages)\n2. Conducted usability testing with 2 users\n3. Iterated prototype based on test feedback\n4. Completed weekly report reflection summary\n\nTest findings:\n- Navigation structure needs simplification\n- Search entry point not prominent enough\n\nWhat I learned:\n- Mastered the full closed loop from low-fidelity prototype to user testing\n- Learned to extract actionable design improvements from user feedback\n\nKnowledge applied:\n- Applied user interview techniques and competitive analysis framework to testing; test script received mentor praise\n\nPlan for next week:\n- Complete final prototype\n- Prepare mid-term interview materials",
					mentorComment: "Overall: Prototyping was outstanding, quality far above average for this stage. Starting from low-fidelity was highly professional.\nKnowledge & Skills: Proficient with prototyping tools, logical IA and interaction flows, user testing was standard-compliant.\nMethods & Process: The design-test-iterate closed loop was thoroughly executed, demonstrating excellent Product Thinking.\nNext Phase Focus: Complete final prototype and prepare mid-term interview materials; can start exploring high-fidelity visual design." }
			],
			interviews: [
				{ date:"2026-05-27", type:"Onboarding Interview", summary:"Confirmed internship goals: product thinking development + requirements analysis skill improvement. Reviewed past project experience (2nd prize in campus product competition). Established 90-day development path.",
					keyPoints: ["Clear understanding of the PM role", "Wants to strengthen data analysis skills", "Interested in B2B products"], nextSteps:"Schedule requirements analysis exercises; weekly 1:1 in 2 weeks" },
				{ date:"2026-06-10", type:"Weekly 1:1", summary:"Reviewed first 3 weeks: tool learning on track, requirements analysis showing clear progress, data analysis still a gap. Discussed mid-term interview preparation.",
					keyPoints: ["Data analysis dimension is low — needs attention", "Prototyping can be scheduled earlier", "Recommended to join cross-team communication practice"], nextSteps:"Schedule data-driven decision training; mid-term interview in 2 weeks" }
			],
			assessments: [
				{ week:1, self:{requirementsAnalysis:60, userResearch:55, Prototyping:50, dataAnalysis:45, communication:65}, mentor:{requirementsAnalysis:65, userResearch:58, Prototyping:52, dataAnalysis:48, communication:70} },
				{ week:2, self:{requirementsAnalysis:65, userResearch:60, Prototyping:55, dataAnalysis:48, communication:68}, mentor:{requirementsAnalysis:70, userResearch:63, Prototyping:58, dataAnalysis:50, communication:72} },
				{ week:3, self:{requirementsAnalysis:72, userResearch:68, Prototyping:62, dataAnalysis:52, communication:72}, mentor:{requirementsAnalysis:75, userResearch:70, Prototyping:65, dataAnalysis:55, communication:74} },
				{ week:4, self:{requirementsAnalysis:78, userResearch:74, Prototyping:70, dataAnalysis:58, communication:76}, mentor:{requirementsAnalysis:80, userResearch:76, Prototyping:72, dataAnalysis:61, communication:78} }
			],
			keyBehaviors: [
				{ date:"2026-06-02", action:"Initiated Cross-Team Communication", detail:"Proactively contacted the R&D team to discuss requirement feasibility, identified 2 technical risk points early", impact:"Shortened requirements confirmation cycle by 2 days" },
				{ date:"2026-06-08", action:"Led User Interview", detail:"Independently conducted a user interview, from outline preparation to notes — fully autonomous", impact:"Obtained critical user feedback" },
				{ date:"2026-06-15", action:"Knowledge Sharing", detail:"Shared competitive analysis insights at team weekly, produced methodology documentation", impact:"Adopted by team as reference material" }
			],
			behaviorArchive: {
				questions: [
					{ date:"2026-06-05", to:"Ma (Mentor)", question:"How to balance user needs with technical feasibility?", response:"Recommend conducting competitive research first to understand industry approaches, then evaluate jointly with R&D." },
					{ date:"2026-06-12", to:"HR", question:"What materials are needed for the mid-term interview?", response:"Need to prepare: 1) Internship summary report 2) Representative work samples 3) Self-assessment form." }
				],
				learning: [
					{ course:"Product Prototyping Intro", duration:"3.5h", applied:true, applyDetail:"Applied in low-fidelity prototyping assignment" },
					{ course:"SQL Data Analysis Fundamentals", duration:"4h", applied:false, applyDetail:"" },
					{ course:"User Interview Techniques", duration:"2h", applied:true, applyDetail:"Applied open-ended questioning techniques in user interviews" }
				],
				collaboration: [
					{ from:"Li (Mentor)", role:"R&D Mentor", feedback:"Zhang Yao communicates clearly and efficiently in cross-team collaboration", type:"Kudos" },
					{ from:"Wang Yang", role:"Fellow Intern", feedback:"Proactively shared learning resources during prototyping exercise", type:"Thanks" }
				]
			}
		}
	},

	// ===== V3 Mock Data =====
mentorHealth:{M001:{healthScore:88,reviewRate:92,behaviorScore:85,alertInterns:1,weeklyHealth:[85,87,89,88],avgInternCompetency:71},M002:{healthScore:76,reviewRate:82,behaviorScore:72,alertInterns:2,weeklyHealth:[78,76,74,76],avgInternCompetency:70},M003:{healthScore:92,reviewRate:96,behaviorScore:90,alertInterns:0,weeklyHealth:[90,91,93,92],avgInternCompetency:79},M004:{healthScore:80,reviewRate:88,behaviorScore:78,alertInterns:1,weeklyHealth:[82,81,79,80],avgInternCompetency:61},M005:{healthScore:72,reviewRate:75,behaviorScore:68,alertInterns:1,weeklyHealth:[75,73,74,72],avgInternCompetency:81},M006:{healthScore:56,reviewRate:62,behaviorScore:58,alertInterns:2,weeklyHealth:[68,64,60,56],avgInternCompetency:46}},
plans:[{id:'P001',name:'Mastering Technical Solution Design',category:'Skill Building',usageCount:89,successCases:12,status:'active',submitter:'Ma (Mentor)',reviewStatus:'approved',rating:4.6},{id:'P002',name:'Requirements Analysis Skill Building',category:'Skill Building',usageCount:67,successCases:9,status:'active',submitter:'Li (Mentor)',reviewStatus:'approved',rating:4.3},{id:'P003',name:'90-Day New Hire Onboarding Plan',category:'Stage Essential',usageCount:156,successCases:28,status:'active',submitter:'Wang (Mentor)',reviewStatus:'approved',rating:4.8},{id:'P004',name:'Growth Phase Comprehensive Plan',category:'Stage Essential',usageCount:94,successCases:15,status:'active',submitter:'Zhang (Mentor)',reviewStatus:'approved',rating:4.4},{id:'P005',name:'Design Review Simulation Plan',category:'Practical Exercise',usageCount:73,successCases:11,status:'active',submitter:'Zhao (Mentor)',reviewStatus:'approved',rating:4.2},{id:'P006',name:'Sales Pitch Scenario Training',category:'Practical Exercise',usageCount:45,successCases:6,status:'pending',submitter:'Chen (Mentor)',reviewStatus:'pending',rating:null},{id:'P007',name:'Intro to Data Analysis Coaching Plan',category:'Skill Building',usageCount:0,successCases:0,status:'draft',submitter:'Chen (Mentor)',reviewStatus:'draft',rating:null},{id:'P008',name:'Project Management Basics Plan',category:'Stage Essential',usageCount:0,successCases:0,status:'draft',submitter:'Li (Mentor)',reviewStatus:'draft',rating:null},{id:'P009',name:'API Integration Hands-On Plan',category:'Practical Exercise',usageCount:18,successCases:12,status:'pending',submitter:'Zhang (Mentor)',reviewStatus:'pending',rating:null},{id:'P010',name:'Customer Objection Handling Plan',category:'Practical Exercise',usageCount:8,successCases:3,status:'active',submitter:'Wang (Mentor)',reviewStatus:'approved',rating:3.9}],
courses:[{id:'C001',name:'Intro to Product Prototyping',category:'Product Thinking',instructor:'Ma (Mentor)',rating:4.9,planRefs:15,status:'published'},{id:'C002',name:'Core Product Thinking Methods',category:'Product Thinking',instructor:'Ma (Mentor)',rating:4.8,planRefs:8,status:'published'},{id:'C003',name:'Frontend Development Bootcamp',category:'Tech Development',instructor:'Wang (Mentor)',rating:4.9,planRefs:12,status:'published'},{id:'C004',name:'Cross-Platform App Development',category:'Tech Development',instructor:'Zhang (Mentor)',rating:4.7,planRefs:6,status:'published'},{id:'C005',name:'SQL Data Analysis Fundamentals',category:'Data Analysis',instructor:'Li (Mentor)',rating:4.5,planRefs:10,status:'published'},{id:'C006',name:'Effective Workplace Communication',category:'Workplace Communication',instructor:'Zhao (Mentor)',rating:4.6,planRefs:5,status:'published'},{id:'C007',name:'Design Thinking Innovation Practice',category:'Innovation Practice',instructor:'Chen (Mentor)',rating:4.4,planRefs:4,status:'published'}],
contentReviewQueue:[{id:'CR001',title:'Effective Requirements Communication',author:'Li (Engineer)',submittedDate:'6/12',type:'Micro-course',status:'pending'},{id:'CR002',title:'Code Review Best Practices',author:'Zhang Wei',submittedDate:'6/10',type:'Document',status:'approved'},{id:'CR003',title:'React Hooks Best Practices',author:'External Share',submittedDate:'6/8',type:'Micro-course',status:'pending'},{id:'CR004',title:'Python Data Analysis Intro',author:'Intern Contribution',submittedDate:'6/7',type:'Document',status:'pending'},{id:'CR005',title:'Team Collaboration & Communication',author:'External Hire Share',submittedDate:'6/5',type:'Micro-course',status:'approved'},{id:'CR006',title:'Agile Development Process Guide',author:'Wang Min',submittedDate:'6/3',type:'Document',status:'rejected'},{id:'CR007',title:'UI Design Standards Intro',author:'Chen Si',submittedDate:'6/1',type:'Micro-course',status:'approved'}],
	// Content Ecosystem Data
	contentEcosystem:{totalContent:156,monthlyNew:12,avgRating:4.3,pendingReview:3,lowRatedCount:3,lowRatedItems:['SQL Data Analysis Fundamentals','Customer Objection Handling Plan','Design Thinking Innovation Practice'],deptCoverage:{'Product':72,'R&D':68,'Sales':45,'All Roles':81},weeklyTrend:[35,42,58,47,63,71,68,82],topContent:[{name:'Intro to Product Prototyping',learners:2340,appliedRate:68},{name:'Frontend Development Bootcamp',learners:1890,appliedRate:62},{name:'Data Analysis Thinking & Tools Handbook',learners:2100,appliedRate:55},{name:'Technical Proposal Design Template',learners:1890,appliedRate:71},{name:'How to Give Effective Feedback',learners:1560,appliedRate:74},{name:'Effective Requirements Communication',learners:1420,appliedRate:58},{name:'PRD Writing Standards',learners:2340,appliedRate:65},{name:'User Research Report Writing Guide',learners:1560,appliedRate:52},{name:'Core Product Thinking Methods',learners:1280,appliedRate:67},{name:'Cross-Platform App Development',learners:1150,appliedRate:49}],conversionNote:'Based on content marked "Applied" in reports;  overall learning-to-application conversion rate is 62%'},
teamCapabilities:{dimensions:['Professional Skills','Tech Awareness','User Insight','Communication','Solution Design','Project Mgmt'],companyAvg:[3.5,3.6,3.4,3.5,3.3,3.5],departments:{'R&D':{scores:[4.1,4.3,2.9,2.8,3.6,3.2],internCount:8,color:'var(--info)'},'Product':{scores:[3.4,2.7,4.1,3.3,3.2,3.0],internCount:7,color:'var(--warning)'},'Sales':{scores:[3.0,2.5,3.2,4.0,2.5,2.8],internCount:5,color:'var(--purple)'}},gapThresholds:{warn:0.5,danger:0.8}},
mentorExpertise:[{id:'M003',name:'Wang (Mentor)',dept:'R&D',title:'Tech Lead',expertise:['Backend Architecture','Technical Design Review','Code Quality'],courses:3,plans:2,bio:'10 years backend development experience'},{id:'M004',name:'Zhang (Mentor)',dept:'R&D',title:'Senior Architect',expertise:['Frontend Technology','Cross-Platform Design'],courses:1,docs:5,plans:1,bio:'Full-stack engineer, passionate about technical documentation'},{id:'M001',name:'Ma (Mentor)',dept:'Product',title:'Senior Product Manager',expertise:['User Research','Requirements Analysis','Prototyping'],courses:2,docs:3,plans:2,bio:'12 years product experience, skilled in user insights and data analysis'},{id:'M005',name:'Zhao (Mentor)',dept:'Sales',title:'Sales VP',expertise:['Client Communication','Business Negotiation'],courses:1,docs:1,plans:1,bio:'15 years sales management experience'}],
coachingProjects:[{id:'CP001',name:'Boost Product Team Tech Awareness',initiator:'HR Yixuan',initiatedDate:'6/15',mentorName:'Wang (Mentor)',mentorDept:'R&D Dept',targetDept:'Product Dept',targetCount:7,capability:'Tech Awareness',period:'4 weeks',status:'active',participation:100,satisfaction:4.5,contents:[{type:'Workshop',title:'Backend Architecture & Product Decisions',speaker:'Wang (Mentor)',duration:'45 min'},{type:'Learning Task',title:'Complete course: "How to Make Technical Proposals Understandable for Product"',source:'Learning Community',duration:'25 min'},{type:'Reflection Session',title:'Product interns discuss learnings with mentor',trigger:'Week 3 after project launch'}],effect:{before:2.7,after:3.2,gapReduction:0.5,attendance:'7/7',completion:'7/7',feedback:['Finally understand what "distributed transactions" means!','Wang explained things clearly — suggest making this a regular event']}},{id:'CP002',name:'Improve R&D Communication',initiator:'HR Yixuan',initiatedDate:'6/22',mentorName:'Zhao (Mentor)',mentorDept:'Sales Dept',targetDept:'R&D Dept',targetCount:8,capability:'Communication',period:'3 weeks',status:'active',participation:87,satisfaction:4.2,contents:[{type:'Workshop',title:'How Engineers Can Excel at Cross-Team Communication',speaker:'Zhao (Mentor)',duration:'40 min'},{type:'Learning Task',title:'Read doc: "Communication Tips for Requirements Review"',source:'Yang Fan Knowledge Base',duration:'20 min'}],effect:{before:2.8,after:3.1,gapReduction:0.3,attendance:'7/8',completion:'7/8',feedback:['Learned how to explain technical proposals to non-technical people','Hope to have regular cross-team sessions like this']}}],
dashboardAlerts:[{id:'A001',type:'urgent',text:'Zhang Yao: business understanding weak for 3 weeks — intervention advised',time:'2h ago',relatedId:'I001'},{id:'A002',type:'urgent',text:'Chen (Mentor) health score dropped to 56, below warning threshold',time:'4h ago',relatedId:'M006'},{id:'A003',type:'warn',text:'Cao Yu: competency at only 33%, needs focused coaching',time:'1 day ago',relatedId:'I020'},{id:'A004',type:'warn',text:'He Chang: no new tasks assigned for 2 weeks',time:'1 day ago',relatedId:'I014'},{id:'A005',type:'warn',text:'Zhao (Mentor): 2 weeks without reviewing intern reports',time:'2 days ago',relatedId:'M005'},{id:'A006',type:'info',text:'Wang Yang: mid-term interview pending HR approval',time:'2 days ago',relatedId:'I016'},{id:'A007',type:'info',text:'Zhao Lin: negative sentiment for 3 weeks — needs attention',time:'3 days ago',relatedId:'I013'}],
dashboardReviewQueue:[{id:'R001',type:'plan',text:'Sales Pitch Scenario Training pending review',count:2,urgent:false},{id:'R002',type:'plan',text:'API Integration Hands-On Plan pending review',count:2,urgent:false},{id:'R003',type:'content',text:'Newly submitted courses/docs pending review',count:3,urgent:false},{id:'R004',type:'mentor',text:'2 mentors have not completed report reviews for 48h+',count:2,urgent:true}],
getInternDetail: function(id){ return this.internDetails[id] || null; }
};
