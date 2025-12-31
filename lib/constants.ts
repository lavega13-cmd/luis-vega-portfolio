export const PROOF_METRICS = [
  {
    number: 10,
    suffix: "M+",
    label: "Raised across partnerships and campaigns",
    icon: "DollarSign",
  },
  {
    number: 817,
    suffix: "",
    label: "Civilians rescued from Ukraine conflict zones",
    icon: "Heart",
  },
  {
    number: 4,
    suffix: "M",
    label: "Foundation revenue growth in 6 months",
    icon: "TrendingUp",
  },
  {
    number: 500,
    suffix: "K+",
    label: "Voter contacts via grassroots coalition",
    icon: "Users",
  },
];

export interface StoryImage {
  src: string;
  alt: string;
  caption?: string;
}

export const SELECTED_WORK = [
  {
    title: "Foundation Turnaround",
    timeline: "2021-2023",
    problem: "$347K revenue, stretched team, needed systems to scale",
    what_i_did: [
      "Built 3-person development team and corporate giving strategy",
      "Cultivated foundation relationships and major donor pipeline",
      "Led international humanitarian missions that became signature story",
    ],
    result: {
      type: "measurable",
      metrics: [
        { number: "4M", label: "Revenue 6mo growth" },
        { number: "29", label: "Staff" },
        { number: "5K+", label: "Youth Reached" },
      ],
    },
    images: [
      {
        src: "/images/242E1CA8-9E22-45EF-AAF1-7137EC02EFCF..png",
        alt: "Foundation event presentation",
      }
    ],
  },
  {
    title: "Ukraine Extractions",
    timeline: "2022-2024",
    problem: "817 civilians trapped in active conflict zones with no evacuation path",
    what_i_did: [
      "Co-founded Ukraine Extractions Program with multinational teams",
      "Personally led rescue missions in Donbas region",
      "Built NGO partnerships to fund and sustain operations",
    ],
    result: {
      type: "measurable",
      metrics: [
        { number: "817", label: "Civilians Rescued" },
        { number: "5M+", label: "Funds Mobilized" },
      ],
    },
    images: [
      {
        src: "/images/ukraine-1..png",
        alt: "Humanitarian mission in Ukraine",
      },
      {
        src: "/images/Foundation.png",
        alt: "Foundation humanitarian program",
      },
    ],
  },
  {
    title: "Veteran Advocacy Wins",
    timeline: "2017-2021",
    problem: "VA healthcare system failing veterans, policy stuck in gridlock",
    what_i_did: [
      "Built statewide coalition of veterans, VSOs, and elected officials",
      "Delivered 500K+ voter contacts with 106 volunteer field operation",
      "Facilitated town halls with veteran storytelling at center",
    ],
    result: {
      type: "measurable",
      metrics: [
        { number: "2", label: "Federal Acts Passed" },
        { number: "500K+", label: "Voter Contacts" },
      ],
    },
    images: [
      {
        src: "/images/Veteran.JPG",
        alt: "Veteran advocacy field operation",
      },
    ],
  },
];

export const ADVISORY_LANES = [
  {
    title: "Fundraising Workflows",
    description: "Donor research, segmentation, and campaign automation",
  },
  {
    title: "Operations Automation",
    description: "Back-office efficiency and reporting systems",
  },
  {
    title: "Knowledge Systems",
    description: "Internal documentation and executive updates",
  },
];

export const CONTACT = {
  email: "vegaonmission@gmail.com",
  linkedin: "https://www.linkedin.com/in/vega101",
  location: "Phoenix, AZ",
};
