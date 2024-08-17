import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList, Text } from "react-native";
import { Container, Header, Icon, Item, Input} from "native-base";

import ProductList from "./ProductList";

const data = require('../../assets/data/products.json');

const ProductContainer = () => {
    // Manage products state
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([]);
        }
    }, []);
    console.log(products.map( i => i.id ));
    // onFocus={}
    // onChangeText={(text) => }
    return (
        <Container>
            <Header searchBar rounded>
               <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="Search" />
                </Item>
           </Header>
            <View>
                <Text>
                    Product container
                </Text>

                <View style={{ marginTop: 100 }}>
                    <FlatList
                        numColumns={2}
                        data={products}
                        renderItem={ ({item})  => <ProductList key={item.id} item={item}/> }
                        keyExtractor={item => item.name}
                    />
                </View>
            </View>
        </Container>
    )
};

export default ProductContainer;