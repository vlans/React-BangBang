/**
 * Created by Jason on 17/3/8.
 */
import React, { Component } from 'react';
import { StyleSheet, TabBarIOS, Text, View } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

class TabBarList extends Component {
    _renderContent ( color ) {
        return (
            <View style={styles.content}>
                <Text>天天向上，好好学习。</Text>
            </View>
        )
    }

    render () {
        return (
            <TabBarIOS
                tintColor="orange"
            >
                <Icon.TabBarItem
                    iconName="ios-home"
                    selected={true}
                >
                    {this._renderContent( 'black' )}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    iconName="ios-search"
                >
                    {this._renderContent( 'black' )}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    iconName="ios-person"
                >
                    {this._renderContent( 'black' )}
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}

const styles = StyleSheet.create( {
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
} )

export default TabBarList