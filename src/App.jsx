import { useEffect, useState } from 'react'
import StarRating from './components/star_rating/StarRating'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more-data/LoadMoreData'
import Home from './components/infinite-scrolling/Home'
import Accordion from './components/accordion/Accordion'
import ScrollIndicatore from './components/scrollindecator/ScrollIndicatore'
import LightDarkMode from './components/light-dark-mode/LightDarkMode'
import QrCode from './components/qr-code-gnerator/QrCode'
import ChildTab from './components/custome-tab/ChildTab'
import ParentTab from './components/custome-tab/ParentTab'
import ParentModal from './components/model-popup/ParentModal'
import ChiltToParent from './components/childtoparent/ChiltToParent'
import Rating from './components/star_rating/Rating'
import Practise from './components/practrice/Practise'
import Task from './components/task_manager/Task'



function App() {

  const [UiColor, setUiColor] = useState(null)

  const getColor = (color) => {
    setUiColor(color)
  }

  return (
    <>
      <div>
        {/* <StarRating noOfStar={10}/>
        <Rating noOfStar={10}/> */}

        {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}

        {/* <LoadMoreData /> */}

        {/* <Home /> */}

        {/* <Accordion /> */}

        {/* <ScrollIndicatore url={`https://dummyjson.com/products?limit=100`}/> */}

        {/* <LightDarkMode /> */}

        {/* <QrCode /> */}

        {/* <ParentTab /> */}

        {/* <ParentModal /> */}

        <Task />


        {/* <div className='flex items-center justify-center mt-20'>
          <div className='w-32 border border-slate-700 h-32' style={{ background: `${UiColor}` }}></div>
        </div>

        <ChiltToParent getColor={getColor} /> */}
      </div>
    </>
  )
}

export default App
