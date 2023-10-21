import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SubTitle = ({children}) => {
  return (
     <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
      </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
   subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497"
  }, 
})