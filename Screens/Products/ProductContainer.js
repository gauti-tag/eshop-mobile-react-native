import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";

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
    return (
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
    )
};

export default ProductContainer;