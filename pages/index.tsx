import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { 
  AiFillWindows,
  AiFillApple,
  AiFillAndroid
} from 'react-icons/ai';
import Image from "next/image";
import avatar from "../public/avatar.png";
import cloud from "../public/cloud.png";
import database from "../public/database.png";
import server from "../public/server.png";
import art from "../public/art.png";
import {useState} from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false); 
  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
      <title>Project</title>
        <meta name="description" content="next project" />
        <link></link>
      </Head>


    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className='py-10 mb-12 flex justify-between dark:text-white'>
        <h1 className='text-xl'>Project</h1>
        <ul className='flex items-center'>
          <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
          </li>
          <li>
            <a className='bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-xl ml-8'
            href="#">
              Resume
            </a>
          </li>
        </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
            Project
          </h2>
          <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
            Details and information
          </h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-lg mx-auto'>
            Lorem ipsum Lorem ipsumLorem
            Lorem ipsumLorem ipsumLorem ipsum ipsumLorem 
            ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
            Lorem ipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem ipsum</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 dark:text-gray-400 text-gray-600'>
          <AiFillAndroid />
          <AiFillWindows />
          <AiFillApple />
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={avatar} alt={'Avatar image'} layout='fill' objectFit='cover' />
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>
            Features
          </h3>
          <p className='text-md py-2 leading-8 dark:text-gray-200 text-gray-800'>
          Lorem IpsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
          ipsumLorem ipsum ipsumLorem <span className='text-teal-500'>IpSum</span> ipsumLorem ipsum ipsumLorem 
          ipsumLorem ipsum ipsumLorem ipsumLorem lorem ipsum  ipsumLorem ipsumLorem lorem ipsum ipsumLorem ipsumLorem lorem ipsum ipsumLorem ipsumLorem lorem ipsum <span className='text-teal-500'>lOREM</span> ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
          ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
          </p>
          <p className='text-md py-2 leading-8 dark:text-gray-200 text-gray-800'>
            Lorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUM
          </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={cloud} alt='Image' width={100} height={100} className='mx-auto' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Cloud</h3>
            <p className='py-2'>
              ipsumLorem ipsumLorem ipsum ipsumLoremipsumLorem ipsumLorem ipsum ipsumLorem
            </p>
            <h4 className='py-4 text-teal-600'>Cloud features</h4>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={database} alt='Image' width={100} height={100} className='mx-auto' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Database</h3>
            <p className='py-2'>
              ipsumLorem ipsumLorem ipsum ipsumLoremipsumLorem ipsumLorem ipsum ipsumLorem
            </p>
            <h4 className='py-4 text-teal-600'>Cloud features</h4>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={server} alt='Image' width={100} height={100} className='mx-auto' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Storage</h3>
            <p className='py-2'>
              ipsumLorem ipsumLorem ipsum ipsumLoremipsumLorem ipsumLorem ipsum ipsumLorem
            </p>
            <h4 className='py-4 text-teal-600'>Cloud features</h4>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
            <p className='text-gray-800 py-1'>ipsumLorem lorem Ipsum</p>
          </div>
        </div>
      </section>


      <section>
        <div>

          <h3 className='text-3xl py-1 dark:text-white' >
            Technologies
          </h3>

          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Lorem IpsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
          ipsumLorem ipsum ipsumLorem <span className='text-teal-500'>IpSum</span> ipsumLorem ipsum ipsumLorem 
          ipsumLorem ipsum ipsumLorem ipsumLorem lorem ipsum  ipsumLorem ipsumLorem lorem ipsum ipsumLorem ipsumLorem lorem ipsum ipsumLorem ipsumLorem lorem ipsum <span className='text-teal-500'>lOREM</span> ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
          ipsumLorem ipsum ipsumLorem ipsumLorem ipsum ipsumLorem 
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
            Lorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUMLorem ipsum Lorem Ipsum LoreM IpsUm Lorem IPsUM
          </p>

        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

          <div className='basis-1/3 flex-1'>
            <Image src={art} alt='' className='rounded-lg object-cover' 
            layout='responsive'/>
          </div>

          <div className='basis-1/3 flex-1'>
            <Image src={art} alt='' className='rounded-lg object-cover' 
            layout='responsive'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={art} alt='' className='rounded-lg object-cover' 
             layout='responsive'/>
          </div>


          <div className='basis-1/3 flex-1'>
            <Image src={art} alt='' className='rounded-lg object-cover' 
            layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={art} alt='' className='rounded-lg object-cover' 
            layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1'>
            <Image src={art} alt='' className='rounded-lg object-cover' 
            layout='responsive'/>
          </div>
        </div>
      </section>
    </main>
    
    </div>
    )
}
