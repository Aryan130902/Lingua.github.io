import React from 'react'
const Header = () => {
  return (
    <div>
        <section class="bg-bgcolor pt-32">
  <div class="container max-w-full mx-auto flex px-5 pt-24 pb-8 md:flex-row flex-col items-center md:pt-0">
    <div class="lg:flex-grow lg:pl-24 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" >
    
      <h1 class="sm:text-4xl font-primarylightfont lg:text-6xl text-primaryheading font-light lg:leading-14" >A
     <span class='text-primary font-primarylightfont font-semibold'> unique  </span>
     approach to learning foreign languages online 
      </h1>
      <p class="font-primaryfont text-lg pr-15 py-5 pr- mb-8 leading-10 text-secondary ">Learn at your own pace, with lifetime access on mobile and desktop</p>
      <button class="lg:mr-5 md:mr-0 md:ml-0 font-primaryfont bg-primary hover:scale-110  rounded-5 decoration-2  duration-300 py-5 px-8 font-semibold text-white">  Get started </button>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-fill object-center rounded" alt="hero" src="./Group 9.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Header