import { useState } from 'react';
import ReactPlayer from 'react-player';

function MusicPlayer(songs: any) {
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	const playPauseHandler = () => {
		setIsPlaying(!isPlaying);
	};

	const onSongChange = (newIndex: any) => {
		setCurrentSongIndex(newIndex);
		setIsPlaying(true);
	};

	const playAllHandler = () => {
		setCurrentSongIndex(0);
		setIsPlaying(true);
	};

	const nextSongHandler = () => {
		const newIndex = (currentSongIndex + 1) % songs.length;
		onSongChange(newIndex);
	};

	const prevSongHandler = () => {
		const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
		onSongChange(newIndex);
	};

	return (
		<div>
			<div>
				<h2>{songs[currentSongIndex].singer}</h2>
				<img src={songs[currentSongIndex].image.url} alt={`Cover of ${songs[currentSongIndex].singer}`} />
				<p>{songs[currentSongIndex].audioPath}</p>
			</div>
			<div>
				<button onClick={playAllHandler}>Play All</button>
				<button onClick={prevSongHandler}>Previous</button>
				<button onClick={playPauseHandler}>{isPlaying ? 'Pause' : 'Play'}</button>
				<button onClick={nextSongHandler}>Next</button>
			</div>
			<ReactPlayer
				url={songs[currentSongIndex].audioPath}
				playing={isPlaying}
				controls
			/>
		</div>
	);
};

export default MusicPlayer;
