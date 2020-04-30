import * as React from 'react';
import { Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import { useEffect, useState } from 'react';

const ResultShowScreen = ({ navigation }: any) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id: string) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    }

    useEffect(() => {
        getResult(id);
    });

    if (!result) {
        return null;
    }
    else {
        return (
            <>
                {/* <Text> {result.name}  </Text> */}
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }} style={styles.imageStyle} />
                    }}
                />

            </>
        )
    }

}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 5,
        marginBottom: 15,
        marginLeft: 10
    }
})
export default ResultShowScreen;