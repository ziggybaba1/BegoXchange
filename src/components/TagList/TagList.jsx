import React from 'react';
import { ScrollView, View } from 'react-native';
import { Tag } from '../../bitComponents';
import TagListStyle from "./tagliststyle.js";

function TagList(props) {
    return (
        <View style={TagListStyle.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Tag icon="timeline" label="Trending" />
            <Tag icon="done-all" label="Top" />
            <Tag icon="dashboard" label="Art" />
            <Tag icon="library-music" label="Music" />
            <Tag icon="music-video" label="Video" />
            <Tag icon="timeline" label="Trending" />
            <Tag icon="done-all" label="Top" />
            <Tag icon="dashboard" label="Art" />
            <Tag icon="library-music" label="Music" />
            <Tag icon="music-video" label="Video" />
            </ScrollView>
        </View>
    );
}

export default TagList;