import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

interface MyProps {
    title: string;
    result: any;
    navigation: any
}

const ResultList = (props: MyProps) => {
    if (!props.result.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.resultListData}> {props.title} </Text>
            {/* <Text> {props.result.length} </Text>
            {props.result.map((r: any) => (<Text> {r.name} </Text>))} */}

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={props.result}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('ResultShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flex: 1
    },
    resultListData: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 15
    }
})

export default withNavigation(ResultList);