import React, {FC} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {PlaylistShowTrackProps} from './types/playlistShowScreen';
import {Track} from 'core/types/playlistDetails';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

const PlaylistShowTrack: FC<PlaylistShowTrackProps> = props => {
  const track: Track = props.track;

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: track.album.cover_small}} style={styles.image} />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.title} numberOfLines={1}>
          {track.title}
        </Text>
        <Text numberOfLines={1} style={styles.artist}>
          {track.artist.name}
        </Text>
      </View>
      <View style={styles.iconWrapper}>
        <FontAwesomeIcon icon={faHeart} style={styles.icon} />
        <FontAwesomeIcon icon={faEllipsis} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#202027',
    backgroundColor: '#131315',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  infoWrapper: {
    flex: 3,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  artist: {
    fontSize: 14,
    fontWeight: '300',
    color: '#b8b8b8',
  },
  iconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {
    color: '#8a8b93',
  },
});

export default PlaylistShowTrack;
