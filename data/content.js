/* Edit this data file to update the site. Do not place private credentials here. */
window.PORTFOLIO_DATA = {
  "about": [
    "I’m a Software Engineer and computer science master’s student at Taiwan Tech. My work spans backend APIs, mobile apps, cloud deployments, and the little details that make software reliable.",
    "At Mackay, I lead the engineering work behind MomWeight, a pregnancy health management platform developed with healthcare and research teams. I’ve also built an industry team-allocation platform in Australia and worked on native iOS and Android apps.",
    "What I enjoy most is understanding a real problem, finding a practical approach, and seeing a feature work end to end — from its data model to the interface people use."
  ],
  "featuredProjects": [
    {
      "slug": "momweight",
      "windowTitle": "momweight.app",
      "name": "MomWeight",
      "subtitle": "Pregnancy Health Management Platform",
      "role": "Software Engineer",
      "category": "Healthcare · Full-Stack Platform",
      "detailPath": "./projects/momweight.html",
      "home": {
        "overview": "An NSTC-funded pregnancy health platform developed with Mackay Medical University and Mackay Memorial Hospital. The live hospital pilot brings together a React Native mobile app, professional and admin portals, a public website, and FastAPI services for health tracking, consultations, appointments, and research operations.",
        "contributions": [
          "Built the mobile app, web portals, and FastAPI backend services.",
          "Implemented RBAC, transactional workflows, concurrency control, and idempotent synchronization.",
          "Created automated test coverage and CI/CD workflows for cloud deployment."
        ],
        "stack": ["React Native", "React", "FastAPI", "PostgreSQL", "GCP Cloud Run"]
      },
      "detail": {
        "overview": [
          "MomWeight is an NSTC-funded pregnancy health management platform developed with Mackay Medical University and Mackay Memorial Hospital. It is currently deployed in a live hospital pilot supporting healthcare, research, and operational workflows.",
          "The system includes a React Native mobile application, professional and admin web portals, a public landing page, and FastAPI backend services. Together, these components support pregnancy health tracking, professional consultations, appointment management, and research operations.",
          "As the sole Software Engineer, I own the development lifecycle from requirements analysis and architecture through implementation, automated testing, and cloud deployment. I also work directly with healthcare professionals and researchers to translate clinical needs into practical software features."
        ],
        "contributions": [
        {
          "title": "Full-Stack Development",
          "detail": "Designed and developed the mobile application, web portals, and backend services, integrating user-facing features with healthcare and administrative workflows."
        },
        {
          "title": "Backend Engineering",
          "detail": "Built REST APIs with FastAPI, implementing role-based access control, appointment and payment workflows, and points transaction tracking."
        },
        {
          "title": "Data Integrity",
          "detail": "Implemented database transactions, concurrency control, and idempotent health data synchronization with external ID deduplication to prevent inconsistent or duplicate records."
        },
        {
          "title": "Testing & Reliability",
          "detail": "Developed 700+ automated backend tests using pytest, alongside Vitest component tests and Playwright end-to-end tests."
        },
        {
          "title": "Cloud & DevOps",
          "detail": "Automated deployments through GitHub Actions to Vercel and Google Cloud Run, using Docker and Google Cloud Scheduler for scheduled notifications."
        },
        {
          "title": "Cross-Functional Collaboration",
          "detail": "Worked closely with healthcare professionals and researchers to understand clinical requirements and translate them into practical software features."
        }
        ],
        "stack": [
        {
          "category": "Languages & Backend",
          "items": ["Python", "FastAPI", "SQLAlchemy", "REST APIs"]
        },
        {
          "category": "Frontend & Mobile",
          "items": ["React", "React Native"]
        },
        {
          "category": "Database",
          "items": ["PostgreSQL"]
        },
        {
          "category": "Cloud & DevOps",
          "items": ["GCP Cloud Run", "Cloud Scheduler", "Vercel", "Docker", "GitHub Actions"]
        },
        {
          "category": "Testing",
          "items": ["pytest", "Vitest", "Playwright"]
        }
        ],
        "publicLinks": [
          {"label": "Visit Website", "url": "https://momweight.com/"}
        ]
      }
    },
    {
      "slug": "cheap-guide",
      "windowTitle": "cheapguide.app",
      "name": "Cheap.Guide",
      "subtitle": "Melbourne Affordable Eats & Community Ratings App",
      "role": "Mobile App Developer",
      "category": "Food Discovery · Native Mobile Development",
      "detailPath": "./projects/cheap-guide.html",
      "home": {
        "overview": "A Melbourne-focused mobile product for discovering affordable restaurants and sharing community dining experiences. I helped lead a three-person mobile team through a Flutter-to-native transition, building Android and iOS features and connecting both native frontends to existing Java Spring Boot REST APIs.",
        "contributions": [
          "Coordinated a three-person mobile development team across Android and iOS.",
          "Migrated the application from Flutter to native Kotlin and Swift clients.",
          "Integrated the Android and iOS frontends with existing Spring Boot APIs for authentication, sessions, images, and restaurant workflows."
        ],
        "stack": ["Kotlin", "Swift", "Spring Boot API Integration", "Flutter"]
      },
      "detail": {
        "overview": [
          "Cheap.Guide is a Melbourne-focused mobile product for discovering affordable restaurants and sharing community dining experiences through ratings, photos, and location-based features.",
          "The product moved from a Flutter and Dart implementation to separate native Android and iOS applications. The Kotlin and Swift frontends consume existing Java Spring Boot REST APIs for authentication, sessions, restaurant data, images, and related error states.",
          "As a Mobile App Developer, I contributed to both native applications while leading a three-person mobile team. I coordinated task allocation and technical decisions across platforms so core behavior remained consistent throughout the migration."
        ],
        "contributions": [
        {
          "title": "Team Leadership",
          "detail": "Led a three-person mobile development team, coordinating task allocation, technical decisions, and development across Android and iOS."
        },
        {
          "title": "Native Mobile Development",
          "detail": "Rebuilt the application from Flutter and Dart into native Android (Kotlin) and iOS (Swift) applications to improve platform-specific maintainability and flexibility."
        },
        {
          "title": "API Integration",
          "detail": "Connected the native Android and iOS frontends to existing Java Spring Boot REST APIs, handling authentication, session management, API responses, image processing, and error states on the client side."
        },
        {
          "title": "Core Features",
          "detail": "Developed restaurant discovery, community ratings, photo sharing, and location-based functionality."
        }
        ],
        "stack": [
        {
          "category": "Android",
          "items": ["Kotlin"]
        },
        {
          "category": "iOS",
          "items": ["Swift"]
        },
        {
          "category": "Previous Framework",
          "items": ["Flutter", "Dart"]
        },
        {
          "category": "Client-Side API Integration",
          "items": ["Java Spring Boot", "REST APIs"]
        }
        ]
      }
    },
    {
      "slug": "grouplet",
      "windowTitle": "grouplet.web",
      "name": "Grouplet",
      "subtitle": "Team Allocation Platform",
      "role": "Full-Stack Developer · Testing Lead",
      "category": "Industry Capstone · Web Development",
      "detailPath": "./projects/grouplet.html",
      "home": {
        "overview": "A QUT industry capstone platform built with an Australian client to support team allocation, role-based workflows, notifications, and dashboards. I contributed across React, Node.js, and Firebase while leading test planning and resolving cross-dashboard data consistency issues over five Agile sprints.",
        "contributions": [
          "Built allocation, notification, and dashboard features across the web stack.",
          "Led testing and designed more than 40 functional test cases.",
          "Used Firebase batched writes and transactions to resolve data consistency issues."
        ],
        "stack": ["React", "Node.js", "Firebase", "Cloud Firestore", "Functional Testing"]
      },
      "detail": {
        "overview": [
          "Grouplet is a web-based team allocation platform developed at Queensland University of Technology with The Mindset Academy. The project was delivered with an Australian industry client across five Agile sprints.",
          "Built with React, Node.js, and Firebase, the platform supports team allocation, role-based workflows, notifications, and dashboards for managing the team formation process.",
          "I contributed across the frontend and backend while serving as Testing Lead. My responsibilities included implementing product workflows, planning functional coverage, investigating cross-role defects, and communicating technical progress and requirements with the client."
        ],
        "contributions": [
        {
          "title": "Full-Stack Development",
          "detail": "Developed frontend and backend features using React, Node.js, and Firebase, including allocation workflows, notifications, and dashboard functionality."
        },
        {
          "title": "Data Consistency",
          "detail": "Diagnosed and resolved cross-dashboard data consistency issues using Firebase batched writes and transactions."
        },
        {
          "title": "Testing Leadership",
          "detail": "Coordinated testing activities, designed 40+ functional test cases, and conducted cross-role walkthroughs to verify business logic, investigate defects, and confirm fixes."
        },
        {
          "title": "Industry Collaboration",
          "detail": "Worked with an Australian industry client across five Agile sprints, communicating technical progress, discussing requirements, and incorporating feedback."
        }
        ],
        "stack": [
        {
          "category": "Frontend",
          "items": ["React", "JavaScript"]
        },
        {
          "category": "Backend",
          "items": ["Node.js", "Firebase"]
        },
        {
          "category": "Database",
          "items": ["Cloud Firestore"]
        },
        {
          "category": "Development Process",
          "items": ["Agile", "Functional Testing"]
        }
        ]
      }
    }
  ],
  "otherProjects": [
    {
      "slug": "moodjournal",
      "windowTitle": "moodjournal.repo",
      "name": "MoodJournal",
      "overview": "A Chinese-language multimodal emotion journal built with React, Vite, and Firebase. It supports text and browser-recorded voice entries, seven-class emotion analysis through a FastAPI service, diary search and recovery workflows, offline synchronization, and visual reviews of emotion patterns over time.",
      "highlights": [
        "Combines text-only and text-plus-speech emotion analysis with confidence results.",
        "Uses Firebase Authentication, Firestore security rules, and protected application routes.",
        "Supports IndexedDB offline queuing, import and export, search, filtering, and emotion visualizations."
      ],
      "stack": ["React", "Vite", "Firebase", "IndexedDB", "FastAPI Integration"],
      "repositoryUrl": "https://github.com/ninni13/MoodJournal"
    },
    {
      "slug": "papermind",
      "windowTitle": "papermind.repo",
      "name": "PaperMind",
      "overview": "A full-stack RAG application for uploading research papers, generating structured overviews, and asking grounded questions. PaperMind indexes PDF text in PostgreSQL with pgvector, retrieves semantically relevant passages, returns page-level citations, and lets users inspect the source text behind each answer.",
      "highlights": [
        "Builds a PDF ingestion and semantic retrieval pipeline with PyMuPDF and OpenAI embeddings.",
        "Generates evidence-grounded answers and structured paper overviews with inspectable citations.",
        "Includes retrieval and generation evaluation scripts plus automated backend tests."
      ],
      "stack": ["FastAPI", "React + TypeScript", "PostgreSQL + pgvector", "OpenAI API", "GCP Cloud Run"],
      "repositoryUrl": "https://github.com/ninni13/PaperMind"
    }
  ],
  "experience": [
    {
      "role": "Software Engineer",
      "organization": "Mackay Medical University × Mackay Memorial Hospital",
      "period": "Dec 2025 — Present",
      "note": "MomWeight · Pregnancy Health Management Platform"
    },
    {
      "role": "Mobile App Developer",
      "organization": "Cheap.Guide",
      "period": "Jul 2025 — Present",
      "note": "Melbourne Affordable Eats & Community Ratings App"
    },
    {
      "role": "Full-Stack Developer · Testing Lead",
      "organization": "QUT × The Mindset Academy",
      "period": "Jul 2024 — Jun 2025",
      "note": "Grouplet · Industry Capstone Project"
    },
    {
      "role": "Technical Teaching Assistant & Instructor",
      "organization": "TibaMe",
      "period": "Apr 2023 — Present",
      "note": "Python & AI technical training"
    }
  ],
  "education": [
    {
      "school": "National Taiwan University of Science and Technology",
      "degree": "M.S. in Computer Science and Information Engineering",
      "location": "Taipei, Taiwan"
    },
    {
      "school": "Queensland University of Technology",
      "degree": "B.S. in Information Technology (Computer Science)",
      "location": "Brisbane, Australia",
      "detail": "Graduated with Distinction · GPA 6.25/7.0"
    }
  ],
  "skills": [
    {
      "category": "Programming Languages",
      "items": [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Kotlin",
        "Swift",
        "Dart"
      ]
    },
    {
      "category": "Backend & APIs",
      "items": [
        "FastAPI",
        "Node.js",
        "REST APIs",
        "OpenAPI / Swagger",
        "Firebase"
      ]
    },
    {
      "category": "Frontend & Mobile",
      "items": [
        "React",
        "React Native",
        "Flutter"
      ]
    },
    {
      "category": "Databases",
      "items": [
        "PostgreSQL",
        "Microsoft SQL Server",
        "Firestore"
      ]
    },
    {
      "category": "Cloud & DevOps",
      "items": [
        "GCP",
        "Cloud Run",
        "Cloud Scheduler",
        "Docker",
        "Git",
        "GitHub Actions",
        "Linux"
      ]
    },
    {
      "category": "Testing",
      "items": [
        "pytest",
        "Vitest",
        "Playwright",
        "API",
        "Integration",
        "Unit",
        "Component",
        "E2E"
      ]
    }
  ],
  "contact": [
    {
      "label": "GitHub",
      "display": "github.com/ninni13",
      "url": "https://github.com/ninni13"
    },
    {
      "label": "LinkedIn",
      "display": "linkedin.com/in/cheng-ni-yang",
      "url": "https://www.linkedin.com/in/cheng-ni-yang"
    }
  ]
};
