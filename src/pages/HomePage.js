import React from 'react'

const HomePage = () => {
  return (
    <div>
        <section className="py-20 bg-gray-50">
          <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div className="w-full lg:max-w-md">
                  <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Hello There!</h2>
                </div>
              </div>
              <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                <img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="Illustration of a person using a computer" />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default HomePage