import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="py-5">
      <div  className='col policy'>
        <div className='col-md-8'>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes how Ecommerce 
            our collects, uses, and discloses your personal information when
            you use our website and our related services.
          </p>
          <p>
            <b>Information We Collect:</b>
            <ul>
              <li>Personal information you provide, such as your name, email
                address, shipping address, and payment information.</li>
              <li>Information about your browsing activity on our website,
                such as the pages you visit and the products you browse.</li>
              <li>Device information, such as your IP address, browser type,
                and operating system.</li>
            </ul>
          </p>
          <p>
            <b>How We Use Your Information:</b>
            <ul>
              <li>To process your orders and provide you with customer service.</li>
              <li>To send you marketing emails about our products and services.</li>
              <li>To analyze your browsing activity to improve our website and
                services.</li>
            </ul>
          </p>
          <p>
            <b>When We Share Your Information:</b>
            <ul>
              <li>With third-party service providers who help us operate our
                website and services, such as payment processors and shipping
                companies.</li>
              <li>With law enforcement or other government officials if
                required by law.</li>
            </ul>
          </p>
          <p>
            <b>Your Choices:</b>
            <ul>
              <li>You can unsubscribe from our marketing emails by clicking the
                unsubscribe link at the bottom of any email we send you.</li>
              <li>You can request to access or delete your personal information
                by contacting us at [your email address].</li>
            </ul>
          </p>
          <p>
            <b>Changes to This Privacy Policy:</b>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              our website.
            </p>
          </p>
        </div>
      </div>
    </div>
    </Layout>

  )
}

export default Policy
