import React from 'react'

const Section1 = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 pt-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-xl text-xl font-semibold title-font text-gray-400 mb-4">WHY CHOOSE US</h1>
      <p class="text-primaryheading font-primarylightfont text-5xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Our values</p>
     
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
          <img src="./play.png" alt="play" />
        </div>
        <div class="flex-grow">
          <h2 class="text-primaryheading font-primarylightfont text-2xl title-font font-semibold mb-3">Speaking clubs</h2>
          <p class="leading-relaxed px-12 text-lg text-secondary font-primarythinfont font-semibold  ">In our school you will practice your speaking skills and just get a lot of positive emotions!</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
          <img src="./send.png" alt="play" />
        </div>
        <div class="flex-grow">
          <h2 class="text-primaryheading font-primarylightfont text-2xl title-font font-semibold mb-3">Quality control</h2>
          <p class="leading-relaxed px-12 text-lg text-secondary font-primarythinfont font-semibold  ">A huge work has been done with the teachers and their work has been monitored thoroughly.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
          <img src="./doc.png" alt="play" />
        </div>
        <div class="flex-grow">
          <h2 class="text-primaryheading font-primarylightfont text-2xl title-font font-semibold mb-3">Progress analysis</h2>
          <p class="leading-relaxed px-12 text-lg text-secondary font-primarythinfont font-semibold">The CEF of Reference has been used at our school. It allows to control our students’ success in studying.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section1