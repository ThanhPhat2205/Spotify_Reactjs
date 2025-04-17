import Header from "../../../components/header";
import Bodycontent from "../../../components/Bodycontent";
import Bodyplay from "../../../components/Bodyplay";
const Homepage: React.FC=()=>{
return(
        <div>
            <Header/>
            <div className="w-full h-screen bg-black flex gap-x-4 p-10">
                <div className="w-2/5">
                    <Bodyplay />
                </div>
                <div className="w-4/5">
                    <Bodycontent />
                </div>
            </div>
        </div>
)
}
export default Homepage;