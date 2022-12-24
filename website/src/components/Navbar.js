import React, { Fragment, useState } from 'react'

const Navbar = () => {

   return (
    <>
    <header class="  bg-bgcolor  ">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font items-center mb-4 md:mb-0">
    <img class="object-cover object-center rounded" alt="logo" src="./logo.png"/>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-secondary font-primarylightfont ">Courses</a>
      <a class="mr-5 text-secondary font-primarylightfont ">About us</a>
      <a class="mr-5 text-secondary font-primarylightfont ">Teachers</a>
      <a class="mr-5 text-secondary font-primarylightfont ">Pricing</a>
      <a class="mr-5 text-secondary font-primarylightfont ">Careers</a>
      <a class="mr-5 text-secondary font-primarylightfont ">Blogs</a>
    </nav>
    <button class="inline-flex text-primary font-primaryfont items-center bg-white border-0 py-2.5 px-5 rounded-3xl text-base mt-4 md:mt-0">
    Get started
    </button>
  </div>
</header>
</>
  )
}

export default Navbar