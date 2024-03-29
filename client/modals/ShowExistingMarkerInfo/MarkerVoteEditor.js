import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { voteMarker } from "../../services/markerService";

// vote up / down an existing marker
export function MarkerVoteEditor() {
  const [marker] = useSubject(marker$);

  return (
    <View style={styles.thumbsContainer}>
      <ButtonIcon iconName="voteUp" onPress={() => voteMarker(1)} />
      <Text style={[styles.generalText, styles.scoreText]}>{marker.score}</Text>
      <ButtonIcon iconName="voteDown" onPress={() => voteMarker(-1)} />
    </View>
  );
}
