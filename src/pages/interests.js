import React, {useEffect, useState} from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InterestBox from "../components/interestBox"
import soundGraphic from "../assets/images/sound-balance.gif"
import { FaHeart, FaArrowUp, FaFireAlt, FaSeedling } from "react-icons/fa";
import { getTopArtists, getCurrentlyPlaying } from "../utils/getLastFmData";

const InterestsPage = ({data}) => {

  const [artistsList, setArtistsList] = useState(["Loading top artists list..."]);
  const [currentlyListening, setCurrentlyListening] = useState("");

  const {
    lovesTitle,
    lovesList,
    hatesTitle,
    hatesList,
    valuesTitle,
    valuesList,
    topArtistsTitle
  } = data.contentfulInterests;


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
      <SEO title="Interests" />

      <h1>I'm <span className="theme-primary-colour bold">interested in.</span></h1>

      <div className="interests">    
        <div className="wrapper">
            <InterestBox icon={<FaHeart/>} title={lovesTitle} list={lovesList}/>
            <InterestBox 
              icon={<FaArrowUp/>} 
              title={topArtistsTitle} 
              list={artistsList} 
              extra={currentlyListening && (<li><img src={soundGraphic} alt="Sound playing icon"/> {currentlyListening}</li>)}
            />
            <InterestBox icon={<FaSeedling/>} title={valuesTitle} list={valuesList}/>
            <InterestBox icon={<FaFireAlt/>} title={hatesTitle} list={hatesList}/>
        </div>
      </div>
    </Layout>
  )
}

export default InterestsPage

export const pageQuery = graphql`
  query InterestsQuery {  
    contentfulInterests {
      hatesList
      hatesTitle
      lovesList
      lovesTitle
      valuesList
      valuesTitle
      topArtistsTitle
    }
  }
`
