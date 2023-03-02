import {NavigationProp} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {Track} from 'core/types/playlistDetails';
import {RootStackParamList} from '../../../App';

export interface PlaylistShowScreenProps {
  navigation: NavigationProp<any>;
  route: RouteProp<RootStackParamList, 'PlaylistShowScreen'> & {
    params: {
      playlistId: string;
    };
  };
}

export interface PlaylistShowTrackProps {
  track: Track;
}

export interface ShowHeaderPlaylist {
  id: number;
  title: string;
  description: string;
  duration: number;
  nb_tracks: number;
  fans: number;
  picture_medium: string;
  creator: {
    id: number;
    name: string;
  };
}

export interface PlaylistShowHeaderProps {
  playlist: ShowHeaderPlaylist;
}
