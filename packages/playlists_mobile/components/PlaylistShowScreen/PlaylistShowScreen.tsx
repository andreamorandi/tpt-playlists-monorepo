import React, {useEffect, ReactNode, FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlaylistDetails} from 'core/store/store';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {selectPlaylistDetails} from 'core/store/store';
import {RootState} from 'core/types/store';
import {Track} from 'core/types/playlistDetails';
import PlaylistShowHeader from './PlaylistShowHeader';
import PlaylistShowTrack from './PlaylistShowTrack';
import PlaylistShowLoading from './PlaylistShowLoading';
import {PlaylistShowScreenProps} from './types/playlistShowScreen';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const PlaylistShowScreen: FC<PlaylistShowScreenProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const playlistDetails = useSelector((state: RootState) =>
    selectPlaylistDetails(state),
  );
  const {playlistId} = route.params;

  useEffect(() => {
    if (
      !playlistDetails.data.id ||
      playlistDetails.data.id !== parseInt(playlistId, 10)
    ) {
      dispatch(fetchPlaylistDetails(playlistId));
    }
  }, [playlistId, playlistDetails.data.id, dispatch]);

  let content: ReactNode;

  if (playlistDetails.isLoading) {
    content = (
      <View style={styles.container}>
        <PlaylistShowLoading />
      </View>
    );
  } else if (playlistDetails.error) {
    content = <Text>C'è stato un errore nel caricamento delle tracce.</Text>;
  } else if (playlistDetails.data.tracks) {
    const tracks: Track[] = playlistDetails.data.tracks.data as Track[];
    content = (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PlaylistListScreen')}
          style={styles.back}>
          <FontAwesomeIcon icon={faChevronLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <PlaylistShowHeader playlist={playlistDetails.data} />
        <FlatList
          data={tracks}
          renderItem={({item}) => <PlaylistShowTrack track={item} />}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.trackListContainer}
        />
      </View>
    );
  }

  return <>{content || null}</>;
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    position: 'relative',
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#202027',
  },
  back: {
    width: 40,
    height: 40,
    position: 'absolute',
    zIndex: 999,
    left: 20,
    top: 55,
  },
  backIcon: {
    transform: [{scale: 1.5}],
    color: 'white',
  },
  trackListContainer: {
    flex: 1,
    marginTop: 10,
  },
});

export default PlaylistShowScreen;
