import React from 'react'
import { Helmet } from "react-helmet-async";
const TItle = ({
    title ="chat",
    description ="this is chat app",
}) => {
  return (
   <Helmet>
     <title>{title}</title>
     <meta name='description' content={description} />
   </Helmet>
  )
}

export default TItle
