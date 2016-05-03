var React = require('react-native');
var {StyleSheet,View} = React;

import CrosswalkWebView from 'react-native-crosswalk-webview';

var WebViewCrosswalk = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <CrosswalkWebView
                    style={{ flex: 1 }}
                    url="https://www.google.com.pe" />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = WebViewCrosswalk;