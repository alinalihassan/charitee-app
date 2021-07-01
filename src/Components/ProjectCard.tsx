import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, ImageBackground, Dimensions,
  StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Colors from '../Styles/Colors';
import { Project } from '../Utils/Interfaces';

type ProjectCardProps = {
  project: Project,
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => {
        navigation.navigate(
          'ProductDescriptionAbout',
        );
      }}
    >
      <ImageBackground
        style={styles.mainImage}
        source={{ uri: project.images[0].url }}
        imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.themesRow}
        >
          {project.themes.map((data) => (
            <View
              key={data.id}
              style={styles.labelContainer}
              onStartShouldSetResponder={() => true}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.White,
                  fontWeight: '500',
                }}
              >
                {data.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
      <View style={styles.cardData}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.summary}</Text>

        <View style={styles.separator} />

        <View style={styles.dataContentWrapper}>
          <Text style={styles.percent}>{`${((project.funding / project.goal) * 100).toFixed(2)} %`}</Text>
          <Text style={styles.goal}>{`${project.goal} €`}</Text>
        </View>
        <Progress.Bar
          progress={project.funding / project.goal}
          width={widthScreen / 1.28}
          height={8}
          borderRadius={12}
          borderWidth={0}
          color="#4B97FC"
          unfilledColor="#E3F0FC"
        />
      </View>
    </TouchableOpacity>
  );
}

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  cardWrapper: {
    width: widthScreen - 48,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginVertical: 8,
  },
  mainImage: {
    width: '100%',
    height: 184,
  },
  themesRow: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  cardData: {
    marginVertical: 16,
    marginHorizontal: 32,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#05263D',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6D7E92',
    marginTop: 8,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADFE6',
    marginTop: 8,
    marginBottom: 8,
  },
  dataContentWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  goal: {
    color: '#073C7A',
    fontSize: 18,
    fontWeight: '600',
  },
  percent: {
    color: '#4B97FC',
    fontSize: 18,
    fontWeight: '700',
  },
  labelContainer: {
    height: 30,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
    borderRadius: 8,
    justifyContent: 'center',
    marginLeft: 8,
  },
});
