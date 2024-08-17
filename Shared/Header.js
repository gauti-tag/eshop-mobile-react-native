import React from 'react';
import { StyleSheet, Image, SafeAreaView} from 'react-native';

/**
 * A functional component that renders the application header.
 *
 * @return {JSX.Element} The JSX element representing the header.
 */
const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={require('../assets/Logo.png')}
                resizeMode='contain'
                style={{ height: 50 }}
                />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 80 // Todo Delete
    }
})


export default Header;