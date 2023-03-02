import React, {FC} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  PlaylistShowHeaderProps,
  ShowHeaderPlaylist,
} from './types/playlistShowScreen';
import {
  faArrowUpFromBracket,
  faHeart,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';

const PlaylistShowHeader: FC<PlaylistShowHeaderProps> = props => {
  const playlist: ShowHeaderPlaylist = props.playlist;
  return (
    <View style={styles.container}>
      <Image source={{uri: playlist.picture_medium}} style={styles.image} />
      <Text numberOfLines={1} style={styles.title}>
        {playlist.title === 'Estate 2023 - 2022 %u26f1%ufe0f Summer Hits'
          ? 'Estate 2023 - 2022 Summer Hits'
          : playlist.title}
      </Text>
      <Text numberOfLines={1} style={styles.creator}>
        {playlist.creator.name}
      </Text>
      <View style={styles.actions}>
        <View style={styles.circle}>
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            style={styles.circleIcon}
          />
        </View>
        <View style={styles.playButton}>
          <FontAwesomeIcon icon={faShuffle} style={styles.playButtonIcon} />
          <Text style={styles.playButtonText}>Ascolta</Text>
        </View>
        <View style={styles.circle}>
          <FontAwesomeIcon icon={faHeart} style={styles.circleIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 268,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 145,
    height: 145,
    marginVertical: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  creator: {
    marginBottom: 9,
    color: '#8a8b93',
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 50,
    backgroundColor: '#eb4c5b',
  },
  playButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  playButtonIcon: {
    color: 'white',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.25,
    borderColor: '#374151',
  },
  circleIcon: {
    color: '#eb4c5b',
  },
});

export default PlaylistShowHeader;
