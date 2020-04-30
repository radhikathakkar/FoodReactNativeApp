import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import yelp from '../api/yelp';



const ResultsDetail = ({ result }: any) => {

    return (
        <View style={styles.resultDataMain}>
            <Image
                source={{ uri: result.image_url }}
                style={styles.resultImage}
            />
            <Text style={styles.resultTitle} > {result.name} </Text>
            <Text> {result.rating} stars, {result.review_count} Reviews  </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    resultDataMain: {
        marginLeft: 15,
    },
    resultImage: {
        width: 250,
        height: 200,
        borderRadius: 5,
        marginRight: 15,
    },
    resultTitle: {
        fontSize: 16,
        fontWeight: "bold",
        // padding: 10,
    }
})
export default ResultsDetail;
