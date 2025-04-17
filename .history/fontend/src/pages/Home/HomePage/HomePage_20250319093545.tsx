import Header from "../../../components/header";
import Bodycontent from "../../../components/Bodycontent";
import Bodyplay from "../../../components/Bodyplay";
const Homepage: React.FC=()=>{
return(
        <div>
            <Header/>
            <div className="w-full h-screbg-black flex gap-x-4">
                <div className="w-1/4">
                    <Bodyplay />
                </div>
                <div className="w-3/5">
                    <Bodycontent />
                </div>
            </div>
        </div>
)
}
export default Homepage;