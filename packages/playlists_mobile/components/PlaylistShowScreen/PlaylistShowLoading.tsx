import React, {FC} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View, StyleSheet} from 'react-native';

const PlaylistShowLoading: FC = () => {
  return (
    <>
      <View style={styles.imageWrapper}>
        <SkeletonPlaceholder
          borderRadius={10}
          backgroundColor="#131315"
          highlightColor="#8a8b93">
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            <SkeletonPlaceholder.Item width={160} height={160} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <View>
        <SkeletonPlaceholder
          borderRadius={10}
          backgroundColor="#131315"
          highlightColor="#8a8b93">
          <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
            <SkeletonPlaceholder.Item
              width={180}
              height={30}
              style={styles.title}
            />
            <SkeletonPlaceholder.Item width={200} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.actionsWrapper}>
        <SkeletonPlaceholder backgroundColor="#131315" highlightColor="#8a8b93">
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around">
            <SkeletonPlaceholder.Item
              width={40}
              height={40}
              style={styles.title}
              borderRadius={50}
            />
            <SkeletonPlaceholder.Item
              width={150}
              height={40}
              borderRadius={30}
            />
            <SkeletonPlaceholder.Item
              width={40}
              height={40}
              style={styles.title}
              borderRadius={50}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.tracksContainer}>
        <View>
          <SkeletonPlaceholder
            backgroundColor="#131315"
            highlightColor="#8a8b93">
            <SkeletonPlaceholder.Item flexDirection="column">
              <SkeletonPlaceholder.Item
                width={'100%'}
                height={60}
                style={styles.track}
              />
              <SkeletonPlaceholder.Item
                width={'100%'}
                height={60}
                style={styles.track}
              />
              <SkeletonPlaceholder.Item
                width={'100%'}
                height={60}
                style={styles.track}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
        <View>
          <SkeletonPlaceholder
            backgroundColor="#131315"
            highlightColor="#8a8b93">
            <SkeletonPlaceholder.Item flexDirection="column">
              <SkeletonPlaceholder.Item
                width={'100%'}
                height={60}
                style={styles.track}
              />
              <SkeletonPlaceholder.Item
                width={'100%'}
                height={60}
                style={styles.track}
              />
              <SkeletonPlaceholder.Item
                width={'100%'}
                height={60}
                style={styles.track}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      </View>
    </>
  );
};

export default PlaylistShowLoading;

const styles = StyleSheet.create({
  imageWrapper: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 10,
  },
  actionsWrapper: {
    marginVertical: 10,
  },
  track: {
    marginBottom: 10,
  },
  tracksContainer: {
    paddingTop: 30,
  },
});
