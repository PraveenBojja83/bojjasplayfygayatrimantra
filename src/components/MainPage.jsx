import './MainPage.css';
import MusicCard from './MusicCard';
import AudioPlayerBar from './AudioPlayerBar';

const MainPage = () => {
  // For testing, use this audio file from your public folder
  const audioSrc = "/sample-audio.mp3";

  return (
    <main>
      <MusicCard />
      <h4>
        ఓం భూర్భువస్వః తత్స వితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ధియోయోనః ప్రచోదయాత్
      </h4>
      {/* Use the audio player with src prop */}
      <AudioPlayerBar src={audioSrc} />
      {/* For instant test, you can also uncomment below: */}
    </main>
  );
};

export default MainPage;

