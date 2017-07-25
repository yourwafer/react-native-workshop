import React from 'react';
import ReactNative from 'react-native';
import axios from 'axios';
import NavContainer from './NavContainer';
import ArticleView from './ArticleList';
import { getSearchArticleUrl } from './Constant';
const {
	View,
	StyleSheet,
	ScrollView
} = ReactNative;

export default class extends React.PureComponent {

	constructor(props){
		super(props);
		this.state = { subject: 'index', articles: [] };
		this._getArticles('index');
	}

	_selectSubject = (subject) => {
		this.setState({ subject });
		this._getArticles(subject);
	};

	_getArticles(subject) {
		axios.get(getSearchArticleUrl(subject)).then(response => response.data.data.data).then(articles => {
			this.setState({ articles });
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<NavContainer subject={this.state.subject} select={this._selectSubject} />
				<ScrollView style={styles.articleList}>
					{this.state.articles.map((article) => <ArticleView key={article.id} article={article} />)}
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