import React from 'react';
import { View } from 'react-native';
import { LearnCard } from '../../bitComponents/index.js';
import LearnCardListStyle from "./learncardliststyle.js";

function LearnCardList(props) {
    return (
        <View style={LearnCardListStyle.container}>
            <LearnCard />
        </View>
    );
}

export default LearnCardList;