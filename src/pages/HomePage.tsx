import React, { Component, Dispatch } from "react"
import { Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native"
import { Center } from "../components/Center"
import { connect } from "react-redux"
import { addFood } from "../../src/redux/actions/Food"

interface HomePageProps {
    navigation: any,
}

type Props = HomePageProps & LinkDispatchProps

class HomePage extends Component<Props> {
    state = {
        name: ""
    }

    render() {
        return (
            <Center>
                <Text style={styles.title}>Insert Something</Text>
                <TextInput
                    placeholder='Name'
                    style={styles.foodInput}
                />
                <Button
                    title="Insert"
                    onPress={() => {
                        this.props.add(this.state.name)
                        this.state.name = ""
                    }}
                />
                <TouchableOpacity
                    style={styles.flatButton}
                    onPress={() => { this.props.navigation.navigate("Detail") }}>
                    <Text style={styles.flatButtonText}>
                        Go to Detail
                    </Text>
                </TouchableOpacity>
            </Center>
        )
    }
}

// const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
//     const state = {
//         name: ""
//     }

//     return (
//         <Center>
//             <Text style={styles.title}>Insert Something</Text>
//             <TextInput
//                 placeholder='Name'
//                 style={styles.foodInput}
//             />
//             <Button
//                 title="Insert"
//                 onPress={() => {  

//                     state.name = ""
//                  }}
//             />
//             <TouchableOpacity
//                 style={styles.flatButton}
//                 onPress={() => { navigation.navigate("Detail") }}>
//                 <Text style={styles.flatButtonText}>
//                     Go to Detail
//                 </Text>
//             </TouchableOpacity>
//         </Center>
//     )
// }

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    foodInput: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 1,
        padding: 8,
        width: '80%',
        borderRadius: 10,
    },
    flatButton: {
        marginTop: 30,
    },
    flatButtonText: {
        fontSize: 18,
    }
})

interface LinkDispatchProps {
    add: (name: String) => void
}

const mapStateToProps = (state: any) => {
    return {
    }
}

const mapDispatchToProps = (disptach: Dispatch<any>): LinkDispatchProps => {
    return {
        add: (name: String) => disptach(addFood(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)