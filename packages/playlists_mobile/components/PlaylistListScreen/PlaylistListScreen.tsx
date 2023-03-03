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
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {PlaylistListScreenProps} from './types/playlistListScreen';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const PlaylistListScreen: FC<PlaylistListScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const playlists = useSelector((state: RootState) => selectPlaylists(state));

  useEffect(() => {
    if (!playlists.data.data && !playlists.error) {
      dispatch(fetchPlaylists());
    }
  }, [playlists.data.data, dispatch, playlists.error]);

  let content: ReactNode;

  if (playlists.isLoading) {
    content = (
      <View style={styles.container}>
        <View style={styles.playlistListSection}>
          <Text style={styles.titleSection}>Le migliori playlist pop</Text>
          <SkeletonPlaceholder
            borderRadius={10}
            backgroundColor="#202027"
            highlightColor="#8a8b93">
            <SkeletonPlaceholder.Item
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly">
              <SkeletonPlaceholder.Item width={160} height={160} />
              <SkeletonPlaceholder.Item width={160} height={160} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
        <View style={styles.playlistListSection}>
          <Text style={styles.titleSection}>Pop per ogni momento</Text>
          <SkeletonPlaceholder
            borderRadius={10}
            backgroundColor="#202027"
            highlightColor="#8a8b93">
            <SkeletonPlaceholder.Item
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly">
              <SkeletonPlaceholder.Item width={160} height={160} />
              <SkeletonPlaceholder.Item width={160} height={160} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      </View>
    );
  } else if (playlists.error) {
    content = <Text>C'è stato un errore nel caricamento delle playlist.</Text>;
  } else if (playlists.data.data) {
    const playlistsData: Playlist[] = playlists.data.data;
    const playlistList: List<Playlist> = List(playlistsData);

    const midpoint = Math.ceil(playlistList.size / 2);
    const playlistsFirstHalf = playlistList.slice(0, midpoint);
    const playlistsSecondHalf = playlistList.slice(midpoint);

    content = (
      <>
        <View style={styles.container}>
          <View style={styles.playlistListSection}>
            <Text style={styles.titleSection}>Le migliori playlist pop</Text>
            <PlaylistList
              playlists={playlistsFirstHalf}
              navigation={navigation}
            />
          </View>
          <View style={styles.playlistListSection}>
            <Text style={styles.titleSection}>Pop per ogni momento</Text>
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
  titleSection: {
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 16,
    color: 'white',
  },
});
