import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [{
  'id': 1,
  'image': 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/28/ac86e174-fb97-4a5c-8c8c-0f03b04cb59b.jpg',
  'name': '홍강',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://photo.newsen.com/mphoto/2022/06/03/202206030250095510_1.jpg',
  'name': '태연',
  'birthday': '987654',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnX5HqkTJgGnlDiMZ_VgBBWwyP0CTQgLeuQw&usqp=CAU',
  'name': '강아지',
  'birthday': '980004',
  'gender': '남자',
  'job': '백수'
}
]


function App() {
  return (
    <div>
      {
        customer.map(c=> {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            />
            );
        })
      }
      
    </div>
  );
}

export default App;
