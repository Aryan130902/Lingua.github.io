import React from 'react'

const Testimonial = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
        <div class="container flex-wrap sm:flex-col flex-col pt-24 mb-12">
        <h1 class="sm:w-2/5 text-gray-400 font-semibold title-font text-xl mb-2 sm:mb-0">TOP STUDING</h1>
        <h1 class="sm:w-2/5 text-primaryheading font-primarylightfont text-5xl mb-2 sm:mb-0">Our student say</h1>
      </div>
  <div class="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
 
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="./student.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl lg:text-5xl mb-4 font-black font-primaryfont font-primaryheading">Cartin Watson
      </h1>
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-secondary">
      <img class="object-cover object-center rounded" alt="hero" src="./Flag.png"/>
      <span class="ml-3 font-primaryfont  pb-4 text-xl">B2 course student</span>
    </a>
      <p class="mb-8 font-primaryfont text-xl leading-relaxed">There is no way I could have made the same progress learning Spanish without using lingua. The best part is now learning Spanish has become one of my biggest hobbies.</p>
      <div class="flex space-x-2 justify-center">
  <span class="text-xs inline-block py-1 px-1 leading-none align-baseline font-bold bg-gray-300  rounded-full"></span>
  <span class="text-xs inline-block py-1 px-1 leading-none align-baseline font-bold bg-gray-300  rounded-full"></span>
  <span class="text-xs inline-block py-1 px-1 leading-none align-baseline font-bold bg-primary  rounded-full"></span>
  <span class="text-xs inline-block py-1 px-1 leading-none align-baseline font-bold bg-gray-300  rounded-full"></span>
  <span class="text-xs inline-block py-1 px-1 leading-none align-baseline font-bold bg-gray-300  rounded-full"></span>
</div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Testimonial