import Header from "../../../components/header";
import Bodycontent from "../../../components/Bodycontent";
import Bodyplay from "../../../components/Bodyplay";
const Homepage: React.FC=()=>{
return(
        <div className="w-full">
            <Header/>
            <div className="max-w-full min-h-screen bg-black flex gap-x-1 pt-20">
                <div className="max-w-1.5/5">
                    <Bodyplay />
                </div>
                <div className="max-w-3.5/5">
                    <Bodycontent />
                </div>
            </div>
        </div>
)
}
export default Homepage;