const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req,res)=>{
    res.send([
      {
        'id': 1,
        'image': 'https://picsum.photos/64/64/?random',
        'name': '홍길원',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': 'https://picsum.photos/64/64',
        'name': '홍길투',
        'birthday': '987654',
        'gender': '여자',
        'job': '대학생'
      },
      {
        'id': 3,
        'image': 'https://loremflickr.com/64/64',
        'name': '홍길삼',
        'birthday': '980004',
        'gender': '남자',
        'job': '백수'
      }
      ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));