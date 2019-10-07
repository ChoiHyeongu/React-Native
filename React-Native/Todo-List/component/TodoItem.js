import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class TodoItemList extends React.Component {
    render() {
        console.log("Item rendering");
        const {text, id} = this.props;
        
        return(
            <View style={styles.todoItem}>
                <Text>
                    &times;
                </Text>
                <Text style={styles.todoItem}>
                    {text}
                </Text>
                <Text>
                    ✓
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
    },

    todoItemText: {
        fontSize: 20,
    }
})