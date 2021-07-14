import React, {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Pressable, Alert } from "react-native";

const ListItem = (props) => {
    return (
        <View>
            <Text onPress={() => Alert.alert(`The Capital of ${props.item.name} is ${props.item.capital}`)} style={[styles.text, {color: '#FAFAFA'}]}>{props.item.name},{props.item.capital}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    // TODO: 2. Add custom styles
    header: {
        fontSize: 24,
        fontWeight: "bold",
    },
    // TODO: 5. Add List styles
    listContainer: {
        padding: 30,
        backgroundColor: '#483D8B',
        color: '#FAFAFA',
    },
    text: {
        margin: 10,
        fontSize: 20,
    }
});

export default function App() {

    {/* TODO: 3. Prepare Countries Data */}
    // array data
    const countriesArray = [{"name":"Afghanistan"},{"name":"Åland Islands"},{"name":"Albania"},{"name":"Algeria"}]
    // api data
    const [countriesData, setCountriesData] = useState([]);

    // TODO: 6. Use Fetch API get countries data
    function fetchCountriesData() {
        fetch('https://restcountries.eu/rest/v2/region/asia?fields=name;capital;numericCode')
            .then((response) => response.json())
            .then((json) => setCountriesData(json))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetchCountriesData();
    });

    function _keyExtractor(item, index) {
        return item.numericCode;
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Open up App.js to start working on your app!</Text>
            {/* TODO: 1. Add Text Element */}
            <Text style={styles.header}>Hello World!!!</Text>

            {/* TODO: 4. Add List of Countries */}
            {/* version 1. simple item, data from static array */}
            <FlatList
                data={countriesArray}
                renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>} />
            {/* version 2. standalone item, data from api */}
            <FlatList
                data={countriesData}
                contentContainerStyle={styles.listContainer}
                renderItem={({item}) => <ListItem item={item} />}
                keyExtractor={_keyExtractor} />
        </View>
    );
}
