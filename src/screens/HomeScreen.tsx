import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([]); //as it is array of list objects
  const [inputListName, setInputListName] = useState('');

  const handleAddTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };
  const handleRemoveTask = index => {
    const newArray = tasks.filter((item, idx) => idx !== index);
    setTasks(newArray);
  };

  const handleAddList = () => {
    setLists([...lists, inputListName]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>📝 Task Manager</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputSection}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter a new task..."
            placeholderTextColor="#aaa"
            value={task}
            onChangeText={setTask}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* using map function  */}
        <View style={styles.taskContainer}>
          <View style={styles.listContainer}>
            <TextInput
              placeholder="Enter Name of the List"
              style={styles.textInput}
              value={inputListName}
              onChangeText={setInputListName}
            />
            <Pressable style={styles.listButtons} onPress={handleAddList}>
              <Text>Add List +</Text>
            </Pressable>
          </View>
          {lists !== null ? (
            <FlatList
              data={lists}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable style={styles.listButtons}>
                  <Text style={{fontSize : 20}}>{item}</Text>
                </Pressable>
              )}
            />
          ) : null}
          {tasks.map((item, index) => (
            <View style={styles.taskList} key={index}>
              <Text style={styles.taskListItems}>{item}</Text>

              <Pressable
                style={styles.deleteButton}
                onPress={() => handleRemoveTask(index)}
              >
                <Text>🗑️</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#324852',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#ffb703',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  taskContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  taskContainerHeader: {
    fontSize: 24,
    fontWeight: 600,
    color: '#fff',
  },
  taskList: {
    marginTop: 20,
    backgroundColor: '#318296ff',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  taskListItems: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 500,
    marginVertical: 6,
    padding: 10,
  },
  deleteButton: {},
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listButtons: {
    backgroundColor: '#ffb703',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 4,
    marginTop: 6,
  },
});
