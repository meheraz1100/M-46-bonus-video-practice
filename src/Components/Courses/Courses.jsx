import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Level1Course from "../Level1Course/Level1Course"
import Level2Course from '../Level2Course/Level2Course';
import Conceptual from '../conceptual/Conceptual';

const Courses = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const [data, setData] = useState([])

    useEffect(() => {
      fetch("data.json")
      .then(res => res.json())
      .then(data => setData(data))
    }, [])

    const level1 = data.filter((course) => course.catagory === 'course_l1')
    const level2 = data.filter((course) => course.catagory === 'course_l2')
    const conceptual = data.filter((course) => course.catagory === 'conceptual')
    console.log(level1)
    console.log(level2)
    console.log(conceptual)

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Level 1 Course</Tab>
          <Tab>Level 2 Course</Tab>
          <Tab>Conceptual Session</Tab>
        </TabList>
        <TabPanel>
          <Level1Course level1={level1}></Level1Course>
        </TabPanel>
        <TabPanel>
          <Level2Course level2={level2}></Level2Course>
        </TabPanel>
        <TabPanel>
          <Conceptual conceptual={conceptual}></Conceptual>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Courses;
