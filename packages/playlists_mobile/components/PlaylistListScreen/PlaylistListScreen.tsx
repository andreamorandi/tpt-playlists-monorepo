import React, {FC, useEffect, ReactNode} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlaylists} from 'core/store/store';
import {ThunkDispatch} from 'redux-thunk';
import {List} from 'immutable';
import {AnyAction} from 'redux';
import {selectPlaylists} from 'core/store/store';
import {RootState} from 'core/types/store';
import {Playlist} from 'core/types/playlists';
import PlaylistList from './PlaylistList';
import {PlaylistListScreenProps} from './types/playlistListScreen';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const PlaylistListScreen: FC<PlaylistListScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const playlists = useSelector((state: RootState) => selectPlaylists(state));

  useEffect(() => {
    if (!playlists.getIn(['data', 'data']) && !playlists.get('error')) {
      dispatch(fetchPlaylists());
    }
  }, [playlists, dispatch]);

  let content: ReactNode;

  if (playlists.getIn(['data', 'data'])) {
    const playlistsData: Playlist[] = playlists.getIn([
      'data',
      'data',
    ]) as Playlist[];
    const playlistList: List<Playlist> = List(playlistsData);

    const midpoint = Math.ceil(playlistList.size / 2);
    const playlistsFirstHalf = playlistList.slice(0, midpoint);
    const playlistsSecondHalf = playlistList.slice(midpoint);

    content = (
      <>
        <View style={styles.container}>
          <View style={styles.playlistListSection}>
            <Text style={styles.sectionTitle}>Le migliori playlist pop</Text>
            <PlaylistList
              playlists={playlistsFirstHalf}
              navigation={navigation}
            />
          </View>
          <View style={styles.playlistListSection}>
            <Text style={styles.sectionTitle}>Pop per ogni momento</Text>
            <PlaylistList
              playlists={playlistsSecondHalf}
              navigation={navigation}
            />
          </View>
        </View>
      </>
    );
  }

  return <>{content}</>;
};

export default PlaylistListScreen;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    paddingTop: 35,
    backgroundColor: '#131315',
  },
  playlistListSection: {
    paddingTop: 32,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 16,
    color: 'white',
  },
});
