import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkillBar = ({ name, percent }) => {
  return (
    <View style={styles.skill}>
      <Text style={styles.skillName}>{name}</Text>
      <View style={styles.skillLevel}>
        <View style={[styles.skillPercent, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.skillPercentNumber}>{percent}%</Text>
    </View>
  );
};

const SkillsCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Skills</Text>
      </View>
      <View style={styles.body}>
        <SkillBar name="Cleaning" percent={60} />
        <SkillBar name="Searching" percent={50} />
        <SkillBar name="Controlling" percent={12} />
        {/* Другие навыки... */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    backgroundColor: '#333',
    padding: 20,
    textAlign: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  body: {
    padding: 20,
  },
  skill: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  skillName: {
    width: "28%",
    fontSize: 16,
  },
  skillLevel: {
    width: "50%",
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20,
  },
  skillPercent: {
    backgroundColor: '#333',
    height: '100%',
  },
  skillPercentNumber: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default SkillsCard;
