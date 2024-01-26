'use-client'
import React, { MutableRefObject, useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useMusicPlayer } from './MusicPlayerProvider';



function MusicPlayer(songs: any) {

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isRepeat, setIsRepeat] = useState(false);
	const [isShuffle, setIsShuffle] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const [currentTime, setCurrentTime] = useState(0);
	const [totalTime, setTotalTime] = useState(0);
	const [favorites, setFavorites] = useState<any[]>([]);


	const audioRef = useRef() as MutableRefObject<HTMLAudioElement>;
	const { musicList } = useMusicPlayer();



	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying, currentSongIndex]);

	useEffect(() => {
		// randomBgColor();
		console.log(audioRef, audioRef.current)
	}, [currentSongIndex])

	useEffect(() => {
		audioRef.current.volume = volume;
	}, [volume]);

	useEffect(() => {
		audioRef.current.addEventListener('timeupdate', updateTime);
		audioRef.current.addEventListener('loadedmetadata', setTotalDuration);

		// return () => {
		// 	audioRef.current.removeEventListener('timeupdate', updateTime);
		// 	audioRef.current.removeEventListener('loadedmetadata', setTotalDuration);
		// };
	}, [currentSongIndex]);

	const updateTime = () => {
		setCurrentTime(audioRef.current.currentTime);
	};

	const setTotalDuration = () => {
		setTotalTime(audioRef.current.duration);
	};


	const playPauseHandler = () => {
		setIsPlaying(!isPlaying);
	};

	const skipTrackHandler = (direction: any) => {
		if (isShuffle) {
			setCurrentSongIndex(getRandomIndex());
		} else {
			console.log(musicList.length, musicList)
			setCurrentSongIndex((prevIndex) =>
				direction === 'next' ? (prevIndex + 1) % musicList.length : (prevIndex - 1 + musicList.length) % musicList.length
			);
		}
	};

	const getRandomIndex = () => {
		return Math.floor(Math.random() * musicList.length);
	};

	const repeatHandler = () => {
		setIsRepeat(!isRepeat);
	};

	const shuffleHandler = () => {
		setIsShuffle(!isShuffle);
	};

	const timeUpdateHandler = () => {
		// Handle time update if needed
	};

	const formatTime = (time: any) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};


	const onSeekChange = (e: any) => {
		const seekTime = e.target.value;
		audioRef.current.currentTime = (seekTime / 100) * totalTime;
	};

	// function randomBgColor() {
	// 	let bg_colour: any = document.querySelector("footer");

	// 	let red = Math.floor(Math.random() * 256) + 64;
	// 	let green = Math.floor(Math.random() * 256) + 64;
	// 	let blue = Math.floor(Math.random() * 256) + 64;

	// 	let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

	// 	bg_colour.style.background = bgColor;
	// }
	useEffect(() => {
		console.log("set", musicList, musicList[0])
		setFavorites(JSON.parse(window.localStorage.getItem('favList') || '[]'))
	}, [musicList])

	function addToFav(event: any, index: any) {
		let getFavFromLocalStorage = window.localStorage.getItem('favList') || '[]'
		if (getFavFromLocalStorage !== null) {
			let newList = JSON.parse(getFavFromLocalStorage);
			newList.push(musicList[0])
			window.localStorage.setItem('favList', JSON.stringify(newList))
			setFavorites(newList);
		} else {
			window.localStorage.setItem('favList', JSON.stringify(musicList[0]))
			if (musicList[0].length > 0) {
				setFavorites([musicList[0]])
			}
		}
	}

	function handleMessage(event: any) {
		if (event.data.message === "Add To Recent") {
			setIsPlaying(prevIsPlaying => !prevIsPlaying);

		}
	}

	useEffect(() => {
		window.addEventListener('message', handleMessage);

		return () => {
			window.removeEventListener('message', handleMessage);
		}
	}, [])


	return (
		<>
			<footer className="bg-colour">
				<audio
					onEnded={() => (isRepeat ? audioRef.current.play() : skipTrackHandler('next'))}
					onTimeUpdate={timeUpdateHandler}
					ref={audioRef}
					src={musicList[currentSongIndex]?.audioUrl}
				/>
				<div className="active-song-description">

					<div id="song-image" className="track-art">
						<img src={musicList[currentSongIndex]?.imageUrl} />
					</div>

					<div className="song-desc">
						<div className="track-name">
							{musicList[currentSongIndex]?.name}
						</div>
						<div className="track-artist">
							NCS
						</div>
					</div>

					<div className="heart-and-ban-icon">
						<span style={{ padding: "0px 5px" }} onClick={(event) => addToFav(event, 0)}>
							{
								favorites.some((song: any) => song.name === musicList[currentSongIndex]?.name) ?
									<img className="svg-inline--fa fa-heart fa-w-16" style={{ height: "auto" }} src="/heart-solid.png" />
									:
									<img className="svg-inline--fa fa-heart fa-w-16" style={{ height: "auto" }} src="/heart-regular.png" />
							}
						</span>
						<span style={{ padding: "0px 5px" }}>
							<i className="fas fa-ban"></i>
						</span>
					</div>

				</div>

				<div className="player">


					{/* <audio src="media\Coldplay - Yellow.mp3" className="audio" controls></audio> */}

					<div className="controls">
						<div onClick={shuffleHandler} style={{ filter: isShuffle ? 'drop-shadow(0 4px 1px black' : '' }}>
							<i className="fas fa-random" />
						</div>
						<div className="prev-track" onClick={() => skipTrackHandler('prev')}>
							<i className="fas fa-step-backward" />
						</div>
						<div className="playpause-track" onClick={playPauseHandler}>
							{isPlaying ?
								<img className="" src="/pause.png" style={{ width: "1em", height: "1em" }} />
								:
								<img className="" src="/play.png" style={{ width: "1em", height: "1em" }} />
							}

						</div>
						<div className="next-track" onClick={() => skipTrackHandler('next')}>
							<i className="fas fa-step-forward">
							</i>
						</div>
						<div onClick={repeatHandler} style={{ filter: isRepeat ? 'drop-shadow(0 4px 1px black' : '' }}>
							<i className="fas fa-redo">
							</i>
						</div>
					</div>

					<div id="slider">

						<div className="current-time">
							{formatTime(currentTime)}
						</div>
						<div className="slidecontainer">
							<input
								type="range"
								min="0"
								max="100"
								className="seek_slider"
								id="myRange"
								value={(currentTime / totalTime) * 100 || 0}
								onChange={onSeekChange}
							/>
						</div>
						<div className="total-duration">
							{musicList[currentSongIndex]?.duration}
						</div>
					</div>
				</div>

				<div className="extras">
					<div>
						<i className="fas fa-list-ul"></i>
					</div>
					<div>
						<i className="fas fa-laptop"></i>
					</div>
					<div>
						<i className="fas fa-volume-up"></i>
					</div>
					<div className="slidecontainer" style={{ width: "30%" }}>
						<input
							type="range"
							step="0.01"
							value={volume * 100}
							className="seek_slider volume_slider"
							id="myRange"
							style={{ marginTop: "0px" }}
							onChange={(e) => setVolume(parseFloat(e.target.value) / 100)}
						/>
					</div>
					<div>
						<i className="fas fa-expand-alt"></i>
					</div>
				</div>


			</footer>


		</>
	);
};

export default MusicPlayer;
