import { useAuth } from "../store/auth"


const About = () => {
  const {user} = useAuth()
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content ">
    <div >
      <h1 className="text-5xl font-bold">Hello {user?user.username:"there"}</h1>
      <p className="py-6">
      Welcome to CourseInfoHub, your ultimate destination for exploring the best technology courses available online. Our mission is to empower learners around the globe by providing comprehensive and curated information on a wide range of tech courses—from programming and data science to artificial intelligence and web development.

At CourseInfoHub, we understand that the landscape of technology is constantly evolving. With countless online courses to choose from, finding the right one can be overwhelming. That’s why we are dedicated to simplifying your learning journey. Our platform offers detailed course descriptions, reviews, and comparisons, making it easier for you to make informed decisions.

Our Vision
We envision a world where anyone, regardless of their background, can access quality education and develop the skills needed to thrive in the digital age. We believe that continuous learning is essential for personal and professional growth, and we are here to support you every step of the way.

What We Offer
Curated Course Listings: Explore a diverse range of tech courses from leading platforms, carefully selected to meet various learning needs and levels.
In-Depth Reviews: Benefit from honest reviews and ratings from learners who have completed the courses, ensuring you find the best fit for your goals.
Resources and Guides: Access helpful articles, tips, and resources to enhance your learning experience and keep you updated on industry trends.
Join Our Community
Become a part of the CourseInfoHub community and connect with fellow learners, instructors, and tech enthusiasts. Share your experiences, ask questions, and inspire each other to achieve your educational goals.

Thank you for choosing CourseInfoHub as your trusted partner in your learning journey. Together, let’s unlock the potential of technology and pave the way for a brighter future!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
