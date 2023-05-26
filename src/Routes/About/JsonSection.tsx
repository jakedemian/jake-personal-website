import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const BORN_DATE_TIME = new Date(1991, 11, 9, 0, 6, 0, 0);
const getExactAge = () => {
  const nowDate = new Date();
  return (
    (nowDate.getTime() - BORN_DATE_TIME.getTime()) / 1000 / 60 / 60 / 24 / 365
  );
};

const JsonSection: React.FC = () => {
  const [exactAge, setExactAge] = useState<number>(getExactAge());

  useEffect(() => {
    setInterval(() => {
      setExactAge(getExactAge());
    }, 100);
  }, []);

  return (
    <Box fontSize={12}>
      <pre>
        {` 
{
  "name": "Jacob Demian",
`}
        {`  "age": "${exactAge}", 
`}
        {`  "role": "Software Developer",
  "degree": "Computer Engineering",
  "children": 1,
  "pets": {
    "cats": [
      "frank",
      "randy"
    ],
    "dogs": [
     "vito"
    ]
  },
  "otherInterests": [
    "game design",
    "running",
    "Cleveland sports",
    "space! 🚀",
    "playing video games"
  ],
  "numOfTimesWatchedSuperbad": 38,
`}
        {`  "approxNumOfSandwichesEaten": ${Math.floor(exactAge) * 365}
}
`}
      </pre>
    </Box>
  );
};

export default JsonSection;
