import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import yelp from '../../api/yelp';
import ResultList from '../../components/ResultList';

const SearchBar = ({ navigation }: any) => {
    const [term, setTerm] = useState('');
    // const [searchApi, result, errMsg] = useResults();
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm: string) => {
        console.log('function is calling ...')
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'San Francisco'
                }
            });
            console.log('res = ', res.data.businesses.length);
            setResults(res.data.businesses);
        }
        catch (e) {
            setErrMsg('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const filterResultsByPrice = (price: string) => {
        // price === '$' || '$$' || '$$$'

        return results.filter((result: any) => {
            const data = result.price === price ? result : null;
            return data;
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBack} >
                <Feather name='search' size={30} style={styles.inputIcon} />
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Search'
                    value={term}
                    style={styles.inputText}
                    onChangeText={(newTerm) => setTerm(newTerm)}
                    onEndEditing={() => searchApi(term)} />
            </View>
            {/* <Text> {errMsg} </Text>
            <Text> result = {results.length} </Text> */}
            <ScrollView>
                <ResultList
                    title='Cost Effective'
                    result={filterResultsByPrice('$')}
                />
                <ResultList
                    title='Bit Pricer'
                    result={filterResultsByPrice('$$')}

                />
                <ResultList
                    title='Big Spender'
                    result={filterResultsByPrice('$$$')}

                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBack: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    inputText: {
        // paddingLeft: 10,
        flex: 1,
        fontSize: 18,
    },
    inputIcon: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    container: {
        paddingBottom: 60
    }
})

export default SearchBar;