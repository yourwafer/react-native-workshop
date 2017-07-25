import React from 'react';
import ReactNative from 'react-native';
import { getSubjectByValue } from './Constant';


let { FlatList, View, StyleSheet, Image, Text, TouchableHighlight } = ReactNative;

class ArticleView extends React.PureComponent {

	selectArticle = (articleId) => {
		return () => {
			this.props.select && this.props.select(articleId);
		}
	};

	render() {
		const article = this.props.article;
		return (
			<TouchableHighlight onPress={this.selectArticle(article)} activeOpacity={.7} underlayColor={'white'}>
				<View style={styles.container}>
					<View style={styles.imageContainer}>
						<Image
							style={styles.image}
							source={{ uri: article.pic_mid }}
						/>
					</View>
					<View style={styles.articleContainer}>
						<View style={styles.describeRow}>
							<Text numberOfLines={1} style={styles.textSubject}>
								<Text style={styles.articleType}>[{getSubjectByValue(article.category).display}]</Text>{article.title}
							</Text>
						</View>

						<View style={styles.describeRow}>
							<Text numberOfLines={2} style={styles.textDescribe}>
								{article.summary}
							</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}

const imageSize = { width: 120, height: 80 };

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
		height: 90
	},
	imageContainer: {
		...imageSize,
		borderRadius: 2,
		overflow: 'hidden'
	},
	image: {
		resizeMode: 'cover',
		...imageSize
	},
	articleContainer: {
		flex: 1,
		marginLeft: 8
	},
	articleType: {
		color: '#ff9900'
	},
	describeRow: {
		flexDirection: 'row',
		marginTop: 6,
	},
	textSubject: {
		fontSize: 14
	},
	textDescribe: {
		fontSize: 12
	}
});

export default ArticleView;