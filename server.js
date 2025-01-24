const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const careerInformation = {
  careerObjective: "test",
  extended: {},
};

const positionPreference = [
  {
    id: "1594070449023",
    positionTitle: {
      id: "295dbed9-0330-42af-8650-f9296c6eb195",
      name: "Automotive test driver",
    },
    positionLevel: {
      id: "2",
      name: null,
    },
    hasExperience: true,
    offeredRemunerationPackage: [
      {
        id: "A",
        name: null,
      },
      {
        id: "B",
        name: null,
      },
      {
        id: "C",
        name: null,
      },
      {
        id: "D",
        name: null,
      },
      {
        id: "E",
        name: null,
      },
    ],
    hoursPerWeekRanges: [
      {
        id: "1",
        name: null,
      },
      {
        id: "2",
        name: null,
      },
      {
        id: "3",
        name: null,
      },
      {
        id: "4",
        name: null,
      },
      {
        id: "5",
        name: null,
      },
    ],
    relatedCompetencies: [
      {
        id: "74ad37e3-325b-4ccd-ab2a-04f7696750e8",
        name: "Health and safety measures in transportation",
      },
      {
        id: "2a82241a-216e-44d8-bb50-6b9a0ef82084",
        name: "Drive vehicles",
      },
      {
        id: "328733a7-6d84-420d-a65c-2a8014fadc60",
        name: "Record test data",
      },
    ],
    contractTypes: [
      {
        id: "1",
        name: null,
      },
      {
        id: "2",
        name: null,
      },
      {
        id: "3",
        name: null,
      },
      {
        id: "4",
        name: null,
      },
    ],
    address: {
      line: null,
      locationSubdivisions: {
        DEPARTMENT: null,
        PROVINCE: null,
        DISTRICT: null,
        CITY: {
          id: "MY_JHR_ayer_baloi",
          name: "Ayer Baloi",
        },
        STATE: {
          id: "MY_JHR",
          name: "Johor",
        },
        COUNTRY: null,
        POSTAL_CODE: null,
      },
    },
    industryCodes: [
      {
        id: "49",
        name: null,
      },
      {
        id: "61",
        name: null,
      },
      {
        id: "90",
        name: null,
      },
    ],
    maximumCommuteDistance: {
      id: "2",
      name: null,
    },
    extended: null,
  },
];

const employements = [
  {
    id: "1737731334003",
    positionTitle: null,
    positionLevel: {
      id: "1",
      name: "Non - Executive",
    },
    start: {
      month: 2,
      year: 2024,
    },
    end: null,
    current: true,
    relatedCompetencies: [],
    organization: "dsds",
    industryCodes: [
      {
        id: "49",
        name: "Accommodation",
      },
    ],
    description: "dsds",
    salary: null,
    extended: {
      country: {
        id: "4",
        name: null,
      },
    },
  },
];

const education = [
  {
    id: "1594070449089",
    fieldOfStudy: {
      id: "344",
      name: "Accounting, auditing and taxation",
    },
    educationLevel: {
      id: "5",
      name: null,
    },
    institutionName: "Test",
    start: null,
    end: null,
    country: {
      id: "4",
      name: null,
    },
    major: null,
    grade: null,
    isCurrentEducation: null,
    extended: null,
  },
];

const skills = {
  qualifications: [],
  personalSkills: [
    {
      id: "PSMSO1",
      name: "Microsoft Word",
    },
  ],
  licenses: [
    {
      id: "A",
      name: "Disability (Motorcycle) <450kg",
    },
  ],
  extended: {},
};

const language = [
  {
    id: "1737353133547",
    language: {
      id: "2",
      name: "English",
    },
    otherLanguage: null,
    languageSkills: {
      READING: {
        id: "3",
        name: "Advanced",
      },
      SPEAKING: {
        id: "3",
        name: "Advanced",
      },
      WRITING: {
        id: "3",
        name: "Advanced",
      },
    },
    extended: {},
  },
  {
    id: "1737731278255",
    language: {
      id: "9",
      name: "Others",
    },
    otherLanguage: "Test",
    languageSkills: {
      READING: {
        id: "1",
        name: "Beginner",
      },
      SPEAKING: {
        id: "1",
        name: "Beginner",
      },
      WRITING: {
        id: "1",
        name: "Beginner",
      },
    },
    extended: {},
  },
];

// Route to handle GET request
app.get("/v1/profile/career-information", (req, res) => {
  res.json(careerInformation);
});

app.get("/v1/profile/position-preferences", (req, res) => {
  res.json(positionPreference);
});

app.get("v1/profile/employments", (req, res) => {
  res.json(employements);
});

app.get("v1/profile/educations", (req, res) => {
  res.json(education);
});

app.get("v1/profile/educations", (req, res) => {
  res.json(education);
});

app.get("v1/profile/skills", (req, res) => {
  res.json(skills);
});

app.get("v1/profile/languages", (req, res) => {
  res.json(language);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
