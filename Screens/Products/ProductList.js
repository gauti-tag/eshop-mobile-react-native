import React from "react";
import {TouchableOpacity, View, Dimensions} from 'react-native';

var { width } = Dimensions.get('window');

const ProductList = (props) => {
    return (
        <TouchableOpacity style={{width: '50%'}}> {/** Touch the item and event will be triggered**/}
            <View style={{width: width / 2, backgroundColor: 'gainsboro'}}>

            </View>
        </TouchableOpacity>
    )
}

export default ProductList;