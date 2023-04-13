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

        <section className='flex flex-col sm:flex-row sm:-mx-2'>
          <div className='sm:w-1/3 mt-4'>
            <div className='bg-white h-full p-8 cursor-pointer border-b-4 border-pink-500  rounded-lg flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 sm:mx-2 sm:p-3 md:p-8'>
              <div className='bg-gray-200 text-indigo-700 rounded-full w-16 p-2'>
                <Css className="w-12 h-12 fill-current"/>
              </div>
              <div className='mt-4 font-bold text-gray-600 text-sm'>No Custom CSS</div>
              <div className='text-center mt-2'>
                Tailwind's advanced class extraction will leave your project free of custom CSS.
              </div>
            </div>
          </div>
          <div className='sm:w-1/3 mt-4'>
            <div className='bg-white h-full p-8 border-b-4 cursor-pointer border-pink-500 rounded-lg flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 sm:mx-2 sm:p-3 md:p-8'>
              <div className='bg-gray-200 text-indigo-700 rounded-full w-16 p-2'>
                <Developer className="w-12 h-12 fill-current"/>
              </div>
              <div className='mt-4 font-bold text-gray-600 text-sm'>Developer Experience</div>
              <div className='text-center mt-2'>
                Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing.
              </div>
            </div>
          </div>
          <div className='sm:w-1/3 mt-4'>
            <div className='bg-white h-full p-8 border-b-4 cursor-pointer border-pink-500 rounded-lg flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 sm:mx-2 sm:p-3 md:p-8'>
              <div className='bg-gray-200 text-indigo-700 rounded-full w-16 p-2'>
                <Mobile className="w-12 h-12 fill-current"/>
              </div>
              <div className='mt-4 font-bold text-gray-600 text-sm'>Mobile Friendly</div>
              <div className='text-center mt-2'>
                Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy.
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
        <h2 className="font-bold text-xl text-center text-gray-400">Sign up to download the free PDF</h2>
        <form className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" action="#" method="post">
          <div className="flex flex-col md:flex-row md:-mx-2">
            <label for="first_name" className="sr-only">First Name</label>
            <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="First name" id="first_name"/>
                        
            <label for="last_name" className="sr-only">Last Name</label>
            <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Last name" id="last_name"/>
          </div>
          
          <div className="flex flex-col md:flex-row  md:-mx-2">
            <label for="email" className="sr-only">Email address</label>
            <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="email" placeholder="john@email.com" id="email"/>
                          
            <label for="title" className="sr-only">Title</label>
            <input className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" type="text" placeholder="Your title" id="title"/>
          </div>

          <div className="flex flex-col md:flex-row md:-mx-2">
            <button className="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Create account</button>
          </div>
        </form>
      </section>
     </main>
     <footer className="bg-gray-800 w-full text-center pb-8">
            <p className="text-sm text-gray-600 mt-4 font-light">Copyright &copy;
    {' '}
    {new Date().getFullYear()}
    {' '}
    Miliyon A. All Rights reserved.</p>
    </footer>
    </div>
  )
}

export default App
