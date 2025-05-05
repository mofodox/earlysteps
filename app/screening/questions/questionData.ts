interface Question {
  id: string;
  domain: string;
  text: string;
}

// Questions for 0-12 months
const infantQuestions: Question[] = [
  // Gross Motor
  {
    id: 'infant-gm-1',
    domain: 'grossMotor',
    text: 'Does your baby lift their head when lying on their tummy?'
  },
  {
    id: 'infant-gm-2',
    domain: 'grossMotor',
    text: 'Can your baby roll over from front to back and vice versa?'
  },
  {
    id: 'infant-gm-3',
    domain: 'grossMotor',
    text: 'Is your baby able to sit without support?'
  },
  
  // Fine Motor
  {
    id: 'infant-fm-1',
    domain: 'fineMotor',
    text: 'Does your baby reach out and grasp objects?'
  },
  {
    id: 'infant-fm-2',
    domain: 'fineMotor',
    text: 'Can your baby transfer objects from one hand to the other?'
  },
  
  // Language & Communication
  {
    id: 'infant-lc-1',
    domain: 'language',
    text: 'Does your baby coo or make babbling sounds?'
  },
  {
    id: 'infant-lc-2',
    domain: 'language',
    text: 'Does your baby respond to sounds or voices?'
  },
  
  // Social & Emotional
  {
    id: 'infant-se-1',
    domain: 'social',
    text: 'Does your baby smile in response to others?'
  },
  {
    id: 'infant-se-2',
    domain: 'social',
    text: 'Is your baby able to calm down when comforted?'
  }
];

// Questions for 1-2 years
const oneToTwoYearQuestions: Question[] = [
  // Gross Motor
  {
    id: '1-2-gm-1',
    domain: 'grossMotor',
    text: 'Is your child able to walk independently?'
  },
  {
    id: '1-2-gm-2',
    domain: 'grossMotor',
    text: 'Can your child climb onto and down from furniture without help?'
  },
  
  // Fine Motor
  {
    id: '1-2-fm-1',
    domain: 'fineMotor',
    text: 'Does your child use a pincer grasp to pick up small objects?'
  },
  {
    id: '1-2-fm-2',
    domain: 'fineMotor',
    text: 'Can your child stack two or more blocks?'
  },
  
  // Language & Communication
  {
    id: '1-2-lc-1',
    domain: 'language',
    text: 'Does your child use simple words or phrases?'
  },
  {
    id: '1-2-lc-2',
    domain: 'language',
    text: 'Can your child follow simple instructions?'
  },
  
  // Social & Emotional
  {
    id: '1-2-se-1',
    domain: 'social',
    text: 'Does your child show interest in other children?'
  },
  {
    id: '1-2-se-2',
    domain: 'social',
    text: 'Does your child exhibit separation anxiety when away from caregivers?'
  }
];

// Questions for 2-3 years
const twoToThreeYearQuestions: Question[] = [
  // Gross Motor
  {
    id: '2-3-gm-1',
    domain: 'grossMotor',
    text: 'Can your child run and navigate around obstacles?'
  },
  {
    id: '2-3-gm-2',
    domain: 'grossMotor',
    text: 'Is your child able to kick a ball forward?'
  },
  
  // Fine Motor
  {
    id: '2-3-fm-1',
    domain: 'fineMotor',
    text: 'Does your child draw simple lines or circles?'
  },
  {
    id: '2-3-fm-2',
    domain: 'fineMotor',
    text: 'Can your child turn pages in a book one at a time?'
  },
  
  // Language & Communication
  {
    id: '2-3-lc-1',
    domain: 'language',
    text: 'Does your child use two to three-word sentences?'
  },
  {
    id: '2-3-lc-2',
    domain: 'language',
    text: 'Can your child name familiar objects or people?'
  },
  
  // Social & Emotional
  {
    id: '2-3-se-1',
    domain: 'social',
    text: 'Does your child engage in parallel play with peers?'
  },
  {
    id: '2-3-se-2',
    domain: 'social',
    text: 'Is your child beginning to show defiant behavior?'
  }
];

