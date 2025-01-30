import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { dataType, DATA } from "./data/appData";

export default function Index() {

  const [selectedId, setSelectedId] = useState<string>("1")

  type dataType = {
    id: string; //unique identifier
    title: string; //text we see in flatlist
    
  }

  const DATA: dataType[] = [
    {id: '1', title: 'Gautham'},
    {id: '2', title: 'Prajit'},
    {id: '3', title: 'Aney'},
    {id: '4', title: 'Niv'},
    {id: '5', title: 'Maya'},
  ]

  /*

  declaring a function called selectList that receives
  a parameter of type dataType that we will refer to as 'item'.
  I can access the values of the item using dot notation.

  */

  const handleRowPress = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected " + item.title);
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data = {DATA}
            keyExtractor= {(item: dataType) => item.id}
            ItemSeparatorComponent={() => 
              <ListItemSeparator 
                color = {colors.primary}
              />
            }
            renderItem= {({item}) => (
              <ListItem 
                item = {item}
                isSelected = {item.id === selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  }
});
