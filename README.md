# App 1 : HelloWorld

Date : 2021-07-22

Time : 19:00-21:30

App Name : Hello World

---

## Preview

![Hello World](https://zerex.net/app/wp-content/uploads/2021/07/App1_HelloWorld.jpeg)

---

## Tasks

Basic

1. Replace Default Text Element inside the Main View

    ```<Text style={{ color: '#FF0000' }}>Hello World!!!</Text>```
2. Add Custom Styles to the end of the Stylesheet

    _add under the "styles = Stylesheet.create ..." statement._

    ```CSS
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
   ```

3. Prepare Countries Data

    _add under the "export default ..." statement._

    ```JSX
    const countriesArray = [{"name":"Hong Kong"},{"name":"Taiwan"},{"name":"Korea"},{"name":"Japan"}];
    const [countriesData, setCountriesData] = useState([]);
    ```

4. Add the Simple List of Countries(Hard-coding Data)

    _add under your "Task 1" statements._

    ```JSX
    <FlatList
        data={countriesArray}
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>} />
    ```

5. Update Import Statements

    _update the first few lines(Line 1 to Line 2)_

    ```JSX
    import React, {useEffect, useState} from "react";
    import { StyleSheet, Image, Text, View, FlatList } from "react-native";
    ```

Extra

6. Use Fetch API get countries data from the Internet

    _add under your "Task 3" statements._

    ```JSX
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
    ```

7. Add the Complex List of Countries(API Data)

   _add under your "Task 4" statements._

   ```JSX
   <FlatList
        data={countriesData}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={_keyExtractor} />
   ```

    _add under your "import..." statements._

   ```JSX
   const ListItem = (props) => {
       return (
           <View style={{ flexDirection: "row" }}>
               <Image source={{ uri: 'https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png' }} style={styles.flag} />
               <Text style={[styles.text, {color: '#FAFAFA'}]}>{props.item.name}, {props.item.capital}</Text>
           </View>
       );
   };
   ```

8. Use Your Phone to Scan the QR code

   _check the look and feel with your phone._

---

## References

* Zip File(Repository)
