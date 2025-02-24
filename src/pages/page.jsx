import "../globle/styles.css"
import Box1 from "../components/box";
import Header from "../components/header";
import KeySlider from "../components/keysection";
import RewardBox1 from "../components/rewardbox";
import Sidebar from "../components/sidebar";
const RewardsPage = () => {
    return (
      <div className="container">
        <Header />
        <Sidebar/>
        <KeySlider />
        <Box1/>
       <RewardBox1/>
        </div>

    );
  };
  
  export default RewardsPage;
