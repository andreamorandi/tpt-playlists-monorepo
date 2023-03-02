import React, {FC} from 'react';
import {List} from 'immutable';
import {formatNumber} from 'core/helpers/format';
import {Playlist} from 'core/types/playlists';
import {PlaylistListProps} from './types/playlistListScreen';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const PlaylistList: FC<PlaylistListProps> = props => {
  const playlists: List<Playlist> = props.playlists as List<Playlist>;
  const navigation = props.navigation;

  const renderPlaylistItem = ({item}: {item: Playlist}) => (
    <TouchableOpacity
      key={item.id}
      style={styles.slide}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('PlaylistShowScreen', {playlistId: item.id})
      }>
      <View>
        <Image source={{uri: item.picture_medium}} style={styles.image} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {item.title === 'Estate 2023 - 2022 %u26f1%ufe0f Summer Hits'
          ? 'Estate 2023 - 2022 Summer Hits'
          : item.title}
      </Text>
      <Text numberOfLines={1} style={styles.details}>
        {item.nb_tracks} brani - {formatNumber(155000)} fan
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={playlists.toArray()}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: Playlist) => item.id.toString()}
      renderItem={renderPlaylistItem}
    />
  );
};

export default PlaylistList;

const styles = StyleSheet.create({
  slide: {
    marginLeft: 16,
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
    color: 'white',
  },
  details: {
    marginTop: 4,
    fontSize: 12,
    color: '#b8b8b8',
    textAlign: 'center',
  },
});
