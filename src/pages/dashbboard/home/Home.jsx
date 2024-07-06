import { HomeBoxdata } from "../../../Data"
import HomeBox from "../../../components/homeBox/HomeBox"
import Revenue from "../../../components/revenue/Revenue"

const Home = () => {
  return (
    <div className="w-full">
        <HomeBox data={HomeBoxdata} grid="grid md:grid-cols-3 xl:grid-cols-6"/>
        <Revenue/>
      
    </div>
  )
}

export default Home
