import { useState, useEffect } from 'react';
import { getLastPlayedTrack, getCurrentlyPlaying } from '../hooks/useSpotify.js';
import { useTranslation } from 'react-i18next';

const CurrentlyPlaying = () => {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        let trackData = await getCurrentlyPlaying(); 

        if (!trackData || trackData.message) {
          trackData = await getLastPlayedTrack();
        }

        setTrack(trackData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 5000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-700 rounded-md shadow-md">
        Erro: {error}
      </div>
    );
  }

  if (!track) {
    return (
      <div className="p-4 text-gray-700 rounded-md shadow-md">
        Carregando...
      </div>
    );
  }


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h1 className="font-mono text-white text-center text-2xl mb-4">
        {t('Spotify')}{' '}
        <a
          href="https://open.spotify.com/user/lyixkn1qhupjuexfkygpbzmnd"
          className="text-green-500 underline"
          target='_blank'
          rel="noopener noreferrer"
        >
          Spotify
        </a>
      </h1>
      {track.message ? (
        <div className="text-center text-white">{track.message}</div>
      ) : (
        <div className="flex items-center">
          <img
            src={track.albumImage}
            alt="Álbum"
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div className="ml-2 flex-1 text-white">
            <h2 className="text-xl font-semibold mb-1">{track.name}</h2>
            <p className="text-sm mb-2">Artista(s): {track.artists}</p>
            <p className="text-sm">Álbum: {track.album}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentlyPlaying;
