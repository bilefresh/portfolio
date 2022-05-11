import React, { Fragment, useEffect } from 'react'
import '../public/assets/scss/landing.scss'
import Head from 'next/head'
// import Custom Components
import Router from 'next/router'
const Home = () => {
  
  useEffect(() => {
	  const {pathname} = Router
   if(pathname == '/' ){
       Router.push('/layouts/resume')
   }
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })

  return (
    <Fragment>
      <div className="landing-page">
      <Head>
        <title>Bilesanmi Faruk</title>
      </Head>
      </div>
    </Fragment>
  )
}

export default Home
