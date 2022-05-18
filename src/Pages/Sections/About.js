import { Card } from "react-bootstrap";
import SectionTemplate from "./SectionTemplate";

function About(props) {



  return (
    <SectionTemplate motionKey="about">
      <Card bg="transparent" style={{ width: '90%' }}>
        <Card.Header style={{ background: "transparent", borderBottom: 'none' }}>
          <h2>A little bit about me</h2>
        </Card.Header>
        <Card.Body>
          I recently finished my last tour as a Logistics Specialist in the Navy. The 5 years that I was in opened my eyes to what outside of the small town that I grew up in. It also gave me opportunity to be a part of something bigger than myself and travel the world. It was during this time that I found just how much I enjoyed technology.
          <br />
          <br />
          As a Logistics Specialist, we had our hands in many different areas. Some of these areas included Financials, Government Acquisition, Supply Chains, Hazardous Material management, and various other seemingly unrelated programs. One thing that all these different areas had in common was some sort of tracking. Whether that have been tracking quantity, location, or time, most of it was done via Excel, completely manually. Throughout my first year or so, I took notice of what I was doing every day and started to see what could be improved to increase efficiency. It started with little things, like organizing stuff in a certain way, or labelling things so everyone would know where they could be found.
          <br />
          <br />
          From there, I began to have more say in other things, and looked at how we could improve our data collection processes. This introduced me to formulas and similar features in Excel. This did help quite a bit; however it became a job in itself to monitor the data to verify it was all being input correctly.
          <br />
          <br />
          Next, I began learning about macros, and how I could make my own to perform small tasks such as adding data from a form, or vice versa. Through Excel, this taught me how to work with VBA, and later I’d learn JavaScript for Google Sheets. After creating a spreadsheet that became more of an actual app for a Self-Employed friend to track their business expenses, customer data, and product usage, I decide that I wanted to have the capability and freedom to make apps built from scratch. After taking some intro HTML and CSS courses, I applied to the coding bootcamp that I am currently attending, Code Platoon. In this bootcamp, we are taught JavaScript, Python, HTML, CSS, React, Django and SQL. And now I’m here, looking to take this passion that I’ve developed to the next level and make it my career.
        </Card.Body>
      </Card>
    </SectionTemplate>
  )
}

export default About