import React from 'react';
import logo from './logo.svg';
import './App.css';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import "./scss_ex.scss"

// 클래스형 컴포넌트는 이렇게 생겼습니다!
// App이라는 리액트 컴포넌트를 만들거야~라는 의미.
class App extends React.Component {
  //생성자함수
  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ['Goethe Zertifikat C1 합격하기', '마라톤 완주 4시간안에 하기', '자전거타고 후쿠오카까지 가보기'],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  // 함수에서는 return이었는데, 클래스컴포넌트는 조금 더 세세하게 작성되어져 있음.
  render() {
      console.log(this.state)
      return (
      <div className="App">
        <h1>내 버킷리스트</h1>
        {/* 컴포넌트를 넣어줍니다. */}
        <BucketList list={this.state.list}/>
      </div>
    );
  }
}

export default App;