import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

//Log with Morgan
app.use(morgan('dev'));

//accept encoded data as well as json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static files
app.use(express.static(__dirname + '/res'));

const imageList = [
	{
    "key": 0,
    "url": "https://process.filestackapi.com/tXRT7nQtWV6lJYkMztKQ"
  },
  {
    "key": 1,
    "url": "https://process.filestackapi.com/ylwhkrxjSWW1UpfZx7Y7"
  },
  {
    "key": 2,
    "url": "https://process.filestackapi.com/4LVWxdBS8KX776WURdnW"
  },
  {
    "key": 3,
    "url": "https://process.filestackapi.com/zsZiOwe2TfSVzVh9KBVL"
  },
  {
    "key": 4,
    "url": "https://process.filestackapi.com/LB9i2RqGRZSYb0JXfoVe"
  },
  {
    "key": 5,
    "url": "https://process.filestackapi.com/ZBrLcDzVS2S5wEt6qG8d"
  },
  {
    "key": 6,
    "url": "https://process.filestackapi.com/7uSyPg0DQBOtY5IeHBt9"
  },
  {
    "key": 7,
    "url": "https://process.filestackapi.com/xR1JfWuhSnSIMlTHxbzw"
  },
  {
    "key": 8,
    "url": "https://process.filestackapi.com/E6IOWBnKS6mQaYdZ24bA"
  },
  {
    "key": 9,
    "url": "https://process.filestackapi.com/iM3vYclQsWrC511pCs5g"
  },
  {
    "key": 10,
    "url": "https://process.filestackapi.com/ijzF3f4FSMa14BfQia53"
  },
  {
    "key": 11,
    "url": "https://process.filestackapi.com/1XFpFUP2RbyOlKXeiIr7"
  }
];

app.route('/image')
	.get((req, res) => res.json(imageList))
	.post((req, res) => {
		const { url } = req.body;
		imageList.push({
			key: imageList.length,
			url
		});
		res.json({
			success: 1,
			message:'Image Successfully added!'
		});
	});

app.listen(port);

console.log(`listening on port ${port}`);