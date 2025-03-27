import { AssessmentResult } from "../pages/Dashboard";

export const mockAssessmentResults: AssessmentResult[] = [
  { id: '1', type: 'depression', date: '2024-01-15', score: 45 },
  { id: '2', type: 'depression', date: '2024-02-15', score: 35 },
  { id: '3', type: 'anxiety', date: '2024-01-20', score: 55 },
  { id: '4', type: 'anxiety', date: '2024-02-20', score: 40 },
  { id: '5', type: 'depression', date: '2024-03-15', score: 25 },
  { id: '6', type: 'anxiety', date: '2024-03-20', score: 30 }
];
 export const otherRecommendedBooks = [
        {
          id: "001",
          title: "The Mindful Way Through Depression",
          author: "Mark Williams",
          description: "A groundbreaking work combining mindfulness and cognitive therapy",
          image: "https://m.media-amazon.com/images/I/81aUQygpfoL._AC_UF350,350_QL50_.jpg"
        },
        {
          id: "002",
          title: "Anxiety: Panicking about Panic",
          author: "Joshua Fletcher",
          description: "A compassionate guide to understanding and overcoming anxiety",
          image: "https://www.hachette.co.uk/wp-content/uploads/2019/04/hbg-title-9781529390803-17.jpg"
        },
        {
          id: "003",
          title: "Feeling Good: The New Mood Therapy",
          author: "David D. Burns",
          description: "A classic approach to cognitive behavioral therapy",
          image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdWDs-sK9Cy5d0VqW-Zv7_xXoeHf4OsdeyXQusxbgO4ns5j56S"
        }
      ];

  export const otherPsychologistProfiles = [
    {
      id: "001",
      name: "Dr. Emily Rodriguez",
      specialty: "Cognitive Behavioral Therapy",
      expertise: "Anxiety and Depression Management",
      image: "https://photos.psychologytoday.com/e355f3cf-116c-4bd3-9d87-44942ea436c9/1/320x400.jpeg",
    },
    {
      id: "002",
      name: "Dr. Michael Chen",
      specialty: "Mindfulness-Based Therapy",
      expertise: "Stress Reduction and Emotional Wellness",
      image: "https://ysm-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto:eco,dpr_3,w_650/v1/yms/prod/4618673d-52cd-44d5-bf10-fb2871f7352b",
    },
    {
      id: "003",
      name: "Dr. Laura Anderson",
      specialty: "Trauma-Informed Care",
      expertise: "PTSD and Healing Support",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/cufib1qktnnqn45raibs660luc._SY600_.jpg",
    },
  ];