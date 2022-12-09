import React, { useState, useRef } from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styled from "styled-components";
import { BsPaperclip } from 'react-icons/bs';
import ProjectInquiry from '../components/ProjectInquiry';



const project = () => {

  return (
    <div>
    <Nav />
    <ProjectInquiry />
    <Footer />
    </div>
  )
}

export default project;