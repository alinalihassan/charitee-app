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
import { FAB } from 'react-native-paper';
import Colors from '../../Styles/Colors';
import ProjectCard from '../../Components/ProjectCard';
import FilterChip from '../../Components/FilterChip';
import { ManyDataResponse, Project, Theme } from '../../Utils/Interfaces';
import FilterModal from '../../Components/FilterModal';

enum ContentType {
  Projects = 'Projects',
  Charities = 'Charities',
}

interface CheckedTheme extends Theme {
  checked: boolean;
}

const Projects = () => {
  const [themes, setThemes] = useState<CheckedTheme[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('Projects');
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  const { width } = Dimensions.get('window');
  const scrollEnabled = screenWidth > width;

  useEffect(() => {
    fetch('https://www.charit.ee/api/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<ManyDataResponse<Project>>;
      })
      .then((json) => {
        setProjects(json.data);
      })
      .catch((error) => console.error(error));

    fetch('https://www.charit.ee/api/themes')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<ManyDataResponse<Theme>>;
      })
      .then((json) => {
        const data = json.data.map((x) => ({ ...x, checked: false }));
        setThemes(data);
      })
      .catch((error) => console.error(error));

    setLoading(false);
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
          data={projects}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          style={styles.projectsList}
        />
      )}
      <FAB
        style={styles.fab}
        icon="filter"
        onPress={() => setOpenFilters(true)}
      />
      <FilterModal
        visible={openFilters}
        setVisibility={setOpenFilters}
        themes={themes}
        setThemes={setThemes}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.appHeaderColor,
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
