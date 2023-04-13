import tailwind from './assets/images/tailwind-logo.png'
import { ReactComponent as Css } from './assets/svg/css-icon.svg'
import { ReactComponent as Developer } from './assets/svg/developer-icon.svg'
import { ReactComponent as Mobile } from './assets/svg/mobile-icon.svg'
import { ReactComponent as Logo } from './assets/svg/scrimba-logo.svg'
import { ReactComponent as Menu } from './assets/svg/hamburger.svg'


function App() {

  return (
    <div className="bg-gray-200 font-sans flex flex-col items-center">
     <header className="bg-indigo-700 w-full px-4 py-3 flex justify-center border-b-4 border-pink-500">
       <div className="max-w-4xl w-full">
        <nav className='flex items-center justify-between text-pink-500'>
            <Logo className="h-8 fill-current" />
            <button type="button" className="text-gray-300 hover:text-gray-400 sm:hidden">
              <Menu className="h-6 w-6 fill-current"/>
            </button>
          </nav>
          <div className="my-4">
            <h1 className="text-2xl text-indigo-100">Want to learn Tailwind CSS?</h1>
            <p className="text-sm text-indigo-200">
              Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by step.
            </p>
          <div className='relative mt-4 flex'>
            <div>
              <a href="#" className="bg-pink-500 text-indigo-100 px-4 py-2 mt-2 text-xs rounded-full uppercase">Enroll now</a>
            </div>

            <div className='absolute right-0 bg-white rounded-full flex justify-center items-center border-pink-500 p-5 border-4'>
              <img className='w-16 h-16' src={tailwind} alt="logo" />
            </div>
          </div>
          </div>
       </div>
     </header>

     <main className='mt-16 w-full flex flex-col items-center'>
      <section className='max-w-4xl mx-4'>
        <h2 className='text-indigo-700 font-bold text-xl pb-1 border-b border-indigo-300'>How It Works</h2>
        <p className='text-sm mt-4'>Tailwind is designed for rapid development of modern applications. 
          At its core, it is a robust mobile-first design system built with developer experience in mind. 
          After using Tailwind CSS, you will find it difficult to go back to use anything else. 
          Learn all about it in this all-inclusive course.
        </p>
        
        <h2 className='text-indigo-700 font-bold text-xl pb-1 mt-8 border-b border-indigo-300'>Advantages</h2>

     
    </div>
  )
}

export default App
