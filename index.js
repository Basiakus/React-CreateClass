var games = [{
		id: 1,
		title: 'Metal Gear Solid',

		img: "./images/mgs/1/mgs1.jpg",
		img2: "./images/mgs/2/mgs2.jpg",
		img3: "./images/mgs/3/mgs4.jpg"
	},
	{
		id: 2,
		title: 'Gran Turismo',
		img: "./images/gt/1/gt.jpg",
		img2: "./images/gt/2/gt.jpg",
		img3: "./images/gt/3/gt.jpg"
	},
	{
		id: 3,
		title: 'Diablo',
		img: "./images/diablo/1/diablo.jpg",
		img2: "./images/diablo/2/d.jpg",
		img3: "./images/diablo/3/d.jpg"
	}
];

var GamesCompare = React.createClass({
	propTypes: {
		gamesArray: React.PropTypes.array.isRequired
	},
	render: function() {

		var gamesList = this.props.gamesArray.map(function(game) {

			return React.createElement('li', {
					key: game.id
				},
				React.createElement('h2', {}, game.title),
				React.createElement('img', {src: game.img}),
				React.createElement('img', {src: game.img2}),
				React.createElement('img', {src: game.img3})
			)
		});

		return React.createElement('ul', {},
			React.createElement('h1', {}, 'Graphics compare', gamesList)
		);
	}
});

var element = React.createElement(GamesCompare, {gamesArray: games});
ReactDOM.render(element, document.getElementById('listOfGames'));