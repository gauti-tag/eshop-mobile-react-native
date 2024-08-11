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

    return (
        <View>
            <Text>
                Product container
            </Text>

            <View style={{ marginTop: 100 }}>
                <FlatList
                    horizontal
                    data={products}
                    renderItem={({ item }) => <ProductList key={item.key} item={item.brand}/>} // <Text>{item.brand}</Text>
                     keyExtractor={item => item.name}
                />
            </View>
        </View>
    )
}


export default ProductContainer;