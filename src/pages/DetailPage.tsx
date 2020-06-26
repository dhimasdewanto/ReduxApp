import React from "react"
import { Text, StyleSheet } from "react-native"
import { Center } from "../components/Center"
import { deleteFood } from "../../src/redux/actions/Food"
import { connect } from "react-redux"

interface DetailPageProps { }

const DetailPage: React.FC<DetailPageProps> = ({ }) => {
    return (
        <Center>
            <Text style={styles.title}>Detail Page</Text>
        </Center>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    }
})

const mapStateToProps = (state: any) => {
    return {
        foods: state.foodReducer.foodList,
    }
}

const mapDispatchToProps = (disptach: any) => {
    return {
        delete: (key: Number) => disptach(deleteFood(key)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)