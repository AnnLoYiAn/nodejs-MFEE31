import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StockDetails = () => {
  const [error, setError] = useState(null);
  const [stocks, setStocks] = useState([]);
  const { stockId } = useParams();
  const [data, setData] = useState([]);

  
  console.log('StockDetail', stockId);

  // 用 [] 第二個參數，和包在 useEffect 裡面是為了避免無窮迴圈
  useEffect(() => {
    // 在 component 初始化的時候跑一次
    // 通常會把去跟後端要資料的動作放在這裡
    async function getData() {
      let response = await axios.get(`http://localhost:3001/api/stocks/${stockId}`);
      setData(response.data);
    }
    getData();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <ul>
        <li
          style={{
            display: 'inline-block',
            margin: '2px',
            // backgroundColor: page === i ? '#00d1b2' : '',
            // borderColor: page === i ? '#00d1b2' : '#dbdbdb',
            // color: page === i ? '#fff' : '#363636',
            borderWidth: '1px',
            width: '28px',
            height: '28px',
            borderRadius: '3px',
            textAlign: 'center',
          }}
        >
          1
        </li>
      </ul>
      目前在第 1 頁
      {data.map((data) => {
        return (
          <div key={data.date} className="bg-white bg-gray-50 p-6 rounded-lg shadow m-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">日期：{data.date}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">成交金額：{data.amount}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">成交股數：{data.volume}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">開盤價：{data.open_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">收盤價：{data.close_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">漲跌價差：{data.delta_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">最高價：{data.high_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">最低價：{data.low_price}</h2>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">成交筆數：{data.transactions}</h2>
          </div>
        );
      })}
      
    </div>
  );
};

export default StockDetails;