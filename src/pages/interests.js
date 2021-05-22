import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  FaHeart, FaArrowUp, FaFireAlt, FaSeedling,
} from 'react-icons/fa';
import parse from 'html-react-parser';
import ReactTooltip from 'react-tooltip';
import Layout from '../components/layout';
import SEO from '../components/seo';
import InterestBox from '../components/InterestBox';
import soundGraphic from '../assets/images/sound-balance.gif';
import { getTopArtists, getCurrentlyPlaying } from '../utils/getLastFmData';

const InterestsPage = ({ data }) => {
  const [artistsList, setArtistsList] = useState(['Loading top artists list...']);
  const [currentlyListening, setCurrentlyListening] = useState('');

  const {
    lovesTitle,
    lovesList,
    hatesTitle,
    hatesList,
    valuesTitle,
    valuesList,
    topArtistsTitle,
  } = data.contentfulInterests;


  const buildArtistLink = (artist) => (
    <a href={artist.url} target="_blank" rel="noopener noreferrer">
      {artist.name}
    </a>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fmDataTopResult = await getTopArtists({
          username: 'smitteyyyy',
          apiKey: '9ddaab7dc99dbcfb3f2ed8204ef965ce',
        });
        const artistListItems = fmDataTopResult.topartists.artist.map(
          (artist) => buildArtistLink(artist),
        );
        setArtistsList(artistListItems);
      } catch (error) {
        setArtistsList({ error });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const fmDataCurrentResult = await getCurrentlyPlaying({
        username: 'smitteyyyy',
        apiKey: '9ddaab7dc99dbcfb3f2ed8204ef965ce',
      });
      const current = fmDataCurrentResult.recenttracks.track.find((item) => item['@attr'] && item['@attr'].nowplaying);

      if (current) {
        const currentArtist = `Currently playing: 
          <a href=${current.url} target="_blank" rel="noopener noreferrer">
            ${current.name} - ${current.artist['#text']}
          </a>`;
        setCurrentlyListening(parse(currentArtist));
      } else {
        setCurrentlyListening('');
      }
    };

    fetchData();
    setInterval(fetchData, 10000);
  }, []);

  const artistTitleAndToolTip = (
    <span>
      {topArtistsTitle}
      <ReactTooltip
        id="interest-tooltip"
        delayHide={100}
        effect="solid"
      />
      <div
        style={{ display: 'inline' }}
        data-for="interest-tooltip"
        data-tip="Top listened to artists from the last 3 months"
      >
        <sup>?</sup>
      </div>
    </span>
  );

  return (
    <Layout>
      <SEO title="Interests" />

      <h1>
        <span>I&apos;m</span>
        <span className="theme-primary-colour bold"> interested in.</span>
      </h1>

      <div className="interests">
        <div className="wrapper">
          <InterestBox icon={<FaHeart />} title={lovesTitle} list={lovesList} />
          <InterestBox
            icon={<FaArrowUp />}
            title={artistTitleAndToolTip}
            list={artistsList}
            extra={currentlyListening && (
            <li>
              <img src={soundGraphic} alt="Sound playing icon" />
              {' '}
              {currentlyListening}
            </li>
            )}
          />
          <InterestBox icon={<FaSeedling />} title={valuesTitle} list={valuesList} />
          <InterestBox icon={<FaFireAlt />} title={hatesTitle} list={hatesList} />
        </div>
      </div>
    </Layout>
  );
};

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
`;

InterestsPage.propTypes = {
  data: PropTypes.shape({
    contentfulInterests: PropTypes.shape({
      lovesTitle: PropTypes.string.isRequired,
      lovesList: PropTypes.array.isRequired,
      hatesTitle: PropTypes.string.isRequired,
      hatesList: PropTypes.array.isRequired,
      valuesTitle: PropTypes.string.isRequired,
      valuesList: PropTypes.array.isRequired,
      topArtistsTitle: PropTypes.string.isRequired,
    }.isRequired),
  }.isRequired),
};

export default InterestsPage;
