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
    <div className="flex bg-blue-300 rounded-xl flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl mt-6 mb-6 text-6xl font-medium title-font text-gray-900">Personlised Student Chatbot</h1>
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
            <h2 class="text-gray-900 text-lg title-font font-medium">Time Table</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Chech your Time-table so that you wont miss your classes.</p>
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
            <h2 class="text-gray-900 text-lg title-font font-medium">Test Your Knowlede</h2>
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
  </div>
</section>
    </div>
  );
}

export default App;
