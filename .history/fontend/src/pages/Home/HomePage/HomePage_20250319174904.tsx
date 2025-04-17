import Header from "../../../components/header";
import Bodycontent from "../../../components/Bodycontent";
import Bodyplay from "../../../components/Bodyplay";
const Homepage: React.FC=()=>{
return(
        <div className="w-full">
            <Header/>
            <div className="w-full min-h-screen bg-black flex gap-x-1 pt-20">
                <div className="flex-1 max-w-[30%]">
                    <Bodyplay />
                </div>
                <div className="lgflex-1 max-w-[70%]">
                    <Bodycontent />
                </div>
            </div>
        </div>
)
}
export default Homepage;