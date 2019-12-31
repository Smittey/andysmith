import React, {useEffect, useState} from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InterestBox from "../components/interestBox"
import soundGraphic from "../assets/images/sound-balance.gif"
import { FaHeart, FaArrowUp, FaFireAlt, FaSeedling } from "react-icons/fa";
import { getTopArtists, getCurrentlyPlaying } from "../utils/getLastFmData";

const InterestsPage = () => {

  const loverList = ["Mechanical Keyboards", "Travelling", "Good coffee", "Craft ales and IPAs", "Outdoor activities"];
  const [artistsList, setArtistsList] = useState([]);
  const valuesList = ["Honesty", "Adventure", "Good health"];
  const hateList = ["Bad coffe", "Untested code", "A low bus-factor"];
  const [currentlyListening, setCurrentlyListening] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const fmDataTopResult = await getTopArtists({
          username: "smitteyyyy",
          apiKey: "9ddaab7dc99dbcfb3f2ed8204ef965ce"
        });

        setArtistsList(fmDataTopResult.topartists.artist.map(item => item.name));
      } catch (error) {
        setArtistsList({error: error});
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
   function fetchData() {
      setInterval(async () => {
        const fmDataCurrentResult = await getCurrentlyPlaying({
          username: "smitteyyyy",
          apiKey: "9ddaab7dc99dbcfb3f2ed8204ef965ce"
        });

        const current = fmDataCurrentResult.recenttracks.track.find(item => item['@attr'] && item['@attr'].nowplaying);

        if(current) {
          const currentArtist = `Currently playing: ${current.name} - ${current.artist['#text']}`;
          setCurrentlyListening(currentArtist);
        } else {
          setCurrentlyListening("");
        }
      },10000);
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />

      <h1>I'm <span className="theme-primary-colour bold">interested in.</span></h1>
             
      <div className="wrapper">
          <InterestBox icon={<FaHeart/>} title="Lover of" list={loverList}/>
          <InterestBox 
            icon={<FaArrowUp/>} 
            title="Current Top Artists" 
            list={artistsList} 
            extra={currentlyListening && (<li><img src={soundGraphic}/> {currentlyListening}</li>)}
          />
          <InterestBox icon={<FaSeedling/>} title="Values" list={valuesList}/>
          <InterestBox icon={<FaFireAlt/>} title="Hater of" list={hateList}/>
      </div>

    </Layout>
  )
}

export default InterestsPage
