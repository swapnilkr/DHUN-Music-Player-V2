// musicPlayerContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface MusicPlayerContextProps {
    musicList: any[];
    setMusicList: React.Dispatch<React.SetStateAction<any[]>>;
}

interface Props {
    children: React.ReactNode;
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(undefined);

export const MusicPlayerProvider: React.FC<Props> = ({ children }) => {
    const [musicList, setMusicList] = useState<any[]>([]);

    return (
        <MusicPlayerContext.Provider value={{ musicList, setMusicList }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusicPlayer = () => {
    const context = useContext(MusicPlayerContext);
    if (!context) {
        throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
    }
    return context;
};
