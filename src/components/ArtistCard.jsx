import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  const artistId = track?.relationships?.artists?.data?.[0]?.id;
  const artworkUrl = track?.attributes?.artwork?.url;
  const resolvedImage = artworkUrl?.includes('{w}')
    ? artworkUrl.replace('{w}', '440').replace('{h}', '440')
    : artworkUrl;

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${artistId}`)}
    >
      <img
        alt="artist_img"
        src={resolvedImage}
        className="w-full h-56 rounded-lg object-cover"
      />
      <p className="mt-4 font-semibold text-lg text-white truncate">
        {track?.attributes?.artistName}
      </p>
    </div>
  );
};

export default ArtistCard;
