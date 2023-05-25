import React, { useEffect, useState } from 'react';
import './App.css';
const App = () => {
  const [scrolling_up_down, setscrolling_up_down] = useState(0)
  useEffect (()=>{
      document.addEventListener("scroll", e => {
          let scrolled = window.scrollY;
          if (scrolled < scrolling_up_down){
            setText_transition_direction('down')
          } else {
            setText_transition_direction('up')
          }
          setscrolling_up_down(scrolled)
          if (scrolled <= 362){
            setTop_p_text(['', '25M+ Downloads', 'on appstore & playstore', 'ABC 456', 'We are the best web development', 'company in the word', '', 'view case study ➡', 1])

          } else if (scrolled <= 724) {
            setTop_p_text(['The Next Big', 'Blockchain', 'Revolution', 'ABC 457', 'We are the best web development ', 'company in the word ', ' ', 'Coming Soon', 2])
            
          } else if (scrolled <= 1086) {
            setTop_p_text(['Powered by advance', 'NASA', 'algorithms', 'ABC 458', 'We are the best', 'web development company', 'in the world', 'Coming Soon ', 3])
           
          } else if (scrolled <= 1448) {
            setTop_p_text(['Redefining', 'UX Strategy', 'and UI design', 'ABC 459', 'We are the best ', 'web development company ', 'in the world ', 'view case study ➡', 4])
           
          } else if (scrolled <= 1810) {
            setTop_p_text(['Text Headline', 'Text Headline', 'Footer headline', 'ABC 4510', 'We are the best AR', 'development company', 'in the world', 'view case study ➡ ', 5])
           
          } else if (scrolled <= 2172) {
            setTop_p_text(['Developing ERP Solution for', 'Text Headline ', 'in furniture industry', 'ABC 4511', 'Best Since 2017', 'We offer wide range of', 'web development and app development.', 'view case study ➡', 6])
            
          } else {
            setTop_p_text(['Biggest Classifieds', 'East Asia', 'Countries', 'ABC 4512', 'We are the best', 'web development company', 'in the world', 'Coming Soon', 7])
           
          }
      })
  }, [scrolling_up_down])
}
export default App