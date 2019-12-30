import React from "react"
import Header from "../components/header_footer/Header"
import Footer from "../components/header_footer/Footer"
import SEO from '../components/SEO'

const PrimaryLayout = props => (
  <div>
    <SEO />
    <Header title="TESEJZ ALTER EGO"/>
    <main>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>{props.children}</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout