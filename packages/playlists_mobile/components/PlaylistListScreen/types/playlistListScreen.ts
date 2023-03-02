import {List} from 'immutable';
import {Playlist} from 'core/types/playlists';
import {NavigationProp} from '@react-navigation/native';

export interface PlaylistListScreenProps {
  navigation: NavigationProp<any>;
}

export interface PlaylistListProps {
  playlists: List<Playlist>;
  navigation: NavigationProp<any>;
}
