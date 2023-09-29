import Logo from "./assets/logo.png"
import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Order from "./components/pages/Order";
import Works from "./components/individual/Works";
import RAE from "./components/pages/RAE";
import CoorInfo from "./components/pages/CoorInfo";
import TOU from "./components/pages/TOU";
import Faqs from "./components/pages/Faqs";
import Privacy from "./components/pages/Privacy";
import ContactUs from "./components/pages/ContactUs";
import Pricing from "./components/pages/Pricing";
import BannerHead from "./components/individual/BannerHead";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <div className="bg-pink-300">
      <section class="text-gray-600 body-font">
  <div className=" container px-5 py-24 mx-auto ">
    <div className="flex flex-row bg-blue-300 rounded-xl flex-row text-center w-full mb-20">
      <div className="ml-4 mt-2 mb-2">
        <img src={Logo} alt="logo" className="w-20 h-20 mx-auto"/>
      </div>
      <h1 className="text-3xl mx-auto mt-6 mb-6 text-6xl font-medium title-font text-gray-900">Personalised Student Chatbot</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex bg-blue-200 rounded-xl shadow-2xl h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Clear your Doubts!</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Ask me any question regarding your academics.</p>
            <a href="https://react-chat-gpt-chatbot-jade.vercel.app/"class="mt-3 text-indigo-500 inline-flex items-center">Ask
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex flex bg-blue-200 rounded-xl shadow-2xl h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">To Do list</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Check your Time-table so that you won't miss your classes.</p>
            <a href="https://65147e74f0fe693494406c09--shiny-mermaid-071039.netlify.app/" class="mt-3 text-indigo-500 inline-flex items-center">time table
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex flex bg-blue-200 rounded-xl shadow-2xl h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Test Your Knowledge</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Give a quiz and get to know how much you have leant</p>
            <a href="https://quiz-k6ikvvdcd-rahulroy123-rvce.vercel.app/"  class="mt-3 text-indigo-500 inline-flex items-center">Quiz
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex flex bg-blue-200 shadow-2xl rounded-xl h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Bored ???</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Learn a fun-fact .</p>
            <a href="https://random-7kdhkiq75-rahulroy123-rvce.vercel.app/" class="mt-3 text-indigo-500 inline-flex items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
        </div>
       
      </div>
      
    </div>
    <div className="flex">
    <div className="flex mb-5  flex-col mt-5 ml-4 bg-blue-200 rounded-lg shadow-2xl">
      
    <p className="mt-5 font-bold mb-5 mx-auto">
     Submitted by
      
    </p>
  
    <p className="mx-auto">
      Sharath Chandra - 1RV21CS150
    </p>
    <p className="mx-auto">
      Sadiq Wahid Tuggo - 1RV21CS135
    </p>
    <p className="mx-auto">
      Vishesh Gupta - 1RV21CS191
    </p>
    <p className="mb-5 mx-auto"> 
      Samiksha Ranjan - 1RV21CS141
    </p>
    </div>
    </div>
    
  </div>
  
</section>
    </div>
  );
}

export default App;
