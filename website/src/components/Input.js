import React from 'react'

const Input = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-32 mx-auto ">
    <div class="flex flex-col text-center w-full mx-auto mb-12">
      <h1 class=" sm:text-3xl font-primarylightfont lg:text-5xl text-primaryheading font-light mb-4  ">Get a free trial lesson today</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-secondary font-primaryfont">Start fulfilling your language dreams with our school</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0  place-items-center justify-center">
      <div class="ml-8 flex-r ">
        <input type="text" placeholder="Enter your email" class="placeholder:text-slate-400 w-full bg-gray-100 bg-opacity-50 rounded-5 py-5 px-8 text-base "/>
      </div>
      <button class=" md:mr-0 md:ml-0 font-primaryfont bg-primary rounded-5 decoration-2  duration-300 py-5 px-8 font-semibold text-white"> send </button>
    </div>
  </div>
</section>
    </div>
  )
}

export default Input