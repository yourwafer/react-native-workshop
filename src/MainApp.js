import React from 'react';
import ReactNative from 'react-native';
import NavContainer from './NavContainer';
import ArticleView from './ArticleList';
const {
	View,
	StyleSheet,
	ScrollView
} = ReactNative;

export default class extends React.PureComponent {
	render() {
		const article = {
			pic_mid: 'http://file5.u148.net/2017/07/minimg/149966756391915J01JHDN.jpg',
			category: 3,
			title: '看剧的时候千万不要开弹幕啊啊啊……',
			summary: '我朋友小学时候的作文：我们都应该热爱动物，因为它们都很好吃。'
		};
		return (
			<View style={styles.container}>
				<NavContainer />
				<ScrollView style={styles.articleList}>
					{[...Array(10).keys()].map((i)=><ArticleView key={i} article={article} />)}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});