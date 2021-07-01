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
import { Project } from '../../Utils/Interfaces';

const Projects = () => {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('Projects');
  const [screenWidth, setScreenWidth] = useState(0);

  const { width } = Dimensions.get('window');
  const scrollEnabled = screenWidth > width;

  useEffect(() => {
    fetch('https://www.charit.ee/api/projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<{ data: Project[] }>;
      })
      .then((data) => {
        setData(data.data);
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
    <>
      <SafeAreaView style={styles.mainContainer1} />
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.mainHeader}>
          <View style={styles.headerContainer}>
            <>
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
            </>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.mainWrapperButton}
              scrollEnabled={scrollEnabled}
              onContentSizeChange={(w) => setScreenWidth(w)}
            >
              <FilterChip
                onPress={() => setFilter('Projects')}
                selected={filter === 'Projects'}
                title="Projects"
              />
              <FilterChip
                onPress={() => setFilter('Charities')}
                selected={filter === 'Charities'}
                title="Charities"
              />
            </ScrollView>
          </View>
        </View>
        {isLoading ? <ActivityIndicator size="large" style={styles.loadingBar} /> : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainContainer1: {
    backgroundColor: Colors.White,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2F5FC',
  },
  mainHeader: {
    backgroundColor: Colors.White,
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: 'center',
    marginTop: 40,
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
