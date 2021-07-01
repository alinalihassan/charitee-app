import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../Styles/Colors';
import ProjectCard from '../../Components/ProjectCard';
import FilterChip from '../../Components/FilterChip';
import { ManyDataResponse, Project } from '../../Utils/Interfaces';

enum ContentType {
  Projects = 'Projects',
  Charities = 'Charities',
}

const Projects = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('Projects');
  const [screenWidth, setScreenWidth] = useState(0);

  const { width } = Dimensions.get('window');
  const scrollEnabled = screenWidth > width;

  useEffect(() => {
    fetch('https://www.charit.ee/api/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<ManyDataResponse>;
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }: {item: Project}) => (
    <ProjectCard
      key={item.title}
      project={item}
    />
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Projects</Text>
        <View style={styles.searchWrapper}>
          <MaterialIcons name="search" size={24} color="#B3BDCB" style={styles.inputImageLock} />
          <TextInput
            style={styles.searchInput}
            value={search}
            placeholder="Enter the project name"
            placeholderTextColor={Colors.textInputColor}
            autoCapitalize="none"
            onChangeText={setSearch}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.mainWrapperButton}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={(w) => setScreenWidth(w)}
        >
          {Object.values(ContentType).map((key) => (
            <FilterChip
              onPress={() => setFilter(key)}
              selected={filter === key}
              title={key}
              key={key}
            />
          ))}
        </ScrollView>
      </View>
      {isLoading ? <ActivityIndicator size="large" style={styles.loadingBar} /> : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          style={styles.projectsList}
        />
      )}
    </SafeAreaView>
  );
};

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  projectsList: {
    backgroundColor: '#F2F5FC',
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  titleText: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.black,
    marginHorizontal: 24,
  },
  searchWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    borderColor: '#F2F5FC',
    borderRadius: 8,
    backgroundColor: '#F2F5FC',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen - 48,
  },
  searchInput: {
    flex: 1,
    margin: 8,
  },
  inputImageLock: {
    marginLeft: 8,
  },
  mainWrapperButton: {
    marginTop: 16,
    paddingLeft: 16,
  },
  loadingBar: {
    height: heightScreen / 2,
  },
});

export default Projects;