// Questions for 3-4 years
const threeToFourYearQuestions: Question[] = [
  // Gross Motor
  {
    id: '3-4-gm-1',
    domain: 'grossMotor',
    text: 'Can your child hop on one foot?'
  },
  {
    id: '3-4-gm-2',
    domain: 'grossMotor',
    text: 'Does your child catch a bounced ball most of the time?'
  },
  
  // Fine Motor
  {
    id: '3-4-fm-1',
    domain: 'fineMotor',
    text: 'Is your child able to draw a person with two to four body parts?'
  },
  {
    id: '3-4-fm-2',
    domain: 'fineMotor',
    text: 'Can your child use scissors to cut paper?'
  },
  
  // Language & Communication
  {
    id: '3-4-lc-1',
    domain: 'language',
    text: 'Does your child tell stories or describe events?'
  },
  {
    id: '3-4-lc-2',
    domain: 'language',
    text: 'Can your child understand concepts like "same" and "different"?'
  },
  
  // Social & Emotional
  {
    id: '3-4-se-1',
    domain: 'social',
    text: 'Does your child prefer to play with other children rather than alone?'
  },
  {
    id: '3-4-se-2',
    domain: 'social',
    text: 'Is your child able to cooperate with other children?'
  }
];

// Questions for 4-5 years
const fourToFiveYearQuestions: Question[] = [
  // Gross Motor
  {
    id: '4-5-gm-1',
    domain: 'grossMotor',
    text: 'Can your child stand on one foot for 10 seconds or longer?'
  },
  {
    id: '4-5-gm-2',
    domain: 'grossMotor',
    text: 'Does your child skip or gallop?'
  },
  
  // Fine Motor
  {
    id: '4-5-fm-1',
    domain: 'fineMotor',
    text: 'Is your child able to draw shapes like squares or triangles?'
  },
  {
    id: '4-5-fm-2',
    domain: 'fineMotor',
    text: 'Can your child dress and undress without assistance?'
  },
  
  // Language & Communication
  {
    id: '4-5-lc-1',
    domain: 'language',
    text: 'Does your child use future tense in conversation?'
  },
  {
    id: '4-5-lc-2',
    domain: 'language',
    text: 'Can your child tell a simple story using full sentences?'
  },
  
  // Social & Emotional
  {
    id: '4-5-se-1',
    domain: 'social',
    text: 'Does your child distinguish between real and make-believe?'
  },
  {
    id: '4-5-se-2',
    domain: 'social',
    text: 'Is your child aware of gender identity?'
  }
];

// Questions for 5-6 years
const fiveToSixYearQuestions: Question[] = [
  // Gross Motor
  {
    id: '5-6-gm-1',
    domain: 'grossMotor',
    text: 'Can your child ride a bicycle with training wheels?'
  },
  {
    id: '5-6-gm-2',
    domain: 'grossMotor',
    text: 'Does your child participate in group sports or physical activities?'
  },
  
  // Fine Motor
  {
    id: '5-6-fm-1',
    domain: 'fineMotor',
    text: 'Is your child able to write their own name?'
  },
  {
    id: '5-6-fm-2',
    domain: 'fineMotor',
    text: 'Can your child use utensils properly during meals?'
  },
  
  // Language & Communication
  {
    id: '5-6-lc-1',
    domain: 'language',
    text: 'Does your child understand and use comparative words like "taller" or "shorter"?'
  },
  {
    id: '5-6-lc-2',
    domain: 'language',
    text: 'Can your child follow multi-step directions?'
  },
  
  // Social & Emotional
  {
    id: '5-6-se-1',
    domain: 'social',
    text: 'Does your child show empathy towards others?'
  },
  {
    id: '5-6-se-2',
    domain: 'social',
    text: 'Is your child able to resolve conflicts with peers independently?'
  }
];

export function getQuestionsByAgeGroup(ageGroup: string): Question[] {
  switch(ageGroup) {
    case '0-12-months':
      return infantQuestions;
    case '1-2-years':
      return oneToTwoYearQuestions;
    case '2-3-years':
      return twoToThreeYearQuestions;
    case '3-4-years':
      return threeToFourYearQuestions;
    case '4-5-years':
      return fourToFiveYearQuestions;
    case '5-6-years':
      return fiveToSixYearQuestions;
    default:
      return [];
  }
} 