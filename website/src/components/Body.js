import React from 'react'

const Body = () => {
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    
    <div class=" flex-wrap sm:flex-col flex-col pt-24 mb-12">
        <h1 class="sm:w-2/5 text-gray-400 font-semibold title-font text-xl mb-2 sm:mb-0">KEY PERSONS</h1>
        <h1 class="sm:w-2/5 text-primaryheading font-primarylightfont text-5xl mb-2 sm:mb-0">Meet our teachers</h1>
      </div>
    
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-8 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg">
        <img class="w-full object-center rounded-5 " alt="hero" src="./teacher1.png"/>
        </div>
        <h2 class="text-2xl font-medium title-font text-primaryheading mt-5 leading-loose">Christian Howard</h2>
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-secondary">
      <img class="object-cover object-center rounded-5 " alt="hero" src="./italy.png"/>
      <span class="ml-3 font-primaryfont  py-2 text-xl">Italian teacher</span>
    </a>
      </div>
      <div class="p-8 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg">
        <img class="w-full object-center rounded-5 " alt="hero" src="./teacher2.png"/>
        </div>
        <h2 class="text-2xl font-medium title-font text-primaryheading mt-5 leading-loose">Sandra Wilson</h2>
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-secondary">
      <img class="object-cover object-center rounded-5 " alt="hero" src="./Flag.png"/>
      <span class="ml-3 font-primaryfont  pb-4 text-xl">Spanish teacher</span>
    </a>
      </div>
      <div class="p-8 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg">
        <img class="w-full object-center rounded-5 " alt="hero" src="./teacher3.png"/>
        </div>
        <h2 class="text-2xl font-medium title-font text-primaryheading mt-5 leading-loose">Jimmy Cooper</h2>
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-secondary">
      <img class="object-cover object-center rounded-5 " alt="hero" src="./Ellipse 325.png"/>
      <span class="ml-3 font-primaryfont  py-2 text-xl">English teacher</span>
    </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Body