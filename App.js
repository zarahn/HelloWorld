// TODO: Task 5. Update Import Statements
// 5A) change Line 1 to import React, {useEffect, useState} from "react";
// 5B) add "FlatList, Image" into Line 2
import React, {useEffect, useState} from "react";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";

const ListItem = (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image source={{ uri: 'https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png' }} style={styles.flag} />
            <Text style={[styles.text, {color: '#FAFAFA'}]}>{props.item.name}, {props.item.capital}</Text>
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
    // TODO: Task 2. Add Custom Styles
    dummyText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    listContainer: {
        padding: 30,
        backgroundColor: '#483D8B',
        color: '#FAFAFA',
    },
    flag: {
        width: 100,
        height: 100,
    },
    text: {
        margin: 10,
        fontSize: 20,
    },
    level: {
        color: '#FF0000',
    }
});

export default function App() {

    {/* TODO: Task 3. Prepare Countries Data */}
    // array data
    const countriesArray = [{"name":"Hong Kong"},{"name":"Taiwan"},{"name":"Korea"},{"name":"Japan"}];
    // api data
    const [countriesData, setCountriesData] = useState([]);

    // TODO: Task 6. Use Fetch API get countries data
    function fetchCountriesData() {
        fetch('https://restcountries.eu/rest/v2/region/asia?fields=name;capital;numericCode;flag')
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
    // END of Task 6

    return (
        <View style={styles.container}>
            <Text style={styles.level}>Edit 1: Add Text Element</Text>
            {/* TODO: Task 1. Replace Default Text Element */}
            <Text style={styles.dummyText}>Hello World!!!</Text>

            {/* TODO: Task 4. Add List of Countries */}
            {/* version 1. simple item, data from static array */}
            <Text style={styles.level}>Edit 2: Add Simple List</Text>
            <FlatList
                data={countriesArray}
                renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>} />
            {/* TODO: Task 7. Add the Custom List of Countries */}
            {/* version 2. standalone item, data from api */}
            <Text style={styles.level}>Edit 3: Add Complex List</Text>
            <FlatList
                data={countriesData}
                contentContainerStyle={styles.listContainer}
                renderItem={({item}) => <ListItem item={item} />}
                keyExtractor={_keyExtractor} />
        </View>
    );
}
