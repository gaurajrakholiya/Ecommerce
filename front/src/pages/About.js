import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
       <div className="row contact">
        <div className="col-md-6 ">
          <img src="/images/about.jpeg" alt="hello" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Ready to experience the convenience and excitement of e-commerce for
            yourself? Browse our collection of products, add your favorites to
            your cart, and check out with ease. If you have any questions or
            need assistance, our dedicated customer support team is always here
            to help.
          </p>
        </div>
      </div>

    </Layout>
  )
}

export default About; 
