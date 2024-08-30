/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

export const apiKey = process.env.NEXT_PUBLIC_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [{ text: "resume generator" }],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "name": "John Doe",\n    "email": "john.doe@email.com",\n    "phone": "555-555-5555",\n    "linkedin": "linkedin.com/in/johndoe",\n    "github": "github.com/johndoe",\n    "summary": "Highly motivated and results-oriented software engineer with 5+ years of experience in developing and deploying high-quality web applications. Proven ability to work independently and as part of a team to deliver projects on time and within budget. Passionate about learning new technologies and contributing to innovative solutions.",\n    "experience": [\n      {\n        "title": "Software Engineer",\n        "company": "Acme Corporation",\n        "years": "2020 - Present",\n        "description": "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with designers and product managers to translate user needs into functional software. Implemented unit tests and automated build processes to ensure code quality. Successfully delivered several projects on time and within budget."\n      },\n      {\n        "title": "Web Developer",\n        "company": "Startup Inc.",\n        "years": "2018 - 2020",\n        "description": "Developed and maintained the company\'s website and web applications using HTML, CSS, JavaScript, and PHP. Implemented responsive design and user interface improvements. Worked closely with the marketing team to ensure website content was up-to-date and engaging."\n      }\n    ],\n    "skills": [\n      "React",\n      "Node.js",\n      "MongoDB",\n      "HTML",\n      "CSS",\n      "JavaScript",\n      "PHP",\n      "Git",\n      "Agile",\n      "Scrum",\n      "AWS",\n      "Azure",\n      "CI/CD",\n      "TDD",\n      "REST API",\n      "SQL",\n      "NoSQL"\n    ],\n    "education": [\n      {\n        "degree": "Master of Science in Computer Science",\n        "university": "Stanford University",\n        "years": "2018"\n      },\n      {\n        "degree": "Bachelor of Science in Computer Science",\n        "university": "University of California, Berkeley",\n        "years": "2016"\n      }\n    ],\n    "awards": [\n      {\n        "name": "Dean\'s List",\n        "year": "2016"\n      },\n      {\n        "name": "President\'s List",\n        "year": "2017"\n      }\n    ],\n    "personal_interests": [\n      "Hiking",\n      "Camping",\n      "Photography",\n      "Coding",\n      "Reading"\n    ]\n  },\n  {\n    "name": "Jane Doe",\n    "email": "jane.doe@email.com",\n    "phone": "555-555-5555",\n    "linkedin": "linkedin.com/in/janedoe",\n    "github": "github.com/janedoe",\n    "summary": "Passionate and experienced data scientist with a proven track record of using data to drive business insights and improve decision-making. Skilled in data analysis, machine learning, and statistical modeling. Strong communication and presentation skills, with a proven ability to effectively convey complex technical concepts to non-technical audiences.",\n    "experience": [\n      {\n        "title": "Data Scientist",\n        "company": "Data Analytics Inc.",\n        "years": "2020 - Present",\n        "description": "Developed and implemented machine learning models to predict customer churn and identify potential revenue opportunities. Performed data analysis and visualization to uncover key insights and inform business strategy. Presented findings to stakeholders and provided recommendations for action."\n      },\n      {\n        "title": "Data Analyst",\n        "company": "Marketing Solutions",\n        "years": "2018 - 2020",\n        "description": "Collected, cleaned, and analyzed data to understand customer behavior and identify trends. Developed dashboards and reports to track key metrics and monitor performance. Presented findings to marketing team and provided recommendations for improving campaign effectiveness."\n      }\n    ],\n    "skills": [\n      "Python",\n      "R",\n      "SQL",\n      "NoSQL",\n      "Machine Learning",\n      "Deep Learning",\n      "Data Mining",\n      "Statistical Modeling",\n      "Data Visualization",\n      "Tableau",\n      "Power BI",\n      "Excel",\n      "AWS",\n      "Azure",\n      "Big Data",\n      "Hadoop",\n      "Spark"\n    ],\n    "education": [\n      {\n        "degree": "Master of Science in Data Science",\n        "university": "Columbia University",\n        "years": "2018"\n      },\n      {\n        "degree": "Bachelor of Science in Statistics",\n        "university": "University of Pennsylvania",\n        "years": "2016"\n      }\n    ],\n    "awards": [\n      {\n        "name": "Dean\'s List",\n        "year": "2016"\n      },\n      {\n        "name": "President\'s List",\n        "year": "2017"\n      }\n    ],\n    "personal_interests": [\n      "Running",\n      "Traveling",\n      "Cooking",\n      "Data Analysis",\n      "Machine Learning"\n    ]\n  }\n]\n\n\n```',
        },
      ],
    },
  ],
});
