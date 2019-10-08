import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class TodoItemList extends React.Component {
    render() {
        console.log("Item rendering");
        const {text, id, checked, onToggle} = this.props;
        
        return(
            <View style={styles.todoItem}
                  onStartShouldSetResponder={()=> onToggle(id)} >
                <Text style={[styles.remove, styles.todoItemText]}>
                    &times;
                </Text>
                <Text style={checked === true ? styles.todoItemTextChecked : styles.todoItemText}>
                    {text}
                </Text>
                <View>
                    {
                        checked && <Text style={[styles.checkedMark, styles.todoItemText]}>✓</Text>
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoItem: {
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
    },

    todoItemText: {
        fontSize: 20,
    },

    remove: {
        marginLeft: 20,
        marginRight: 30,
        color : "#e64980",
        fontWeight: "600",
    },

    todoItemTextChecked: {
        fontSize: 20,
        textDecorationLine: "line-through",
        color: "#adb5bd",
    },

    checkedMark: {
        marginLeft: 210,
        color: "#3bc9db",
        fontWeight: "800",
    }
})